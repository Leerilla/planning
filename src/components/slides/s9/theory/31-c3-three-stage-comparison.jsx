// Source: lectures/S9/lecture.md L352-358 (#### 페르소나 3단계 비교, comparison 3행×4열 table)
// Type: ComparisonSlide
// Pattern: 3단계 진화 비교 테이블 (시점/자신감/갱신)
// Profile: hierarchical + comparison visual + balanced tone

export default function S9TheoryC3ThreeStageComparison() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 3 · 3단계 비교
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          페르소나 3단계 진화 비교
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-4xl">
          각 단계 데이터 신뢰도 증가
        </p>

        {/* Table */}
        <div className="max-w-6xl overflow-hidden rounded-2xl border border-divider">
          {/* Table header */}
          <div className="grid grid-cols-[180px_1fr_1fr_1fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
            <span className="text-sm font-bold text-text-muted uppercase tracking-wide">비교</span>
            <span className="text-sm font-bold text-text-muted uppercase tracking-wide">가설 페르소나</span>
            <span className="text-sm font-bold text-text-muted uppercase tracking-wide">검증된 페르소나</span>
            <span className="text-sm font-bold text-accent uppercase tracking-wide ">살아있는 페르소나</span>
          </div>

          {/* Row 1: 시점 */}
          <div className="grid grid-cols-[180px_1fr_1fr_1fr] px-5 py-4 border-b border-divider">
            <span className="font-bold text-accent">시점</span>
            <span className="text-text-sub">자료 1</span>
            <span className="text-text-sub">자료 2-3</span>
            <span className="font-semibold text-accent ">본 단계</span>
          </div>

          {/* Row 2: 자신감 */}
          <div className="grid grid-cols-[180px_1fr_1fr_1fr] px-5 py-4 border-b border-divider">
            <span className="font-bold text-accent">자신감</span>
            <span className="text-text-sub">낮음 (가설)</span>
            <span className="text-text-sub">중간 (검증)</span>
            <span className="font-semibold text-accent ">높음 (사용 데이터)</span>
          </div>

          {/* Row 3: 갱신 */}
          <div className="grid grid-cols-[180px_1fr_1fr_1fr] px-5 py-4">
            <span className="font-bold text-accent">갱신</span>
            <span className="text-text-sub">검증 단계</span>
            <span className="text-text-sub">노출 단계</span>
            <span className="font-semibold text-accent ">다음 사이클</span>
          </div>
        </div>

        {/* Aside note */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-2xl px-6 py-3 max-w-4xl mt-5">
          <p className="text-sm text-text-sub leading-relaxed">
            9세션 누적의 마지막 단계 — 데이터 신뢰도가 가장 높은 상태
          </p>
        </div>
      </div>
    </>
  );
}
