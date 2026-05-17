// Source: lectures/S9/lecture.md L151-162 (#### 응답의 특징)
// Type: example (2-col trait: 강점/약점 cards)

export default function S9TheoryC2ResponseTrait() {
  return (
    <>
      <div className="flex flex-col h-full">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 2 · 응답 데이터
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          응답의 특징
        </h2>

        {/* Subtitle */}
        <p className="text-lg font-semibold text-text mb-6 max-w-3xl">
          응답(능동 데이터)은 페르소나의 말을 모은다
        </p>

        {/* 2-col cards */}
        <div className="grid grid-cols-2 gap-4 max-w-6xl mt-6 mb-12">
          {/* Left: 강점 */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-5">
            <div className="text-accent font-bold text-xs uppercase tracking-widest mb-3">
              강점
            </div>
            <div className="text-base font-semibold text-text mb-4">
              깊이 있음
            </div>
            <div className="text-sm text-text-sub font-medium">
              (후속 질문 가능)
            </div>
          </div>

          {/* Right: 약점 */}
          <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-5 py-5">
            <div className="text-warning font-bold text-xs uppercase tracking-widest mb-3">
              약점
            </div>
            <div className="text-base font-semibold text-text mb-4">
              편향 큼
            </div>
            <div className="text-sm text-text-sub font-medium">
              (응답자는 가장 적극적인 사용자)
            </div>
          </div>
        </div>

        {/* Aside — 높이 축소 (py-2 + leading-tight) */}
        <div className="mt-auto max-w-2xl border-l-4 border-accent bg-accent-soft px-4 py-2 rounded-r-xl">
          <p className="text-text-sub text-xs font-medium leading-tight">
            응답을 시장 전체의 의견으로 받아들이면 안 된다. 깊은 한 사례로 본다.
          </p>
        </div>
      </div>
    </>
  );
}
