'use client';

export default function SlideControls({ current, total, onExit, onJumpTo, slides = [] }) {
  const progress = total > 0 ? (current / total) * 100 : 0;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-divider z-30 pointer-events-none">
        <div
          className="h-full bg-accent"
          style={{
            width: `${progress}%`,
            transition: 'width 300ms var(--easing)',
          }}
        />
      </div>

      <button
        onClick={onExit}
        type="button"
        className="fixed top-4 left-6 text-sm text-text-sub hover:text-text font-semibold tracking-wider px-3 py-1 rounded-xl transition-colors z-30"
        aria-label="세션 허브로 돌아가기"
      >
        ← 허브
      </button>

      <div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 max-w-[60vw] overflow-x-auto"
        role="tablist"
        aria-label="슬라이드 목록"
      >
        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-bg-soft/80 backdrop-blur-sm border border-divider">
          {Array.from({ length: total }, (_, i) => i + 1).map((n) => {
            const isCurrent = n === current;
            const title = slides[n - 1]?.title;
            return (
              <button
                key={n}
                type="button"
                onClick={() => onJumpTo?.(n)}
                role="tab"
                aria-selected={isCurrent}
                aria-label={title ? `슬라이드 ${n} — ${title}` : `슬라이드 ${n}`}
                className={
                  isCurrent
                    ? 'h-1.5 w-6 rounded-full bg-accent transition-all duration-200 ease-out'
                    : 'h-1.5 w-1.5 rounded-full bg-divider-strong hover:bg-accent hover:scale-150 transition-all duration-200 ease-out'
                }
                title={title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
