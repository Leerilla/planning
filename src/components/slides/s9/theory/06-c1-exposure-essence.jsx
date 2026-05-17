// Source: lectures/S9/lecture.md L42-53 (자동 매핑, comparison 2-row table)
// Type: ComparisonSlide

export default function S9TheoryC1ExposureEssence() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 1 · 노출의 본질
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          노출의 본질
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-4xl">
          노출은 작업자의 믿음을 시험하는 단계가 아니라 <span className="font-semibold">작업자의 모름을 발견하는 단계</span>이다.
        </p>

        {/* Table */}
        <div className="max-w-5xl overflow-hidden rounded-2xl border border-divider">
          {/* Table header */}
          <div className="grid grid-cols-[280px_1fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
            <span className="text-sm font-bold text-text-muted uppercase tracking-wide">발견</span>
            <span className="text-sm font-bold text-text-muted uppercase tracking-wide">결과</span>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-[280px_1fr] px-5 py-4 border-b border-divider">
            <span className="text-text font-semibold">모름이 발견됨</span>
            <span className="text-text-sub">갱신할 페르소나와 PRD가 있음</span>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-[280px_1fr] px-5 py-4">
            <span className="text-text font-semibold">모름이 발견 안 됨</span>
            <span className="text-text-sub">5 Whys가 충분히 깊지 못했거나 페르소나가 너무 좁음</span>
          </div>
        </div>

        {/* Aside note */}
        <div className="border-l-4 border-divider bg-bg-soft rounded-r-2xl px-6 py-3 max-w-4xl mt-4">
          <p className="text-sm text-text-muted leading-relaxed">
            차이가 크다고 실패가 아니다. 차이를 <span className="italic font-semibold">측정</span>했다는 사실이 다음 사이클의 출발점이 된다.
          </p>
        </div>
      </div>
    </>
  );
}
