// Source: lectures/S8/captures/lecture.md (#### 안티패턴 vs 올바른 순서)
// Type: example
// Pattern: 2-block pre (anti vs correct)
// D-050: lecture.md 원문 보존 (안티패턴 vs 올바른 순서)

export default function S8TheoryC5AntiVsCorrect() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 5 · 안티패턴
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        안티패턴 vs 올바른 순서
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-6 max-w-4xl">
        분석 도구 셋업의 올바른 시점
      </p>

      {/* Comparison Blocks */}
      <div className="flex flex-col gap-3 max-w-4xl">
        {/* Anti Pattern */}
        <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-5 py-4">
          <div className="text-warning font-bold text-sm uppercase tracking-widest mb-2">
            안티패턴
          </div>
          <pre className="bg-bg border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text font-normal">
            {`"다음 단계 발송 후에 Clarity를 깐다"
"먼저 노출하고 반응 보면서 도구 추가"
→ 첫 사용자들 데이터 영원히 손실`}
          </pre>
        </div>

        {/* Correct Way */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-sm uppercase tracking-widest mb-2">
            올바른 순서
          </div>
          <pre className="bg-bg border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text font-normal">
            {`"본 단계에서 Clarity, Sentry, 이벤트 추적
 모두 셋업 → 다음 단계에서 발송"
→ 첫 사용자부터 모든 데이터 확보`}
          </pre>
        </div>
      </div>
    </>
  );
}
