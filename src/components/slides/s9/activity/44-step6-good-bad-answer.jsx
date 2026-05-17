// Source: lectures/S9/lecture.md L1015-1021 (#### 6-3 좋은 답 vs 나쁜 답, comparison 3-col × 3-row table)
// Type: ComparisonSlide

export default function S9ActivityStep6GoodBadAnswer() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 6-3 · 좋은 답 vs 나쁜 답
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          6-3. 좋은 답 vs 나쁜 답
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          회고의 핵심 — 구체성 (숫자·기간·도구명)
        </p>

        {/* Table */}
        <div className="grid gap-0 max-w-6xl border border-divider rounded-xl overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-[1fr_1.2fr_1.2fr] gap-0">
            <div className="bg-bg-soft border-b-2 border-r border-divider px-5 py-3">
              <p className="text-sm font-bold text-text-muted uppercase tracking-wide">질문</p>
            </div>
            <div className="bg-bg-soft border-b-2 border-r border-divider px-5 py-3">
              <p className="text-sm font-bold text-accent uppercase tracking-wide">좋은 답 (구체적)</p>
            </div>
            <div className="bg-bg-soft border-b-2 border-divider px-5 py-3">
              <p className="text-sm font-bold text-warning uppercase tracking-wide">나쁜 답 (모호)</p>
            </div>
          </div>

          {/* Row 1: 약한 단계 */}
          <div className="grid grid-cols-[1fr_1.2fr_1.2fr] gap-0">
            <div className="border-b border-r border-divider px-5 py-4 flex items-center">
              <p className="text-text font-semibold">약한 단계</p>
            </div>
            <div className="border-b border-r border-divider px-5 py-4 flex items-center">
              <p className="text-text bg-accent-soft px-2 py-1 rounded">검증 단계. 응답률이 낮아 데이터 부족</p>
            </div>
            <div className="border-b border-divider px-5 py-4 flex items-center">
              <p className="text-text-sub italic bg-warning-soft px-2 py-1 rounded">어려웠다</p>
            </div>
          </div>

          {/* Row 2: 가치 있던 도구 */}
          <div className="grid grid-cols-[1fr_1.2fr_1.2fr] gap-0">
            <div className="border-b border-r border-divider px-5 py-4 flex items-center">
              <p className="text-text font-semibold">가치 있던 도구</p>
            </div>
            <div className="border-b border-r border-divider px-5 py-4 flex items-center">
              <p className="text-text bg-accent-soft px-2 py-1 rounded">NotebookLM 인용 검증</p>
            </div>
            <div className="border-b border-divider px-5 py-4 flex items-center">
              <p className="text-text-sub italic bg-warning-soft px-2 py-1 rounded">다 좋았다</p>
            </div>
          </div>

          {/* Row 3: 다음 할 일 */}
          <div className="grid grid-cols-[1fr_1.2fr_1.2fr] gap-0">
            <div className="border-r border-divider px-5 py-4 flex items-center">
              <p className="text-text font-semibold">다음 할 일</p>
            </div>
            <div className="border-r border-divider px-5 py-4 flex items-center">
              <p className="text-text bg-accent-soft px-2 py-1 rounded">1주 안에 인터뷰 3명 추가 신청</p>
            </div>
            <div className="px-5 py-4 flex items-center">
              <p className="text-text-sub italic bg-warning-soft px-2 py-1 rounded">본인 빌드 계속</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
