// Source: lectures/S9/lecture.md L776-782 (#### 3-4 PRD 가설 매칭, comparison 3-col × 2-row table)
// Type: ComparisonSlide

export default function S9ActivityStep3PrdMatch() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 3-4 · 시드 6번 PRD 매칭
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          3-4. 시드 6번 PRD 가설 매칭
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          본 단계 데이터로 PRD 핵심 가설 통과 여부 측정
        </p>

        {/* Table */}
        <div className="grid gap-0 max-w-6xl border border-divider rounded-xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[1fr_220px_180px] gap-0">
            <div className="bg-bg-soft border-b-2 border-r border-divider px-5 py-3">
              <p className="text-sm font-bold text-text-muted uppercase tracking-wide">PRD 가설</p>
            </div>
            <div className="bg-bg-soft border-b-2 border-r border-divider px-5 py-3">
              <p className="text-sm font-bold text-text-muted uppercase tracking-wide">측정 데이터</p>
            </div>
            <div className="bg-bg-soft border-b-2 border-divider px-5 py-3">
              <p className="text-sm font-bold text-text-muted uppercase tracking-wide">통과 기준</p>
            </div>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-[1fr_220px_180px] gap-0">
            <div className="border-b border-r border-divider px-5 py-4 flex items-center">
              <p className="text-text font-semibold">카피 후보 사용률 70% 이상</p>
            </div>
            <div className="border-b border-r border-divider px-5 py-4 flex items-center">
              <p className="text-text-sub">K/M (버튼 클릭 → 완료)</p>
            </div>
            <div className="border-b border-divider px-5 py-4 flex items-center">
              <p className="text-accent font-bold">70%+ 통과</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-[1fr_220px_180px] gap-0">
            <div className="border-r border-divider px-5 py-4 flex items-center">
              <p className="text-text font-semibold">카피 작성 시간 1-2시간 → 5분</p>
            </div>
            <div className="border-r border-divider px-5 py-4 flex items-center">
              <p className="text-text-sub">Clarity 세션 시간</p>
            </div>
            <div className="px-5 py-4 flex items-center">
              <p className="text-accent font-bold">5분 이내</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
