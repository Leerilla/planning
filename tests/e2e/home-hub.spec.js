// 메인 허브 8섹션 렌더 + 시각 회귀 baseline

const { test, expect } = require('@playwright/test');

async function authenticate(page) {
  await page.goto('/');
  await page.locator('.gate-input').waitFor({ timeout: 30_000 });
  await page.locator('.gate-input').fill('claude2026');
  await page.locator('.gate-btn').click();
  await page.locator('.hero-title').waitFor({ timeout: 15_000 });
}

test.describe('메인 허브 8섹션', () => {
  test('인증 통과 후 8섹션 모두 렌더', async ({ page }) => {
    await authenticate(page);

    await expect(page.locator('.nav')).toBeVisible();
    await expect(page.locator('.hero-title')).toBeVisible();
    await expect(page.locator('.journey')).toBeVisible();
    await expect(page.locator('.session-flow')).toBeVisible();
    await expect(page.locator('.sessions-grid')).toBeVisible();
    await expect(page.locator('.principles')).toBeVisible();
    await expect(page.locator('.footer')).toBeVisible();
  });

  test('Hero 메타 4개 (9 / 21h / 12 / 1) 표시', async ({ page }) => {
    await authenticate(page);
    const metas = page.locator('.hero-meta-num');
    await expect(metas).toHaveCount(4);
    await expect(metas.nth(0)).toHaveText('9');
    await expect(metas.nth(1)).toHaveText('21h');
  });

  test('Navigation 4개 링크 표시 (여정/사이클/세션/원칙)', async ({ page }) => {
    await authenticate(page);
    const links = page.locator('.nav-link');
    await expect(links).toHaveCount(4);
    await expect(page.locator('.nav-progress')).toHaveCount(0);
  });

  test('S1 중심 멘트 0건 검증', async ({ page }) => {
    await authenticate(page);
    const body = await page.locator('body').textContent();
    expect(body).not.toContain('차례로 펼쳐집니다');
    expect(body).not.toContain('한 번에 한 세션에 집중');
    expect(body).not.toContain('진행 중');
    expect(body).not.toContain('STEP 02');
    expect(body).not.toContain('김지수');
    expect(body).not.toContain('SIDE-PROJECT MAKER');
  });
});
