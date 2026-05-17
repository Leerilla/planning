// Source: lectures/S4/lecture.md lines 369-378 (#### 절대 금지 도구 2-row)
// Type: example

export default function S4TheoryC3Deny() {
  const rows = [
    { tool: 'BashWithSudo', reason: '시스템 명령. 회복 불가' },
    { tool: '환경 변수 노출', reason: '보안 위험' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          절대 금지 (deny)
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        잘못 사용되면 회복 어려운 결과
      </h2>

      <p className="text-base text-text-sub mb-6 max-w-3xl">
        권한 자체를 차단 — 작업자도 안 한다는 시스템 차원의 결정.
      </p>

      <div className="rounded border border-line overflow-hidden max-w-4xl">
        <div className="grid grid-cols-[1fr_2fr] bg-bg-soft border-b border-line">
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub">도구</div>
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub border-l border-line">이유</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_2fr] ${i < rows.length - 1 ? 'border-b border-line' : ''}`}
          >
            <div className="px-5 py-4 text-base text-text font-bold">{r.tool}</div>
            <div className="px-5 py-4 text-base text-text-sub border-l border-line">{r.reason}</div>
          </div>
        ))}
      </div>
    </>
  );
}
