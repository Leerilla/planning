// Source: lectures/S8/captures/lecture.md Step N-2 /cost 비교 (L1594-1599)
// Type: Example (pre block + aside)
// D-054: /cost inline code + accent
// D-046 FIX: removed (use <pre> default)

export default function S8ActivityStepNCost() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 N-2 · 비용 비교
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          N-2. /cost 비교
        </h1>
        <p className="text-base text-text-sub mb-6">
          본 sprint 종료 시 토큰 사용량 비교
        </p>

        {/* Pre block */}
        <pre className="bg-bg-soft border border-divider rounded-xl p-3 text-sm whitespace-pre-line max-w-3xl text-text">
          <code className="text-accent font-semibold">/cost</code>
        </pre>

        {/* Aside note */}
        <aside className="mt-4 border-l-4 border-divider bg-bg-soft rounded-r-xl px-6 py-3 max-w-3xl">
          <p className="text-sm text-text leading-relaxed">
            Step 0 베이스라인과 비교 — 본 단계 누적 토큰 사용량 메모. 본 학습 후 본격 운영 시 비용 통제 결정 근거.
          </p>
        </aside>
    </>
  );
}
