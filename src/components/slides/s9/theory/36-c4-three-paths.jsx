// Source: lectures/S9/lecture.md L396-408 (#### 3 갈래 의사결정 + aside)
// Type: Concept (inline, comparison 3-card)
// Pattern: Header marker + title + subtitle + 3-card horizontal + aside
// Profile: hierarchical + comparison visual + balanced tone
// Note: 모든 카드 동등 강도 (Gate-2 결정 미해결 — 마지막 강조 X)

export default function S9TheoryC4ThreePaths() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 4 · 3 갈래 의사결정
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-2">
          3 갈래 의사결정
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-text-sub mb-8 max-w-4xl">
          다음 사이클 결정은 세 갈래 — 데이터 신호로 판단
        </p>

        {/* 3-card horizontal — 동등 강도, 동일 비율 (min-h로 카드 높이 일치) */}
        <div className="grid grid-cols-3 gap-4 max-w-6xl mb-8">
          {/* Card 1: Pivot */}
          <div className="border border-divider bg-bg-soft rounded-xl p-5 flex flex-col gap-3 min-h-[140px]">
            <div className="text-accent font-bold text-lg uppercase tracking-widest text-center">
              Pivot
            </div>
            <p className="text-base text-text leading-relaxed text-center">
              페르소나 또는 핵심 가설을 바꿈
            </p>
          </div>

          {/* Card 2: Persevere */}
          <div className="border border-divider bg-bg-soft rounded-xl p-5 flex flex-col gap-3 min-h-[140px]">
            <div className="text-accent font-bold text-lg uppercase tracking-widest text-center">
              Persevere
            </div>
            <p className="text-base text-text leading-relaxed text-center">
              PRD 일부만 갱신, 같은 방향 유지
            </p>
          </div>

          {/* Card 3: Kill */}
          <div className="border border-divider bg-bg-soft rounded-xl p-5 flex flex-col gap-3 min-h-[140px]">
            <div className="text-accent font-bold text-lg uppercase tracking-widest text-center">
              Kill
            </div>
            <p className="text-base text-text leading-relaxed text-center">
              본 시드 폐기, 다른 시드로 이동
            </p>
          </div>
        </div>

        {/* Aside — 높이 축소 (py-2 + leading-tight) */}
        <div className="mt-auto pt-10 max-w-3xl border-l-4 border-accent bg-accent-soft px-5 py-2 rounded-r-xl">
          <p className="text-text-sub text-sm font-medium leading-tight">
            린스타트업의 표준 용어이지만 본 학습의 데이터 위에서 본인 판단으로 적용한다.
          </p>
        </div>
      </div>
    </>
  );
}
