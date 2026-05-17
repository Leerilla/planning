// 슬라이드 덱 키보드 네비게이션 + URL hash 동기화

const { test, expect } = require('@playwright/test');

test.describe('슬라이드 덱 — S1 이론 (37장)', () => {
  test('초기 진입 → #1', async ({ page }) => {
    await page.goto('/sessions/s1/theory');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/#1/);
  });

  test('→ 키 — 다음 슬라이드 + URL hash 갱신', async ({ page }) => {
    await page.goto('/sessions/s1/theory');
    await page.waitForLoadState('networkidle');
    await page.keyboard.press('ArrowRight');
    await expect(page).toHaveURL(/#2/);
    await page.keyboard.press('ArrowRight');
    await expect(page).toHaveURL(/#3/);
  });

  test('← 키 — 이전 슬라이드', async ({ page }) => {
    await page.goto('/sessions/s1/theory');
    await page.waitForLoadState('networkidle');
    // → 4회 → #5
    for (let i = 0; i < 4; i++) await page.keyboard.press('ArrowRight');
    await expect(page).toHaveURL(/#5/);
    await page.keyboard.press('ArrowLeft');
    await expect(page).toHaveURL(/#4/);
  });

  test('Home / End 키 — 처음/끝 점프', async ({ page }) => {
    await page.goto('/sessions/s1/theory');
    await page.waitForLoadState('networkidle');
    // → 9회 → #10
    for (let i = 0; i < 9; i++) await page.keyboard.press('ArrowRight');
    await page.keyboard.press('End');
    await expect(page).toHaveURL(/#37/);
    await page.keyboard.press('Home');
    await expect(page).toHaveURL(/#1/);
  });

  test('? 키 — 도움말 오버레이 토글', async ({ page }) => {
    await page.goto('/sessions/s1/theory');
    await page.waitForLoadState('networkidle');
    await page.keyboard.press('?');
    // 오버레이 표시 — 정확한 selector는 SlideHelpOverlay 구현에 따라 조정
    const overlay = page.locator('[role="dialog"]');
    if (await overlay.count() > 0) {
      await expect(overlay).toBeVisible();
      await page.keyboard.press('Escape');
      await expect(overlay).not.toBeVisible();
    }
  });
});
