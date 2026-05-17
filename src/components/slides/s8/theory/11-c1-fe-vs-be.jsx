// Source: lectures/S8/captures/lecture.md lines 114-121 (#### FE 직접 호출 vs BE 경유)
// Type: comparison
// D-050: lecture.md 원문 보존 (표 3-col 4-row)

export default function S8TheoryC1FeVsBe() {
  return (
    <div className="flex flex-col gap-8 h-full justify-center max-w-5xl">
      {/* Header marker + label */}
      <div className="flex items-baseline gap-3">
        <span className="h-1 w-12 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          이론 1 · 비교
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-text">FE 직접 호출 vs BE 경유</h2>

      {/* Comparison table (3-col 4-row) */}
      <div className="max-w-5xl overflow-hidden rounded-xl border border-divider">
        {/* Header row */}
        <div className="grid grid-cols-3 gap-0 bg-bg-soft border-b-2 border-divider">
          <div className="px-5 py-3 border-r border-divider">
            <p className="text-sm font-bold text-text-muted uppercase tracking-wide">
              비교
            </p>
          </div>
          <div className="px-5 py-3 border-r border-divider">
            <p className="text-sm font-bold text-text-muted uppercase tracking-wide">
              FE에서 LLM 직접 호출
            </p>
          </div>
          <div className="px-5 py-3">
            <p className="text-sm font-bold text-text-muted uppercase tracking-wide">
              BE 경유
            </p>
          </div>
        </div>

        {/* Row 1: API 키 노출 */}
        <div className="grid grid-cols-3 gap-0 border-b border-divider">
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <p className="text-sm font-semibold text-text">
              API 키 노출
            </p>
          </div>
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <p className="text-sm text-warning font-semibold">
              브라우저 코드에 노출
            </p>
          </div>
          <div className="px-5 py-4 bg-accent-soft">
            <p className="text-sm text-accent font-semibold">
              BE에만 보관
            </p>
          </div>
        </div>

        {/* Row 2: 봇 호출 위험 */}
        <div className="grid grid-cols-3 gap-0 border-b border-divider">
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <p className="text-sm font-semibold text-text">
              봇 호출 위험
            </p>
          </div>
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <p className="text-sm text-warning">
              매우 높음
            </p>
          </div>
          <div className="px-5 py-4 bg-accent-soft">
            <p className="text-sm text-accent font-semibold">
              차단 가능
            </p>
          </div>
        </div>

        {/* Row 3: rate limiting */}
        <div className="grid grid-cols-3 gap-0 border-b border-divider">
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <p className="text-sm font-semibold text-text">
              rate limiting
            </p>
          </div>
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <p className="text-sm text-text-sub">
              어려움
            </p>
          </div>
          <div className="px-5 py-4 bg-accent-soft">
            <p className="text-sm text-accent font-semibold">
              가능
            </p>
          </div>
        </div>

        {/* Row 4: 비용 통제 */}
        <div className="grid grid-cols-3 gap-0">
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <p className="text-sm font-semibold text-text">
              비용 통제
            </p>
          </div>
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <p className="text-sm text-warning">
              불가능
            </p>
          </div>
          <div className="px-5 py-4 bg-accent-soft">
            <p className="text-sm text-accent font-semibold">
              가능
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
