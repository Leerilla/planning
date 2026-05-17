// Source: lectures/S8/captures/lecture.md (#### 5️⃣ 분석 도구 — Clarity의 핵심 비교)
// Type: comparison
// Pattern: 3-row 2-col comparison table
// D-050: lecture.md 원문 보존 (셋업 안 한 경우 vs Clarity 있는 경우)

export default function S8TheoryC5ClarityVs() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 5 · Clarity 핵심
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        Clarity의 핵심 비교
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-6 max-w-4xl">
        셋업 안 한 경우 vs Clarity 있는 경우
      </p>

      {/* Comparison Table */}
      <div className="w-full overflow-hidden rounded-xl border border-divider">
        {/* Header Row */}
        <div className="grid grid-cols-2 bg-bg-soft px-5 py-3 border-b-2 border-divider">
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide border-r border-divider">셋업 안 한 경우</div>
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">Clarity 있는 경우</div>
        </div>

        {/* Data Rows */}
        {[
          {
            without: '사용자가 "안 좋았어요"',
            with: '사용자가 어디서 막혔는지 정확한 화면 영상',
          },
          {
            without: '추측으로 수정',
            with: '데이터 기반 수정',
          },
          {
            without: '같은 문제 반복',
            with: '한 번 수정 후 효과 측정 가능',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-2 px-5 py-4 border-b border-divider last:border-b-0"
          >
            <div className="border-r border-divider">
              <span className="text-sm text-warning">{item.without}</span>
            </div>
            <div className="bg-accent-soft">
              <span className="text-sm font-semibold text-accent">{item.with}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
