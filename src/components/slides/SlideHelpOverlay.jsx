'use client';

const SHORTCUTS = [
  { keys: ['→', 'Space', 'PgDn'], desc: '다음 슬라이드' },
  { keys: ['←', 'PgUp'], desc: '이전 슬라이드' },
  { keys: ['Home'], desc: '첫 슬라이드' },
  { keys: ['End'], desc: '마지막 슬라이드' },
  { keys: ['F'], desc: '전체화면 토글' },
  { keys: ['?'], desc: '이 도움말 토글' },
  { keys: ['Esc'], desc: '도움말 닫기 / 세션 허브로' },
];

export default function SlideHelpOverlay({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="키보드 단축키"
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-text/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <div className="relative bg-bg border border-divider rounded-2xl shadow-2xl p-10 max-w-lg w-[90vw] flex flex-col gap-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-text">키보드 단축키</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-text-sub hover:text-text text-sm font-medium px-3 py-1 rounded-xl transition-colors"
            aria-label="도움말 닫기"
          >
            닫기
          </button>
        </div>

        <ul className="flex flex-col gap-3">
          {SHORTCUTS.map((s, i) => (
            <li key={i} className="flex items-center justify-between gap-6">
              <div className="flex gap-1.5 flex-wrap">
                {s.keys.map((k) => (
                  <kbd
                    key={k}
                    className="text-xs px-2 py-1 rounded-xl border border-divider bg-bg-soft text-text"
                  >
                    {k}
                  </kbd>
                ))}
              </div>
              <span className="text-sm text-text-sub tracking-tight">{s.desc}</span>
            </li>
          ))}
        </ul>

        <div className="text-xs text-text-muted tracking-tight pt-3 border-t border-divider">
          모바일은 좌우 스와이프로 슬라이드 전환.
        </div>
      </div>
    </div>
  );
}
