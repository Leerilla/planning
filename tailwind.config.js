/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-soft': 'var(--bg-soft)',
        text: 'var(--text)',
        'text-sub': 'var(--text-sub)',
        'text-muted': 'var(--text-muted)',
        accent: 'var(--accent)',
        'accent-soft': 'var(--accent-soft)',
        highlight: 'var(--highlight)',
        divider: 'var(--divider)',
        'divider-strong': 'var(--divider-strong)',
        success: 'var(--success)',
        'success-soft': 'var(--success-soft)',
        warning: 'var(--warning)',
        'warning-soft': 'var(--warning-soft)',
        danger: 'var(--danger)',
        'danger-soft': 'var(--danger-soft)',
        info: 'var(--info)',
        'info-soft': 'var(--info-soft)',
        'cluster-1': 'var(--cluster-1)',
        'cluster-2': 'var(--cluster-2)',
        'cluster-3': 'var(--cluster-3)',
        'cluster-4': 'var(--cluster-4)',
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'sans-serif'],
        // D-046 (2026-05-15): font-mono 클래스 무효화 — wrapper/patterns 안 mono 폰트 0건 목표
        // 메인 허브/어드민/게이트는 globals.css에서 직접 'JetBrains Mono' 지정 (영향 X)
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '-0.01em',
      },
      transitionTimingFunction: {
        'easing': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
};
