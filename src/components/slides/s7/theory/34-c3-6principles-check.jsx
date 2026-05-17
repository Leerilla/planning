// Source: lectures/S7/lecture.md lines XXX-XXX (Agent 설계 6원칙)
// Type: comparison (6-row × 2-col)
// Profile: hierarchical / comparison / medium / balanced

export default function S7TheoryC36PrinciplesCheck() {
  const rows = [
    {
      principle: '1. 단일 책임',
      application: '"시나리오 단위 PRD 검증" 한 줄',
    },
    {
      principle: '2. 최소 권한',
      application: 'Read, Grep, Glob만 (Write 없음)',
    },
    {
      principle: '3. 결정적 출력',
      application: '통과/막힘/제안 3단 고정',
    },
    {
      principle: '4. 책임 분리',
      application: '"수정 권한 없음" 명시',
    },
    {
      principle: '5. 호출 시점',
      application: '"빌드 완료 후 호출"',
    },
    {
      principle: '6. 입출력 계약',
      application: '시나리오 입력 → 3단 출력',
    },
  ];

  return (
    <>
      {/* Header marker + label */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          6원칙 점검
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        Agent 설계 6원칙 적용
      </h2>

      {/* Comparison table: 2-col */}
      <div className="grid grid-cols-[160px_1fr] gap-0 max-w-4xl rounded-md border border-divider overflow-hidden">
        {/* Header row */}
        <div className="bg-bg-soft px-5 py-3 border-b border-divider text-base font-semibold text-text-sub">
          원칙
        </div>
        <div className="bg-bg-soft px-5 py-3 border-b border-divider border-l border-divider text-base font-semibold text-text-sub">
          적용 위치
        </div>

        {/* Data rows */}
        {rows.map((row, i) => (
          <>
            <div
              key={`principle-${i}`}
              className={`px-5 py-3 text-base font-semibold text-text ${
                i < rows.length - 1 ? 'border-b border-divider' : ''
              }`}
            >
              {row.principle}
            </div>
            <div
              key={`application-${i}`}
              className={`px-5 py-3 text-base text-text-sub border-l border-divider ${
                i < rows.length - 1 ? 'border-b border-divider' : ''
              }`}
            >
              {row.application}
            </div>
          </>
        ))}
      </div>
    </>
  );
}
