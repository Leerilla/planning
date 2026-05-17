// Source: lectures/S7/lecture.md lines 291-300 (표: 비교)
// Type: comparison (3-col grid, 시나리오 컬럼 accent)
// Profile: hierarchical / comparison / medium / balanced

export default function S7TheoryC3CodeVsScenario() {
  const rows = [
    { label: '시점', code: '코드 한 개 작성 직후', scenario: '전체 빌드 후' },
    { label: '단위', code: '한 화면 또는 한 함수', scenario: '사용자 시나리오 한 묶음' },
    { label: '잡아내는 문제', code: '화면별 PRD 일치', scenario: '화면 간 연결과 흐름' },
    { label: '본 학습 도구', code: 'prd-reviewer 자동 (PostToolUse)', scenario: 'scenario-verifier 명시 호출' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          검증 단위 비교
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        코드 단위 vs 시나리오 단위
      </h2>

      <p className="text-text-sub text-lg mb-6 max-w-4xl">
        자료 6의 검증 vs 본 단계의 검증
      </p>

      <div className="grid grid-cols-[140px_1fr_1fr] gap-0 max-w-6xl rounded-xl border border-divider overflow-hidden">
        {/* Header row */}
        <div className="bg-bg-soft px-5 py-3 border-b border-divider text-base font-semibold text-text-sub">
          비교
        </div>
        <div className="bg-bg-soft px-5 py-3 border-b border-divider border-l border-divider text-base font-semibold text-text-sub">
          코드 단위 (자료 6)
        </div>
        <div className="bg-accent-soft px-5 py-3 border-b border-divider border-l border-divider text-base font-bold text-accent">
          시나리오 단위 (본 단계)
        </div>

        {/* Data rows */}
        {rows.map((row, i) => (
          <>
            <div
              key={`label-${i}`}
              className={`px-5 py-3 text-base font-semibold text-text ${
                i < rows.length - 1 ? 'border-b border-divider' : ''
              }`}
            >
              {row.label}
            </div>
            <div
              key={`code-${i}`}
              className={`px-5 py-3 text-base text-text-sub border-l border-divider ${
                i < rows.length - 1 ? 'border-b border-divider' : ''
              }`}
            >
              {row.code}
            </div>
            <div
              key={`scenario-${i}`}
              className={`px-5 py-3 text-base text-text bg-accent-soft border-l border-divider ${
                i < rows.length - 1 ? 'border-b border-divider' : ''
              }`}
            >
              {row.scenario}
            </div>
          </>
        ))}
      </div>
    </>
  );
}
