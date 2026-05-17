// Source: lectures/S4/lecture.md lines 186-194 (#### PRD vs CLAUDE.md 5-row 표)
// Type: comparison (5-row 비교)

export default function S4TheoryC2PrdVsClaude() {
  const rows = [
    { axis: '답하는 질문', prd: '무엇을', cmd: '어떻게' },
    { axis: '분량', prd: '수 페이지', cmd: '200줄 미만' },
    { axis: '갱신 주기', prd: '검증 사이클 단위', cmd: '빌드 진행 단위' },
    { axis: '자동 로드', prd: '안 됨', cmd: '매 세션 자동' },
    { axis: '의도', prd: '합의 문서', cmd: '작업 절차' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          PRD vs CLAUDE.md
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        다섯 축에서 두 문서는 다르다
      </h2>

      <div className="rounded border border-line overflow-hidden max-w-6xl">
        <div className="grid grid-cols-[1fr_1.6fr_1.6fr] bg-bg-soft border-b border-line">
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub">비교</div>
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub border-l border-line">PRD</div>
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-accent border-l border-line">CLAUDE.md</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_1.6fr_1.6fr] ${i < rows.length - 1 ? 'border-b border-line' : ''}`}
          >
            <div className="px-5 py-3.5 text-base font-semibold text-text">{r.axis}</div>
            <div className="px-5 py-3.5 text-base text-text-sub border-l border-line">{r.prd}</div>
            <div className="px-5 py-3.5 text-base text-text font-medium border-l border-line">{r.cmd}</div>
          </div>
        ))}
      </div>
    </>
  );
}
