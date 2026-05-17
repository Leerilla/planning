// Source: lectures/S9/lecture.md L55-65 (자동 매핑, comparison 3-col × 3-row table)
// Type: ComparisonSlide

export default function S9TheoryC1TwoAxisRecycle() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 1 · 두 축 안전망
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          두 축 안전망의 재활용
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-4xl">
          자료 2에서 도입한 두 축 안전망이 본 단계에서 다시 작동한다.
        </p>

        {/* Table */}
        <div className="max-w-5xl overflow-hidden rounded-2xl border border-divider">
          {/* Table header */}
          <div className="grid grid-cols-[140px_1fr_1fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
            <span className="text-sm font-bold text-text-muted uppercase tracking-wide">비교</span>
            <span className="text-sm font-bold text-text-muted uppercase tracking-wide">자료 2 두 축</span>
            <span className="text-sm font-bold text-text-muted uppercase tracking-wide">본 단계 두 축</span>
          </div>

          {/* Row 1: 능동 */}
          <div className="grid grid-cols-[140px_1fr_1fr] px-5 py-4 border-b border-divider">
            <span className="font-bold text-text">능동</span>
            <span className="text-text-sub">콜드 메일 카피로 인터뷰 요청</span>
            <span className="text-text-sub">재피드백 메일로 사용 후기 요청</span>
          </div>

          {/* Row 2: 수동 */}
          <div className="grid grid-cols-[140px_1fr_1fr] px-5 py-4 border-b border-divider">
            <span className="font-bold text-text">수동</span>
            <span className="text-text-sub">Playwright MCP로 커뮤니티 글 스크래핑</span>
            <span className="text-text-sub">분석 도구 3종이 자동 수집</span>
          </div>

          {/* Row 3: 데이터 본질 */}
          <div className="grid grid-cols-[140px_1fr_1fr] px-5 py-4">
            <span className="font-bold text-text">데이터 본질</span>
            <span className="text-text-sub"><span className="italic font-semibold">문제가 진짜인가</span> 측정</span>
            <span className="text-text-sub"><span className="italic font-semibold">MVP가 문제를 푸는가</span> 측정</span>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-sm text-text-muted max-w-4xl mt-4">
          응답률 5-15% 현실은 본 단계에서도 같다. 컨택 10명에 보내면 응답 1-2명 기대.
        </p>
      </div>
    </>
  );
}
