// Source: lectures/S4/lecture.md lines 54-59 (#### CLAUDE.md 운영의 효과 2-row 표)
// Type: comparison (운영 방식 × 비용/효과)

export default function S4TheoryC1OpsEffect() {
  const rows = [
    {
      method: 'CLAUDE.md 없음',
      effect: '매 명령마다 컨텍스트 수동 입력. 토큰 누적',
      tone: 'bad',
    },
    {
      method: 'CLAUDE.md 있음',
      effect: '한 번 작성. 모든 명령이 그 위에서 작동',
      tone: 'good',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          CLAUDE.md 운영의 효과
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        한 번의 작성이 모든 명령의 컨텍스트가 된다
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        무상태성을 보완하는 가장 단순한 방법 — 자동 로드되는 헌법.
      </p>

      <div className="rounded border border-divider overflow-hidden max-w-4xl">
        <div className="grid grid-cols-[1fr_2fr] bg-bg-soft border-b border-divider">
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub">
            운영 방식
          </div>
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub border-l border-divider">
            비용 / 효과
          </div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_2fr] ${i < rows.length - 1 ? 'border-b border-divider' : ''}`}
          >
            <div className={`px-5 py-4 text-base font-bold ${r.tone === 'good' ? 'text-accent' : 'text-text-sub'}`}>
              {r.method}
            </div>
            <div className="px-5 py-4 text-base text-text border-l border-divider">
              {r.effect}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
