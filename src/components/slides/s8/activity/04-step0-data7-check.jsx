// Source: lectures/S8/captures/lecture.md L946-953 (#### 0-2. 자료 7 산출물 점검)
// Type: Comparison (4-row 3-col table)

export default function S8ActivityStep0Data7Check() {
  return (
    <div className="flex flex-col gap-8 h-full justify-center">
      {/* Header */}
      <div className="flex items-baseline gap-3">
        <span className="h-1 w-12 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          활동 0-2 · 자료 7 산출물
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-text">0-2. 자료 7 산출물 점검</h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub max-w-4xl leading-relaxed">
        본 학습 진입 전 자료 7 누적 자산 확인
      </p>

      {/* Table */}
      <div className="max-w-5xl overflow-hidden rounded-xl border border-divider">
        {/* Table header */}
        <div className="grid grid-cols-[60px_1fr_1fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
          <span className="text-sm font-bold text-text-muted uppercase tracking-wide">#</span>
          <span className="text-sm font-bold text-text-muted uppercase tracking-wide">산출물</span>
          <span className="text-sm font-bold text-text-muted uppercase tracking-wide">점검</span>
        </div>

        {/* Row 1: 화면 2개 동작 */}
        <div className="grid grid-cols-[60px_1fr_1fr] px-5 py-4 border-b border-divider">
          <span className="text-accent font-bold text-center">1</span>
          <span className="font-semibold text-text">화면 2개 동작</span>
          <span className="text-text-sub">카피 입력 + 카피 결과</span>
        </div>

        {/* Row 2: E2E 테스트 통과 */}
        <div className="grid grid-cols-[60px_1fr_1fr] px-5 py-4 border-b border-divider">
          <span className="text-accent font-bold text-center">2</span>
          <span className="font-semibold text-text">E2E 테스트 통과</span>
          <span className="text-text-sub">
            <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">e2e/</code> 폴더
          </span>
        </div>

        {/* Row 3: scenario-verifier */}
        <div className="grid grid-cols-[60px_1fr_1fr] px-5 py-4 border-b border-divider">
          <span className="text-accent font-bold text-center">3</span>
          <span className="font-semibold text-text">
            <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">scenario-verifier</code>
          </span>
          <span className="text-text-sub">
            <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">.claude/agents/</code> 폴더
          </span>
        </div>

        {/* Row 4: 시나리오 통과 보고 */}
        <div className="grid grid-cols-[60px_1fr_1fr] px-5 py-4">
          <span className="text-accent font-bold text-center">4</span>
          <span className="font-semibold text-text">시나리오 통과 보고</span>
          <span className="text-text-sub">작업자 본인 검증 완료</span>
        </div>
      </div>
    </div>
  );
}
