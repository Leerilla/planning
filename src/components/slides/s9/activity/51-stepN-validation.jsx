// Source: lectures/S9/lecture.md L1085-1089 (Step N 검증 기준, activity 3-item checklist)
// Type: ActivitySlide

export default function S9ActivityStepNValidation() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 N · 검증 기준
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          Step N 검증 기준
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          본 학습 종료 — 3가지 확인
        </p>

        {/* 3-item checklist with empty checkbox SVG */}
        <div className="flex flex-col gap-3 max-w-5xl">
          {/* Item 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <svg className="w-5 h-5 shrink-0 mt-0.5 text-text-muted" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="16" height="16" rx="2" />
            </svg>
            <p className="text-base text-text leading-relaxed pt-0.5">
              산출물 7개가 모두 손에 있는가
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <svg className="w-5 h-5 shrink-0 mt-0.5 text-text-muted" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="16" height="16" rx="2" />
            </svg>
            <p className="text-base text-text leading-relaxed pt-0.5">
              학습 종착점 5개를 손에 쥐고 있는가
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <svg className="w-5 h-5 shrink-0 mt-0.5 text-text-muted" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="16" height="16" rx="2" />
            </svg>
            <p className="text-base text-text leading-relaxed pt-0.5">
              본 학습 후 본인 사이클의 첫 걸음이 명확한가
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
