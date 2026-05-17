// Phase F1 — 어드민 대시보드 인증 + 토글
// .env.local에 ADMIN_PASSWORD 미설정 시 skip (강사 영역)

const { test, expect } = require('@playwright/test');

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || process.env.E2E_ADMIN_PASSWORD || '';

test.describe('어드민 대시보드', () => {
  test.skip(!ADMIN_PASSWORD, 'ADMIN_PASSWORD 미설정 — .env.local 또는 E2E_ADMIN_PASSWORD 환경변수 필요');

  test('/admin 진입 시 어드민 로그인 폼', async ({ page }) => {
    await page.goto('/admin');
    await expect(page.locator('.admin-title')).toContainText('강사 어드민 패널');
    await expect(page.locator('.admin-input')).toBeVisible();
  });

  test('잘못된 어드민 비밀번호 → 에러 표시', async ({ page }) => {
    await page.goto('/admin');
    await page.locator('.admin-input').fill('wrong-admin-password');
    await page.locator('.admin-btn.primary').click();
    await expect(page.locator('.admin-error')).toContainText('어드민 비밀번호가 일치하지 않습니다');
  });

  test('정확한 어드민 비밀번호 → 대시보드 9세션 행 표시', async ({ page }) => {
    await page.goto('/admin');
    await page.locator('.admin-input').fill(ADMIN_PASSWORD);
    await page.locator('.admin-btn.primary').click();
    await page.locator('.admin-table').waitFor({ timeout: 15_000 });
    await expect(page.locator('.admin-row:not(.admin-row-head)')).toHaveCount(9);
  });

  test('S2 토글 → locked → active → KV 갱신 → 메인 허브 반영', async ({ page, context }) => {
    await page.goto('/admin');
    await page.locator('.admin-input').fill(ADMIN_PASSWORD);
    await page.locator('.admin-btn.primary').click();
    await page.locator('.admin-table').waitFor({ timeout: 15_000 });

    const s2Row = page.locator('.admin-row').filter({ hasText: 'SESSION 02' });
    await s2Row.locator('.admin-btn').click();
    // 갱신 대기
    await expect(s2Row.locator('.admin-row-status')).toHaveText(/활성/, { timeout: 10_000 });

    // 메인 허브 새로고침 후 S2가 active 상태인지
    const main = await context.newPage();
    await main.goto('/');
    await main.locator('.gate-input').waitFor({ timeout: 30_000 });
    await main.locator('.gate-input').fill('claude2026');
    await main.locator('.gate-btn').click();
    await main.locator('.hero-title').waitFor({ timeout: 15_000 });
    await main.locator('.sessions-grid').scrollIntoViewIfNeeded();
    const s2Card = main.locator('.session-card[data-slug="s2"]');
    await expect(s2Card).toHaveClass(/active/);

    // 정리: S2 다시 locked
    await s2Row.locator('.admin-btn').click();
    await expect(s2Row.locator('.admin-row-status')).toHaveText(/잠금/, { timeout: 10_000 });
    await main.close();
  });
});
