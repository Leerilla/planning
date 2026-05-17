// Source: Phase N3 — E2E 테스트 인프라
// Phase F1.6 — workers 병렬, retries dev=0 (timeout 누적 방지), action/navigation timeout 단축
// 메인 허브 8섹션 + PasswordGate 영속 + SessionFlow + 슬라이드 덱 키보드 검증

const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : '50%',
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    actionTimeout: 10_000,
    navigationTimeout: 20_000,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['iPhone 13'] } },
  ],
  webServer: {
    command: 'npm run dev',
    port: 3000,
    timeout: 120_000,
    reuseExistingServer: !process.env.CI,
    // E2E에서는 메모리 KV fallback 강제 — 시스템 환경변수에 KV 토큰이 있더라도 격리
    env: { E2E_MEMORY_FALLBACK: '1' },
  },
});
