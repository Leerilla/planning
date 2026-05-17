// D-039: Playwright visual regression — 슬라이드 자동 screenshot
// 1280×720 desktop + 360×800 mobile, baseline-based diff (5% threshold)

import { test, expect } from '@playwright/test';

const SESSIONS = [
  { session: 's1', deck: 'theory' },
  // T4.5 (2026-05-15): S6 109장 자동 캡처용 추가
  { session: 's6', deck: 'theory' },   // 57장
  { session: 's6', deck: 'activity' }, // 52장
];

const VIEWPORTS = [
  { name: 'desktop', width: 1280, height: 720 },
  { name: 'mobile', width: 360, height: 800 },
];

// 슬라이드 수는 deck-registry에서 동적 로드 가능. 현재는 알려진 max로 처리
// S1 theory 11장 / S6 theory 57장 / S6 activity 52장 → max 60
const MAX_SLIDES = 60;

for (const { session, deck } of SESSIONS) {
  for (const viewport of VIEWPORTS) {
    test.describe(`Visual regression — ${session}/${deck} @ ${viewport.name}`, () => {
      test.use({ viewport });

      for (let slideIndex = 1; slideIndex <= MAX_SLIDES; slideIndex++) {
        test(`slide ${slideIndex}`, async ({ page, browserName }) => {
          // PasswordGate bypass via sessionStorage
          await page.goto('/');
          await page.evaluate(() => {
            sessionStorage.setItem('student_authenticated', 'true');
          });

          await page.goto(`/sessions/${session}/${deck}`);
          await page.waitForLoadState('networkidle');

          // 슬라이드 N으로 이동 — 좌우 화살표 or URL hash
          const slides = await page.locator('.slide-frame').count();
          if (slideIndex > slides) {
            test.skip(true, `Slide ${slideIndex} out of range (total ${slides})`);
            return;
          }

          // 키보드 → 슬라이드 이동
          for (let i = 1; i < slideIndex; i++) {
            await page.keyboard.press('ArrowRight');
            await page.waitForTimeout(400);
          }
          await page.waitForTimeout(600); // animation 완료 대기

          // Screenshot — baseline diff (threshold 5%)
          await expect(page).toHaveScreenshot(
            `${session}-${deck}-${String(slideIndex).padStart(2, '0')}-${viewport.name}.png`,
            {
              maxDiffPixelRatio: 0.05,
              animations: 'disabled',
              fullPage: false,
            }
          );
        });
      }
    });
  }
}
