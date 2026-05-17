// Source: lectures/S9/lecture.md L979-998 (#### 6-2 작업자 본인 판단, example quote + pre + D-054)
// Type: ExampleSlide

export default function S9ActivityStep6OwnJudgment() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 6-2 · 본인 판단
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          6-2. 작업자 본인 판단
        </h2>

        {/* Subtitle with D-054 inline code */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          산출물: <code className="text-accent font-semibold">docs/next-cycle-decision.md</code> — 결정 + 데이터 근거 + 다음 단계 1주/1개월
        </p>

        {/* Quote box with citation */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-4 max-w-5xl mb-5">
          <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">
            이론 § 4 KeyMessage 4/4
          </p>
          <p className="text-lg font-semibold text-text leading-relaxed">
            AI 추천을 그대로 받아들이지 않는다. 자료 6의 검증 우선주의가 본 단계에도 적용된다.
          </p>
        </div>

        {/* Pre block - D-051 text-sm */}
        <pre className="bg-bg-soft border border-divider rounded-xl p-5 text-sm whitespace-pre-line max-w-4xl leading-relaxed">
{`[다음 사이클 결정]

- 결정: Pivot / Persevere / Kill
- 결정 근거 (데이터):
  1. {데이터 1}
  2. {데이터 2}
  3. {데이터 3}
- 다음 단계 (1주 안에 할 일 1개):
  {구체적 행동}
- 본 학습 후 1개월 안에 할 일:
  {다음 사이클 시작 시점}`}
        </pre>
      </div>
    </>
  );
}
