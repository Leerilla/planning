// Phase F1 — 학생 비밀번호 검증이 /api/auth로 동적 전환됐는지 검증

const { test, expect } = require('@playwright/test');

test.describe('학생 인증 API', () => {
  test('/api/auth POST { password: claude2026, role: student } → 200 success', async ({ request }) => {
    const res = await request.post('/api/auth', {
      data: { password: 'claude2026', role: 'student' },
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
    expect(body.role).toBe('student');
  });

  test('/api/auth POST 잘못된 비밀번호 → 401', async ({ request }) => {
    const res = await request.post('/api/auth', {
      data: { password: 'wrong-password', role: 'student' },
    });
    expect(res.status()).toBe(401);
  });

  test('/api/sessions-status GET → 9세션 status 객체', async ({ request }) => {
    const res = await request.get('/api/sessions-status');
    expect(res.status()).toBe(200);
    const body = await res.json();
    for (let i = 1; i <= 9; i++) {
      expect(['active', 'locked']).toContain(body[`s${i}`]);
    }
  });

  test('PasswordGate 동적 전환 — 잘못된 비밀번호 fetch 실패 후 에러 표시', async ({ page }) => {
    await page.goto('/');
    await page.locator('.gate-input').waitFor({ timeout: 30_000 });
    await page.locator('.gate-input').fill('wrong-password');
    await page.locator('.gate-btn').click();
    await expect(page.locator('.gate-error')).toContainText('비밀번호가 일치하지 않습니다');
    await expect(page.locator('.gate-input')).toHaveValue('');
  });
});
