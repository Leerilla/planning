// 9세션 카드 → /sessions/s{N} 라우팅 검증
// Phase F1 이후: SessionGrid가 동적 잠금 (기본 시드 S1만 active, S2~S9 locked)

const { test, expect } = require('@playwright/test');

async function authenticate(page) {
  await page.goto('/');
  await page.locator('.gate-input').waitFor({ timeout: 30_000 });
  await page.locator('.gate-input').fill('claude2026');
  await page.locator('.gate-btn').click();
  await page.locator('.hero-title').waitFor({ timeout: 15_000 });
  // sessions-status fetch 반영 대기 — locked 또는 active 클래스가 카드에 적용될 때까지
  await page.locator('.session-card.active, .session-card.locked').first().waitFor({ timeout: 10_000 });
}

test.describe('SessionGrid 라우팅', () => {
  test('9개 세션 카드 모두 렌더 + 기본 시드 (S1 active / S2~S9 locked)', async ({ page }) => {
    await authenticate(page);
    const cards = page.locator('.session-card');
    await expect(cards).toHaveCount(9);
    await expect(page.locator('.session-card.active')).toHaveCount(1);
    await expect(page.locator('.session-card.locked')).toHaveCount(8);
  });

  test('S1 카드 클릭 → /sessions/s1 hub 이동', async ({ page }) => {
    await authenticate(page);
    await page.locator('.session-card.active').first().click();
    await expect(page).toHaveURL(/\/sessions\/s1$/);
  });

  test('active 카드는 "이론 + 활동" tag, locked 카드는 "잠금" tag', async ({ page }) => {
    await authenticate(page);
    const activeTags = await page.locator('.session-card.active .session-card-tag').allTextContents();
    const lockedTags = await page.locator('.session-card.locked .session-card-tag').allTextContents();
    expect(activeTags).toHaveLength(1);
    expect(lockedTags).toHaveLength(8);
    activeTags.forEach((tag) => expect(tag).toContain('이론 + 활동'));
    lockedTags.forEach((tag) => expect(tag).toContain('잠금'));
  });
});
