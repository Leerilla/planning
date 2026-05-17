// Source: lectures/S9/lecture.md L164-172 (자동 매핑, concept 3-card)
// Type: ConceptSlide
// Pattern: Clarity 특징 3-card (강점 2 / 약점 1)
// Profile: hierarchical + comparison visual + balanced tone

export default function S9TheoryC2ClarityTrait() {
  return (
    <>
      <div className="flex flex-col h-full">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 2 · Clarity 특징
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          Clarity의 특징
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-8 max-w-4xl">
          Clarity(수동·행동 데이터)는 페르소나의 <span className="font-semibold">행동을 모은다</span>
        </p>

        {/* 3-card grid */}
        <div className="grid grid-cols-3 gap-4 max-w-6xl mt-auto">
          {/* Card 1: 강점 1 */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-5">
            <div className="text-accent font-bold text-xs uppercase tracking-widest mb-3">
              강점 1
            </div>
            <div className="text-base font-semibold text-text">
              폭이 넓고 편향 적음
            </div>
          </div>

          {/* Card 2: 강점 2 */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-5">
            <div className="text-accent font-bold text-xs uppercase tracking-widest mb-3">
              강점 2
            </div>
            <div className="text-base font-semibold text-text">
              세션 리플레이로 영상 재생
            </div>
          </div>

          {/* Card 3: 약점 */}
          <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-5 py-5">
            <div className="text-warning font-bold text-xs uppercase tracking-widest mb-3">
              약점
            </div>
            <div className="text-base font-semibold text-text">
              "왜 그렇게 행동했는지" 추측만 가능
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
