// SessionFlow 컴포넌트 — 수직 4단계 그리드 + 9세션 노드 자동 재생 + 클릭 점프

const { test, expect } = require('@playwright/test');

async function authenticate(page) {
  await page.goto('/');
  await page.locator('.gate-input').waitFor({ timeout: 30_000 });
  await page.locator('.gate-input').fill('claude2026');
  await page.locator('.gate-btn').click();
  await page.locator('.hero-title').waitFor({ timeout: 15_000 });
}

test.describe('SessionFlow', () => {
  test('초기 상태 — 9개 노드 + 4단계 컬럼 렌더 + 진행 0/9', async ({ page }) => {
    await authenticate(page);
    const flow = page.locator('.session-flow');
    await flow.scrollIntoViewIfNeeded();
    await expect(page.locator('.sf-flow-node')).toHaveCount(9);
    await expect(page.locator('.sf-flow-stage')).toHaveCount(4);
    await expect(page.locator('.sf-summary')).toContainText('0 / 9');
  });

  test('재생 버튼 → 9초 동안 9개 노드 점진 노출', async ({ page }) => {
    await authenticate(page);
    await page.locator('.session-flow').scrollIntoViewIfNeeded();
    await page.locator('.sf-btn:not(.secondary)').click();

    await page.waitForTimeout(5500);
    const revealedMid = await page.locator('.sf-flow-node.revealed').count();
    expect(revealedMid).toBeGreaterThanOrEqual(5);

    await page.waitForTimeout(4500);
    await expect(page.locator('.sf-flow-node.revealed')).toHaveCount(9);
    await expect(page.locator('.sf-summary')).toContainText('9 / 9');
  });

  test('S8 노드 클릭 → 진행 8/9로 점프', async ({ page }) => {
    await authenticate(page);
    await page.locator('.session-flow').scrollIntoViewIfNeeded();
    await page.locator('.sf-flow-node').nth(7).click(); // 0-indexed: S8
    await expect(page.locator('.sf-summary')).toContainText('8 / 9');
  });

  test('처음부터 버튼 → 진행 0/9 리셋', async ({ page }) => {
    await authenticate(page);
    await page.locator('.session-flow').scrollIntoViewIfNeeded();
    await page.locator('.sf-flow-node').nth(7).click();
    await page.locator('.sf-btn.secondary').click();
    await expect(page.locator('.sf-summary')).toContainText('0 / 9');
  });
});
