// Source: lectures/S9/lecture.md L341-350 (#### 안티패턴 vs 30% 기준 적용, comparison 2-col anti/good)
// Type: ComparisonSlide
// Pattern: 안티패턴 vs 양호 2-col 카드
// Profile: hierarchical + comparison visual + balanced tone

export default function S9TheoryC3AntiVsRule() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 3 · 안티 vs 30% 기준
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          안티패턴 vs 30% 기준 적용
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-4xl">
          신호와 잡음 구분이 갱신 품질의 핵심
        </p>

        {/* 2-col cards */}
        <div className="grid grid-cols-2 gap-4 max-w-6xl">
          {/* Left: Anti-pattern */}
          <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-5 py-5">
            <div className="text-warning font-bold text-xs uppercase tracking-widest mb-3">
              안티패턴
            </div>
            <div className="text-base text-text mb-3">
              "1명 응답에서 나온 의견을 페르소나에 추가"
            </div>
            <div className="text-sm text-text-sub italic">
              → 잡음을 신호로 착각
            </div>
          </div>

          {/* Right: Good - 30% rule */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-5">
            <div className="text-accent font-bold text-xs uppercase tracking-widest mb-3">
              양호 — 30% 기준
            </div>
            <div className="text-base text-text mb-3">
              "Clarity 30%+ 또는 응답 다수에서 같은 패턴이 보일 때만 페르소나에 반영"
            </div>
            <div className="text-sm text-text-sub italic">
              → 30% 기준의 일관 적용
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
