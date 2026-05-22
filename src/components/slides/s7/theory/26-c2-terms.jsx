// Source: lectures/S7/lecture.md lines 275-283
// Type: terms (5-row 2-col table)
// Pattern: header + 5 definition rows

export default function S7TheoryC2Terms() {
  const terms = [
    {
      term: 'Playwright',
      definition: '브라우저 자동화 도구. E2E 테스트의 표준',
    },
    {
      term: 'Playwright MCP',
      definition: 'Claude Code가 Playwright를 자연어로 조작',
    },
    {
      term: '자율 디버깅',
      definition: '에이전트가 분석·수정·재실행 반복',
    },
    {
      term: '자율 디버깅 3원칙',
      definition: '에러 그대로, 분석 먼저, 결과 검증',
    },
    {
      term: '무한 루프 정리',
      definition: '같은 자리 맴돌면 표로 정리해 작업자 판단',
    },
  ];

  return (
    <div className="flex h-full flex-col gap-8 bg-bg p-12">
      {/* Header marker */}
      <div className="flex items-center gap-4">
        <div className="h-[3px] w-10 rounded-full bg-accent" />
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">
          용어 해설
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-text">
        용어 해설
      </h1>

      {/* Terms table */}
      <div className="max-w-4xl overflow-hidden rounded-xl border border-divider">
        {/* Table header */}
        <div className="grid grid-cols-[160px_1fr] border-b border-divider bg-bg-soft">
          <div className="px-6 py-3 text-sm font-bold text-text">
            용어
          </div>
          <div className="px-6 py-3 text-sm font-bold text-text">
            정의
          </div>
        </div>

        {/* Table rows */}
        {terms.map((row, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[160px_1fr] border-b border-divider last:border-b-0"
          >
            <div className="px-6 py-4 text-sm font-medium text-text">
              {row.term}
            </div>
            <div className="px-6 py-4 text-sm text-text-sub leading-relaxed">
              {row.definition}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
