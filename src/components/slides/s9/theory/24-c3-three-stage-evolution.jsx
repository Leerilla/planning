// Source: lectures/S9/lecture.md L255-263 (자동 매핑, comparison 3-col × 3-row table)
// Type: ComparisonSlide

export default function S9TheoryC3ThreeStageEvolution() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 3 · 3단계 진화
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          페르소나 3단계 진화
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-4xl">
          자료 1에서 도입한 3단계의 마지막 단계가 본 단계에서 시작된다.
        </p>

        {/* Table */}
        <div className="max-w-5xl overflow-hidden rounded-2xl border border-divider">
          {/* Table header */}
          <div className="grid grid-cols-[260px_220px_1fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
            <span className="text-sm font-bold text-text-muted uppercase tracking-wide">단계</span>
            <span className="text-sm font-bold text-text-muted uppercase tracking-wide">어디서 만들어졌나</span>
            <span className="text-sm font-bold text-text-muted uppercase tracking-wide">입력 데이터</span>
          </div>

          {/* Row 1: 가설 페르소나 */}
          <div className="grid grid-cols-[260px_220px_1fr] px-5 py-4 border-b border-divider">
            <span className="font-semibold text-text">1. 가설 페르소나</span>
            <span className="text-text-sub">자료 1</span>
            <span className="text-text-sub">직관 + 1차 리서치</span>
          </div>

          {/* Row 2: 검증된 페르소나 */}
          <div className="grid grid-cols-[260px_220px_1fr] px-5 py-4 border-b border-divider">
            <span className="font-semibold text-text">2. 검증된 페르소나</span>
            <span className="text-text-sub">자료 2-3</span>
            <span className="text-text-sub">인터뷰 + NotebookLM</span>
          </div>

          {/* Row 3: 살아있는 페르소나 (highlighted) */}
          <div className="grid grid-cols-[260px_220px_1fr] px-5 py-4 bg-accent-soft">
            <span className="font-bold text-accent">3. 살아있는 페르소나</span>
            <span className="font-semibold text-accent">본 단계</span>
            <span className="font-semibold text-text">실제 사용 + 재피드백</span>
          </div>
        </div>

        {/* Aside note */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-2xl px-6 py-3 max-w-4xl mt-4">
          <p className="text-sm text-text-sub leading-relaxed">
            본 학습 9세션 누적의 가시화 — S1 가설 → S2-3 검증 → S9 살아있는.
          </p>
        </div>
      </div>
    </>
  );
}
