// Source: lectures/S9/lecture.md L1000-1013 (#### 6-3 학습 전체 회고, example pre + D-054)
// Type: ExampleSlide

export default function S9ActivityStep6Retrospective() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 6-3 · 학습 회고
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          6-3. 학습 전체 회고
        </h2>

        {/* Subtitle with D-054 inline code */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          산출물: <code className="text-accent font-semibold">docs/learning-retrospective.md</code> — 5단계 사슬 약한 고리 / AI 도구 가치 / 다음 할 일
        </p>

        {/* Pre block - D-051 text-sm */}
        <pre className="bg-bg-soft border border-divider rounded-xl p-5 text-sm whitespace-pre-line max-w-5xl text-text-sub font-normal leading-relaxed">
{`질문 1: 5단계 사슬 중 가장 약했던 단계는?
       (문제·페르소나·가설·검증·정제 중)

질문 2: 사용한 AI 도구 중
       - 가장 가치 있었던 것:
       - 가장 어려웠던 것:

질문 3: 학습 종료 후 본인이 다음에 할 일 1개:`}
        </pre>

        {/* Footer */}
        <p className="mt-3 text-xs text-text-sub max-w-5xl">
          회고 3 질문 — 다음 사이클 강화 대상 도출
        </p>
      </div>
    </>
  );
}
