// Source: lectures/S9/lecture.md L1023-1033 (#### 6-4 /cost 최종 비교, example pre + aside)
// Type: ExampleSlide

export default function S9ActivityStep6CostFinal() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 6-4 · /cost 최종
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          6-4. /cost 최종 비교
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-3xl">
          자료 1부터 본 단계까지 누적 토큰 메모 — 21시간 학습 비용
        </p>

        {/* Pre block - D-051 text-sm */}
        <pre className="bg-bg-soft border border-divider rounded-xl p-5 text-sm whitespace-pre-line max-w-3xl text-text-sub font-normal leading-relaxed">
{`/cost`}
        </pre>

        {/* Footer */}
        <p className="mt-3 text-xs text-text-sub max-w-3xl">
          Step 0 a6 베이스라인과 비교 — 21시간 누적 토큰 사용량
        </p>

        {/* Aside */}
        <div className="mt-5 border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-5xl">
          <p className="text-sm text-text leading-relaxed">
            21시간 학습의 비용 데이터가 다음 사이클 비용 추정의 기준이 된다.
          </p>
        </div>
      </div>
    </>
  );
}
