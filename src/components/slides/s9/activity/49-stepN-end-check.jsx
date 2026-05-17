// Source: lectures/S9/lecture.md L1059-1072 (#### N-2 학습 종착점 확인, example 5-item checklist D-035 emoji→숫자)
// Type: ExampleSlide

export default function S9ActivityStepNEndCheck() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 N-2 · 학습 종착점
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          N-2. 학습 종착점 확인
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          다음을 손에 쥐고 있는가 — 5가지 확인
        </p>

        {/* Blockquote */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-4 max-w-5xl mb-6">
          <p className="text-lg font-semibold text-text leading-relaxed">
            결정 없이 끝나면 학습이 종료된 것이 아니다.
          </p>
        </div>

        {/* 5-item checklist */}
        <div className="flex flex-col gap-3 max-w-5xl">
          {/* Item 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold text-sm shrink-0 mt-0">
              1
            </div>
            <p className="text-base text-text leading-relaxed pt-0.5">
              살아있는 페르소나 (<code className="text-accent font-semibold">docs/persona.md</code>)
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold text-sm shrink-0 mt-0">
              2
            </div>
            <p className="text-base text-text leading-relaxed pt-0.5">
              갱신된 PRD (<code className="text-accent font-semibold">docs/prd.md</code>)
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold text-sm shrink-0 mt-0">
              3
            </div>
            <p className="text-base text-text leading-relaxed pt-0.5">
              다음 사이클 결정 1개 (Pivot/Persevere/Kill)
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold text-sm shrink-0 mt-0">
              4
            </div>
            <p className="text-base text-text leading-relaxed pt-0.5">
              1주 안 행동 1개
            </p>
          </div>

          {/* Item 5 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold text-sm shrink-0 mt-0">
              5
            </div>
            <p className="text-base text-text leading-relaxed pt-0.5">
              5단계 사슬 약한 고리 인식
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
