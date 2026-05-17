// Source: lectures/S9/lecture.md L138-149 (#### 네 종류 데이터의 역할 차이)
// Type: comparison (table 4-row × 3-col)

export default function S9TheoryC2FourData() {
  return (
    <>
      <div className="flex flex-col h-full">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 2 · 데이터 역할
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          4종 데이터의 역할 차이
        </h2>

        {/* Subtitle */}
        <p className="text-lg font-semibold text-text mb-6 max-w-4xl">
          자료 8의 분석 도구 3종 + 자료 2의 능동 응답 — 서로 다른 질문에 답함
        </p>

        {/* Table */}
        <div className="grid gap-4 max-w-6xl mt-6 mb-12">
          {/* Header row */}
          <div className="grid grid-cols-[160px_1fr_1fr] gap-4 border-b border-divider pb-4">
            <span className="text-text font-bold text-sm uppercase tracking-wider">데이터</span>
            <span className="text-text font-bold text-sm uppercase tracking-wider">답하는 질문</span>
            <span className="text-text font-bold text-sm uppercase tracking-wider">본 단계 의사결정</span>
          </div>

          {/* Row 1: 응답 */}
          <div className="grid grid-cols-[160px_1fr_1fr] gap-4 pb-4 border-b border-divider items-start">
            <span className="text-accent font-bold text-base">응답</span>
            <span className="text-text italic font-medium text-base">
              페르소나가 무엇을 느꼈는가
            </span>
            <span className="text-text font-semibold text-base">
              페르소나 갱신, PRD 일부 수정
            </span>
          </div>

          {/* Row 2: Clarity */}
          <div className="grid grid-cols-[160px_1fr_1fr] gap-4 pb-4 border-b border-divider items-start">
            <span className="text-accent font-bold text-base">Clarity</span>
            <span className="text-text italic font-medium text-base">
              페르소나가 어디서 막혔는가
            </span>
            <span className="text-text font-semibold text-base">
              UX 개선
            </span>
          </div>

          {/* Row 3: Sentry */}
          <div className="grid grid-cols-[160px_1fr_1fr] gap-4 pb-4 border-b border-divider items-start">
            <span className="text-accent font-bold text-base">Sentry</span>
            <span className="text-text italic font-medium text-base">
              우리가 모르는 에러가 얼마나 있는가
            </span>
            <span className="text-text font-semibold text-base">
              버그 수정
            </span>
          </div>

          {/* Row 4: 이벤트 추적 */}
          <div className="grid grid-cols-[160px_1fr_1fr] gap-4 items-start">
            <span className="text-accent font-bold text-base">이벤트 추적</span>
            <span className="text-text italic font-medium text-base">
              PRD 가설이 통과했는가
            </span>
            <span className="text-text font-semibold text-base">
              PRD 갱신 또는 Pivot
            </span>
          </div>
        </div>

        {/* Aside — 높이 축소 (py-2 + leading-tight) */}
        <div className="mt-auto max-w-2xl border-l-4 border-accent bg-accent-soft px-4 py-2 rounded-r-xl">
          <p className="text-text-sub text-xs font-medium leading-tight">
            네 종류가 서로 다른 질문에 답한다. 한 데이터로 모든 결정을 내리지 않는다.
          </p>
        </div>
      </div>
    </>
  );
}
