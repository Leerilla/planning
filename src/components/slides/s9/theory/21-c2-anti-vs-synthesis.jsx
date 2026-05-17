// Source: lectures/S9/lecture.md L227-236 (자동 매핑, example 2-col anti/good)
// Type: ExampleSlide
// Pattern: 안티패턴 vs 종합 해석 2-col cards
// Profile: hierarchical + comparison visual + balanced tone

export default function S9TheoryC2AntiVsSynthesis() {
  return (
    <>
      <div className="flex flex-col h-full">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 2 · 안티 vs 종합 해석
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          안티패턴 vs 종합 해석
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-8 max-w-5xl">
          한 데이터로 결정 X — <span className="font-semibold">4종 데이터의 종합 패턴</span>
        </p>

        {/* 2-col cards */}
        <div className="grid grid-cols-2 gap-4 max-w-6xl mt-auto">
          {/* Left: Anti-pattern */}
          <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-5 py-5">
            <div className="text-warning font-bold text-xs uppercase tracking-widest mb-3">
              안티패턴
            </div>
            <div className="text-base font-semibold text-text mb-3">
              "응답 1명이 좋다고 했으니 PRD 통과"
            </div>
            <div className="text-sm text-text-sub font-medium italic">
              → 1명을 시장으로 착각
            </div>
          </div>

          {/* Right: Good pattern */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-5">
            <div className="text-accent font-bold text-xs uppercase tracking-widest mb-3">
              양호 — 종합 해석
            </div>
            <div className="text-base font-semibold text-text mb-3">
              "응답 1명 + Clarity 5건 + 완료율 60%를 NotebookLM에서 함께 본 뒤 패턴 추출"
            </div>
            <div className="text-sm text-text-sub font-medium italic">
              → 4종 데이터의 종합 해석
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
