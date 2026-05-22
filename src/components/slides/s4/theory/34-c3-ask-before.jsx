// Source: lectures/S4/lecture.md lines 357-367 (#### 매번 확인 도구 3-row)
// Type: example

export default function S4TheoryC3AskBefore() {
  const rows = [
    { tool: 'Bash', reason: '셸 명령. 영향 범위 큼' },
    { tool: 'Write', reason: '새 파일 작성. 신중 필요' },
    { tool: 'WebFetch', reason: '외부 API. 비용 발생' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          매번 확인 (ask)
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        영향 범위가 크거나 외부 비용이 발생하는 도구
      </h2>

      <p className="text-base text-text-sub mb-6 max-w-3xl">
        매번 확인이 안전 — 작업자와 에이전트가 함께 결정.
      </p>

      <div className="rounded border border-divider overflow-hidden max-w-4xl">
        <div className="grid grid-cols-[1fr_2fr] bg-bg-soft border-b border-divider">
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub">도구</div>
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub border-l border-divider">이유</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_2fr] ${i < rows.length - 1 ? 'border-b border-divider' : ''}`}
          >
            <div className="px-5 py-4 text-base text-text font-bold">{r.tool}</div>
            <div className="px-5 py-4 text-base text-text-sub border-l border-divider">{r.reason}</div>
          </div>
        ))}
      </div>
    </>
  );
}
