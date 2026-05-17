// Source: lectures/S4/lecture.md lines 196-202 (#### 흔히 놓치는 3가지 함정)
// Type: comparison (3-row 표)

export default function S4TheoryC2Pitfalls() {
  const rows = [
    { n: '1', pitfall: 'PRD를 통째로 복사', result: '매 명령마다 비효율 (자동 로드 비용)' },
    { n: '2', pitfall: '너무 짧게 작성', result: '빈 영역을 에이전트가 임의로 채움' },
    { n: '3', pitfall: '한 번 작성 후 갱신 안 함', result: '빌드 진행과 어긋남' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          흔히 놓치는 3가지 함정
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        CLAUDE.md 작성에서 자주 발생하는 실수
      </h2>

      <div className="rounded border border-line overflow-hidden max-w-5xl">
        <div className="grid grid-cols-[60px_2fr_2.4fr] bg-bg-soft border-b border-line">
          <div className="px-4 py-3 text-sm uppercase tracking-wider text-text-sub text-center">#</div>
          <div className="px-4 py-3 text-sm uppercase tracking-wider text-text-sub border-l border-line">함정</div>
          <div className="px-4 py-3 text-sm uppercase tracking-wider text-text-sub border-l border-line">결과</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[60px_2fr_2.4fr] ${i < rows.length - 1 ? 'border-b border-line' : ''}`}
          >
            <div className="px-4 py-4 text-2xl font-bold text-accent text-center">{r.n}</div>
            <div className="px-4 py-4 text-base text-text font-medium border-l border-line">{r.pitfall}</div>
            <div className="px-4 py-4 text-base text-text-sub border-l border-line">{r.result}</div>
          </div>
        ))}
      </div>
    </>
  );
}
