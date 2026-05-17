// Source: lectures/S9/lecture.md L1091-1101 (과제, assignment 3-row table + footer)
// Type: ActivitySlide

export default function S9ActivityAssignment() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            과제
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          과제 — 본 자료의 핵심 산출물
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          학습 마지막 단계 — 과제 완료가 학습 전체의 종착점
        </p>

        {/* Table */}
        <div className="grid gap-0 max-w-5xl border border-divider rounded-xl overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-[180px_1fr] gap-0">
            <div className="bg-bg-soft border-b-2 border-r border-divider px-5 py-3">
              <p className="text-sm font-bold text-text-muted uppercase tracking-wide">항목</p>
            </div>
            <div className="bg-bg-soft border-b-2 border-divider px-5 py-3">
              <p className="text-sm font-bold text-text-muted uppercase tracking-wide">내용</p>
            </div>
          </div>

          {/* Row 1: 목표 */}
          <div className="grid grid-cols-[180px_1fr] gap-0">
            <div className="border-b border-r border-divider px-5 py-4 flex items-center">
              <p className="text-text font-semibold">목표</p>
            </div>
            <div className="border-b border-divider px-5 py-4 flex items-center">
              <p className="text-text">살아있는 페르소나·갱신된 PRD·다음 사이클 결정 1개를 손에 쥐고 학습 종료</p>
            </div>
          </div>

          {/* Row 2: 마감 */}
          <div className="grid grid-cols-[180px_1fr] gap-0">
            <div className="border-b border-r border-divider px-5 py-4 flex items-center">
              <p className="text-text font-semibold">마감</p>
            </div>
            <div className="border-b border-divider px-5 py-4 flex items-center">
              <p className="text-text">학습 종료 시점 (본 단계가 마지막)</p>
            </div>
          </div>

          {/* Row 3: 핵심 산출물 */}
          <div className="grid grid-cols-[180px_1fr] gap-0">
            <div className="border-r border-divider px-5 py-4 flex items-start pt-4">
              <p className="text-text font-semibold">핵심 산출물</p>
            </div>
            <div className="px-5 py-4 flex items-start">
              <p className="text-text">발송 메모 / 분석 메모 / 종합 분석 메모 / 갱신된 docs/ / 다음 사이클 결정 메모 / 학습 회고 (6종)</p>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-5xl mt-5">
          <p className="text-base text-text leading-relaxed">
            본 자료는 본 학습의 마지막 단계. 과제 완료가 학습 전체의 종착점.
          </p>
        </div>
      </div>
    </>
  );
}
