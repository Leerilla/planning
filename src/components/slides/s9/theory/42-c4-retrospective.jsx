// Source: lectures/S9/lecture.md L478-496 (#### 학습 회고 3개 질문)
// Type: Process (3-step vertical with emphasis on Q3)
// Pattern: Header marker + title + subtitle + 3-step vertical + aside
// Profile: hierarchical + diagram visual + balanced tone

export default function S9TheoryC4Retrospective() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 4 · 학습 회고
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-2">
          학습 회고 3개 질문
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-text-sub mb-6 max-w-4xl">
          본 단계 마지막 30분은 학습 전체의 회고
        </p>

        {/* 3-step vertical */}
        <div className="flex flex-col gap-4 max-w-5xl">
          {/* Step 1 */}
          <div className="border-l-4 border-divider bg-bg-soft rounded-xl px-6 py-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-bg text-text flex items-center justify-center font-bold text-sm flex-shrink-0 border border-divider">
                1
              </div>
              <div className="flex-1">
                <p className="text-base font-semibold text-text">
                  Q1: 5단계 사슬 중 가장 약했던 단계는?
                </p>
                <p className="text-sm text-text-sub mt-1 leading-relaxed">
                  다음 사이클의 강화 대상
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border-l-4 border-divider bg-bg-soft rounded-xl px-6 py-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-bg text-text flex items-center justify-center font-bold text-sm flex-shrink-0 border border-divider">
                2
              </div>
              <div className="flex-1">
                <p className="text-base font-semibold text-text">
                  Q2: AI 도구 중 가장 가치 있었던 것과 가장 어려웠던 것은?
                </p>
                <p className="text-sm text-text-sub mt-1 leading-relaxed">
                  본인 사이클의 도구 선택 기준
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 — emphasized with accent */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-xl px-6 py-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold text-sm flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <p className="text-base font-semibold text-accent">
                  Q3: 학습 종료 후 본인이 다음에 할 일은?
                </p>
                <p className="text-sm text-text-sub mt-1 leading-relaxed">
                  학습의 진짜 종착점
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Aside */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-xl px-6 py-3 max-w-5xl">
          <p className="text-sm text-text-sub leading-relaxed">
            질문 3의 답이 학습 종착점이다. 결정 없이 끝나면 학습이 종료된 것이 아니다.
          </p>
        </div>
      </div>
    </>
  );
}
