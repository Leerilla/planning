// Source: lectures/S9/lecture.md L126-136 (#### 신호 판단 기준)
// Type: terms (table 3-row)

export default function S9TheoryC2SignalCriteria() {
  return (
    <>
      <div className="flex flex-col h-full">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 2 · 신호 판단
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          신호 판단 기준
        </h2>

        {/* Subtitle */}
        <p className="text-lg font-semibold text-text mb-6 max-w-3xl">
          패턴이 신호 — 3 기준으로 판단
        </p>

        {/* Table */}
        <div className="grid gap-4 max-w-5xl mt-6 mb-12">
          {/* Header row */}
          <div className="grid grid-cols-[240px_1fr] gap-4 border-b border-divider pb-4">
            <span className="text-text font-bold text-sm uppercase tracking-wider">기준</span>
            <span className="text-text font-bold text-sm uppercase tracking-wider">적용</span>
          </div>

          {/* Row 1: 30% 이상 */}
          <div className="grid grid-cols-[240px_1fr] gap-4 pb-4 border-b border-divider">
            <span className="text-accent font-bold text-base">30% 이상</span>
            <span className="text-text font-medium text-base">
              사용자의 30% 이상에서 반복되면 신호
            </span>
          </div>

          {/* Row 2: 3건 미만 */}
          <div className="grid grid-cols-[240px_1fr] gap-4 pb-4 border-b border-divider">
            <span className="text-accent font-bold text-base">3건 미만</span>
            <span className="text-text font-medium text-base">
              단발 행동은 잡음으로 분류, 메모만
            </span>
          </div>

          {/* Row 3: 본 학습 현실 */}
          <div className="grid grid-cols-[240px_1fr] gap-4">
            <span className="text-accent font-bold text-base">본 학습 현실</span>
            <span className="text-text font-medium text-base">
              10-30명 수준에서는 3-5명 같은 행동도 신호로 봄
            </span>
          </div>
        </div>

        {/* Aside — 높이 축소 (py-2 + leading-tight) */}
        <div className="mt-auto max-w-2xl border-l-4 border-accent bg-accent-soft px-4 py-2 rounded-r-xl">
          <p className="text-text-sub text-xs font-medium leading-tight">
            30%는 절대적 기준이 아니라 작업자의 판단 가이드. 사용자 수가 적은 본 학습에서는 절대 수치도 함께 본다.
          </p>
        </div>
      </div>
    </>
  );
}
