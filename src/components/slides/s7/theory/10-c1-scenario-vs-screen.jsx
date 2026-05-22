// Source: lectures/S7/lecture.md lines 93-118 (#### 시나리오 통과 vs 화면 떰 + 안티패턴)
// Type: comparison / key-message (통합 2장을 1장으로 압축)
// D-050: lecture.md 원문 보존 + 안티패턴 좌우 대비

export default function S7TheoryC1ScenarioVsScreen() {
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Header marker + title */}
      <div className="flex items-center gap-2">
        <div className="w-1 h-6 bg-accent rounded-full" />
        <h2 className="text-lg font-bold text-text">
          시나리오 통과 vs 화면 떰
        </h2>
      </div>

      {/* Quote / Question block */}
      <div className="bg-bg-soft rounded-xl p-5 border-l-4 border-divider">
        <p className="italic text-text-sub text-sm leading-relaxed">
          "화면이 떴으면 동작하는 것 아닌가?"
        </p>
      </div>

      {/* Answer */}
      <p className="text-text font-semibold text-base leading-relaxed">
        화면이 떠도 시나리오 통과는 별개.
      </p>

      {/* Comparison table */}
      <div className="flex-1 flex flex-col gap-3 overflow-y-auto">
        <div className="grid grid-cols-2 gap-3">
          {/* Header */}
          <div className="bg-bg-soft rounded-xl p-3 border border-divider text-xs font-semibold uppercase tracking-wider text-text-sub">
            화면 떰
          </div>
          <div className="bg-bg-soft rounded-xl p-3 border border-divider text-xs font-semibold uppercase tracking-wider text-text-sub">
            시나리오 통과
          </div>

          {/* Row 1 */}
          <div className="bg-bg rounded-xl p-3 border border-divider text-sm text-text-sub leading-relaxed">
            카피 입력 화면 렌더링 OK
          </div>
          <div className="bg-bg rounded-xl p-3 border border-divider text-sm text-accent font-semibold leading-relaxed">
            입력 → 결과 화면 라우팅 OK
          </div>

          {/* Row 2 */}
          <div className="bg-bg rounded-xl p-3 border border-divider text-sm text-text-sub leading-relaxed">
            결과 화면 렌더링 OK
          </div>
          <div className="bg-bg rounded-xl p-3 border border-divider text-sm text-accent font-semibold leading-relaxed">
            데이터가 화면 간 정상 전달
          </div>

          {/* Row 3 */}
          <div className="bg-bg rounded-xl p-3 border border-divider text-sm text-text-sub leading-relaxed">
            각 화면 단독 동작
          </div>
          <div className="bg-bg rounded-xl p-3 border border-divider text-sm text-accent font-semibold leading-relaxed">
            전체 흐름 한 번에 통과
          </div>
        </div>
      </div>

      {/* Anti-pattern vs Verification */}
      <div className="grid grid-cols-2 gap-4 mt-2">
        {/* Anti-pattern (left) */}
        <div className="rounded-r-md border-l-4 border-danger bg-danger-soft px-4 py-3">
          <p className="text-danger font-bold text-xs uppercase tracking-widest mb-1">
            안티패턴
          </p>
          <p className="text-text text-sm leading-relaxed">
            각 화면이 따로따로 동작하니까 전체도 동작할 거야<br />
            → 통합 검증 누락
          </p>
        </div>

        {/* Integration Verification (right) */}
        <div className="rounded-r-md border-l-4 border-success bg-success-soft px-4 py-3">
          <p className="text-success font-bold text-xs uppercase tracking-widest mb-1">
            통합 검증
          </p>
          <p className="text-text text-sm leading-relaxed">
            입력 화면에서 결과 화면이 한 흐름으로<br />
            통과하는지 E2E 테스트로 증명한다
          </p>
        </div>
      </div>
    </div>
  );
}
