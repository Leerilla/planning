// Source: lectures/S9/lecture.md L742-749 (#### 3-2 Clarity 히트맵, comparison 2-row table)
// Type: ComparisonSlide

export default function S9ActivityStep3ClarityHeatmap() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 3-2 · Clarity 히트맵
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          3-2. Clarity 히트맵 보기
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          핵심 페이지(카피 입력, 카피 결과) 히트맵 확인
        </p>

        {/* Table */}
        <div className="grid gap-0 max-w-5xl border border-divider rounded-xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[280px_1fr] gap-0">
            <div className="bg-bg-soft border-b-2 border-r border-divider px-5 py-3">
              <p className="text-sm font-bold text-text-muted uppercase tracking-wide">분석</p>
            </div>
            <div className="bg-bg-soft border-b-2 border-divider px-5 py-3">
              <p className="text-sm font-bold text-text-muted uppercase tracking-wide">의미</p>
            </div>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-[280px_1fr] gap-0">
            <div className="border-b border-r border-divider px-5 py-4 flex items-center">
              <p className="font-semibold text-accent">클릭 집중 영역</p>
            </div>
            <div className="border-b border-divider px-5 py-4 flex items-center">
              <p className="text-text">사용자가 핵심으로 인식</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-[280px_1fr] gap-0">
            <div className="border-r border-divider px-5 py-4 flex items-center">
              <p className="font-semibold text-warning">안 보이는 영역 (히트맵 X)</p>
            </div>
            <div className="px-5 py-4 flex items-center">
              <p className="text-text">사용자가 보지 못하고 지나침</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
