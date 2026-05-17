// Source: lectures/S7/lecture.md lines XXX-XXX (scenario-verifier 정의)
// Type: comparison (4-row × 3-col, scenario-verifier 컬럼 accent)
// D-053: scenario-verifier 정의 강조 (첫 등장)
// Profile: hierarchical / comparison / medium / balanced

export default function S7TheoryC3ScenarioVerifier() {
  const rows = [
    {
      item: '책임',
      prdReviewer: '코드 단위 검증',
      scenarioVerifier: '시나리오 단위 검증',
    },
    {
      item: '호출 시점',
      prdReviewer: '코드 수정 직후 (자동)',
      scenarioVerifier: '빌드 완료 후 (명시)',
    },
    {
      item: '입력',
      prdReviewer: '수정된 파일 1개',
      scenarioVerifier: '시나리오 1개 + 전체 코드베이스',
    },
    {
      item: '출력',
      prdReviewer: '일치/불일치/검토 외 3카테고리',
      scenarioVerifier: '시나리오 통과/막힘 지점/수정 제안',
    },
  ];

  return (
    <>
      {/* Header marker + label */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          scenario-verifier 정의
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        scenario-verifier sub-agent
      </h2>

      {/* Subtitle */}
      <p className="text-text-sub text-lg mb-3 max-w-4xl leading-relaxed">
        직전 자료(자동화 학습)의 prd-reviewer와 책임 분리된 새 sub-agent. Agent 설계 6원칙(단일 책임) 적용.
      </p>

      {/* Legend — 자료 6/7 명시 */}
      <p className="text-text-muted text-sm mb-6 max-w-4xl">
        자료 6 = 직전 학습(확장과 자동화) · 자료 7 = 본 학습(통합 디버깅과 E2E 테스트)
      </p>

      {/* Comparison table: 3-col */}
      <div className="grid grid-cols-[140px_1fr_1fr] gap-0 max-w-6xl rounded-xl border border-divider overflow-hidden">
        {/* Header row */}
        <div className="bg-bg-soft px-5 py-3 border-b-2 border-divider text-base font-semibold text-text-sub">
          항목
        </div>
        <div className="bg-bg-soft px-5 py-3 border-b-2 border-divider border-l border-divider text-base font-semibold text-text-sub">
          prd-reviewer (직전 학습)
        </div>
        <div className="bg-accent-soft px-5 py-3 border-b-2 border-divider border-l border-divider text-base font-bold text-accent">
          scenario-verifier (본 학습)
        </div>

        {/* Data rows */}
        {rows.map((row, i) => (
          <>
            <div
              key={`item-${i}`}
              className={`px-5 py-3 text-base font-semibold text-text ${
                i < rows.length - 1 ? 'border-b border-divider' : ''
              }`}
            >
              {row.item}
            </div>
            <div
              key={`prd-${i}`}
              className={`px-5 py-3 text-base text-text-sub border-l border-divider ${
                i < rows.length - 1 ? 'border-b border-divider' : ''
              }`}
            >
              {row.prdReviewer}
            </div>
            <div
              key={`scenario-${i}`}
              className={`px-5 py-3 text-base text-text bg-accent-soft border-l border-divider ${
                i < rows.length - 1 ? 'border-b border-divider' : ''
              }`}
            >
              {row.scenarioVerifier}
            </div>
          </>
        ))}
      </div>
    </>
  );
}
