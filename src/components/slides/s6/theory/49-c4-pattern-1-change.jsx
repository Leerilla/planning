// Source: lectures/S6/lecture.md lines 519-525
// Type: comparison (2-row: 자동화 없음 vs 자동화 있음)
// D-041: No special characters in text (natural language only)

export default function S6TheoryC4Pattern1Change() {
  const rows = [
    {
      aspect: '작업자 역할',
      without: '작업자가 매번 손으로 "PRD에 맞나?" 묻기',
      with: '보고서 자동 출력. 작업자는 필요한 부분만 수정',
    },
    {
      aspect: '휴먼 에러',
      without: '잊어버림 발생',
      with: '잊어버림 방지',
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          자동화 효과 비교
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-8">
        핵심 패턴 1의 변화
      </h2>

      {/* Comparison table: 2-column, 2-row */}
      <div className="rounded-2xl border border-divider overflow-hidden max-w-4xl">
        {/* Header row */}
        <div className="grid grid-cols-[1fr_1.5fr_1.5fr] bg-bg-soft border-b border-divider">
          <div className="px-6 py-4 text-base font-semibold text-text-sub">
            항목
          </div>
          <div className="px-6 py-4 text-base font-semibold text-text-sub border-l border-divider">
            자동화 없음
          </div>
          <div className="px-6 py-4 text-base font-semibold text-accent border-l border-divider">
            자동화 있음
          </div>
        </div>

        {/* Data rows */}
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_1.5fr_1.5fr] ${
              i < rows.length - 1 ? 'border-b border-divider' : ''
            }`}
          >
            <div className="px-6 py-4 text-base font-semibold text-text bg-bg-soft">
              {row.aspect}
            </div>
            <div className="px-6 py-4 text-base text-text-sub border-l border-divider leading-snug">
              {row.without}
            </div>
            <div className="px-6 py-4 text-base text-text font-medium border-l border-divider leading-snug">
              {row.with}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
