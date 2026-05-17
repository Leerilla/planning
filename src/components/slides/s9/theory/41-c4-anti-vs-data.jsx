// Source: lectures/S9/lecture.md L467-476 (#### 안티패턴 vs 데이터 기반 결정)
// Type: Comparison (2-column anti vs good boxes)
// Pattern: Header marker + title + subtitle + 2-col cards
// Profile: hierarchical + comparison visual + balanced tone

export default function S9TheoryC4AntiVsData() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 4 · 안티 vs 데이터 기반
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-2">
          안티패턴 vs 데이터 기반 의사결정
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-text-sub mb-6 max-w-4xl">
          의사결정의 기준 — 매몰비용 vs 데이터 신호
        </p>

        {/* 2-column grid */}
        <div className="grid grid-cols-2 gap-6 max-w-6xl">
          {/* Left: Anti-pattern (warning) */}
          <div className="border-l-4 border-warning bg-warning-soft rounded-xl px-6 py-5">
            <div className="text-warning font-bold text-xs uppercase tracking-widest mb-3">
              안티패턴
            </div>
            <p className="text-base text-text font-semibold mb-3">
              "21시간 들였으니 Persevere"
            </p>
            <p className="text-sm text-text-sub italic leading-relaxed">
              → 매몰비용에 의한 결정
            </p>
          </div>

          {/* Right: Good — Data-driven (accent) */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-xl px-6 py-5">
            <div className="text-accent font-bold text-xs uppercase tracking-widest mb-3">
              양호 — 데이터 기반
            </div>
            <p className="text-base text-text font-semibold mb-3">
              "데이터 신호로 Pivot이 맞으면 Pivot, Kill이 맞으면 Kill"
            </p>
            <p className="text-sm text-text-sub italic leading-relaxed">
              → 데이터 기반 의사결정
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
