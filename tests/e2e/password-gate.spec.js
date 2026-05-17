// Phase N2 검증 — PasswordGate sessionStorage 영속화

const { test, expect } = require('@playwright/test');

test.describe('PasswordGate', () => {
  test.beforeEach(async ({ context }) => {
    await context.clearCookies();
  });

  test('첫 진입 시 게이트 노출 → claude2026 통과', async ({ page }) => {
    await page.goto('/');
    await page.locator('.gate-title').waitFor({ timeout: 30_000 });
    await expect(page.locator('.gate-title')).toHaveText('학습 플랫폼 진입');
    await page.locator('.gate-input').fill('claude2026');
    await page.locator('.gate-btn').click();
    await page.locator('.hero-title').waitFor({ timeout: 15_000 });
  });

  test('잘못된 비밀번호 → 에러 메시지 표시', async ({ page }) => {
    await page.goto('/');
    await page.locator('.gate-input').waitFor({ timeout: 30_000 });
    await page.locator('.gate-input').fill('wrong');
    await page.locator('.gate-btn').click();
    await expect(page.locator('.gate-error')).toHaveText('비밀번호가 일치하지 않습니다');
    await expect(page.locator('.gate-input')).toHaveValue('');
  });

  test('새로고침 시 sessionStorage 영속 — 게이트 재출현 X', async ({ page }) => {
    await page.goto('/');
    await page.locator('.gate-input').waitFor({ timeout: 30_000 });
    await page.locator('.gate-input').fill('claude2026');
    await page.locator('.gate-btn').click();
    await page.locator('.hero-title').waitFor({ timeout: 15_000 });

    await page.reload();
    await page.locator('.hero-title').waitFor({ timeout: 15_000 });
    await expect(page.locator('.gate-title')).not.toBeVisible();
  });

  test('뒤로가기 후 복귀 시 게이트 재출현 X', async ({ page }) => {
    await page.goto('/');
    await page.locator('.gate-input').waitFor({ timeout: 30_000 });
    await page.locator('.gate-input').fill('claude2026');
    await page.locator('.gate-btn').click();
    await page.locator('.hero-title').waitFor({ timeout: 15_000 });

    await page.goto('/sessions/s1/theory');
    await page.goBack();
    await page.locator('.hero-title').waitFor({ timeout: 15_000 });
  });
});
