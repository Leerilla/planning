// Phase F1 — locked 세션 카드 클릭 차단 + Lock 아이콘

const { test, expect } = require('@playwright/test');

async function authenticate(page) {
  await page.goto('/');
  await page.locator('.gate-input').waitFor({ timeout: 30_000 });
  await page.locator('.gate-input').fill('claude2026');
  await page.locator('.gate-btn').click();
  await page.locator('.hero-title').waitFor({ timeout: 15_000 });
  // sessions-status fetch 반영 대기
  await page.locator('.session-card.active, .session-card.locked').first().waitFor({ timeout: 10_000 });
}

test.describe('세션 잠금 UX', () => {
  test('기본 시드 — S1만 active, S2~S9 locked', async ({ page }) => {
    await authenticate(page);
    await page.locator('.sessions-grid').scrollIntoViewIfNeeded();
    const cards = page.locator('.session-card');
    await expect(cards).toHaveCount(9);
    await expect(page.locator('.session-card.active')).toHaveCount(1);
    await expect(page.locator('.session-card.locked')).toHaveCount(8);
  });

  test('locked 카드는 button — 클릭 시 navigate 안 됨', async ({ page }) => {
    await authenticate(page);
    await page.locator('.sessions-grid').scrollIntoViewIfNeeded();
    const before = page.url();
    const lockedCard = page.locator('.session-card.locked').first();
    // aria-disabled='true' 때문에 일반 click은 거부 → force: true로 강제 click
    // 핵심 검증: 클릭해도 URL 변경되지 않아야 함 (button + e.preventDefault)
    await lockedCard.click({ force: true });
    await page.waitForTimeout(300);
    expect(page.url()).toBe(before);
  });

  test('locked 카드에 lock-overlay + Lock 아이콘 표시', async ({ page }) => {
    await authenticate(page);
    await page.locator('.sessions-grid').scrollIntoViewIfNeeded();
    const lockedCard = page.locator('.session-card.locked').first();
    await expect(lockedCard.locator('.lock-overlay')).toHaveCount(1);
    await expect(lockedCard.locator('svg')).toHaveCount(1);
    await expect(lockedCard.locator('.session-card-tag')).toContainText('잠금');
  });

  test('active 카드는 link — 클릭 시 /sessions/{slug}로 이동', async ({ page }) => {
    await authenticate(page);
    await page.locator('.sessions-grid').scrollIntoViewIfNeeded();
    await page.locator('.session-card.active').first().click();
    await expect(page).toHaveURL(/\/sessions\/s\d+$/);
  });
});
