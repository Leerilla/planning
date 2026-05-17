// Source: lectures/S4/lecture.md lines 345-355 (#### 자동 허용 도구 3-row)
// Type: example (도구 × 이유)

export default function S4TheoryC3AutoAllow() {
  const rows = [
    { tool: 'Read', reason: '파일 읽기. 영향 없음' },
    { tool: 'Grep, Glob', reason: '검색. 영향 없음' },
    { tool: 'Edit', reason: '단순 코드 수정. 빈도 높음' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          자동 허용 (auto_allow)
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        위험도 낮고 빈도 높은 도구
      </h2>

      <p className="text-base text-text-sub mb-6 max-w-3xl">
        매번 확인하면 작업자 부담만 커진다 — 자율에 맡긴다.
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
