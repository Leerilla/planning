// Source: lectures/S4/lecture.md lines 380-386 (#### Permissions와 OODA의 연결)
// Type: comparison (3-row)

export default function S4TheoryC3OodaPermissions() {
  const rows = [
    { perm: 'auto_allow', ooda: 'Decide → 바로 Act', intervention: '없음' },
    { perm: 'ask_before', ooda: 'Decide → 확인 → Act', intervention: '매번' },
    { perm: 'deny', ooda: 'Decide → 차단', intervention: '시스템 차원' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          Permissions와 OODA의 연결
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        Decide → Act 사이가 작업자 개입 지점
      </h2>

      <div className="rounded border border-line overflow-hidden max-w-6xl">
        <div className="grid grid-cols-[1.2fr_2fr_1.4fr] bg-bg-soft border-b border-line">
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub">Permissions</div>
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub border-l border-line">OODA 흐름</div>
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub border-l border-line">작업자 개입</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1.2fr_2fr_1.4fr] ${i < rows.length - 1 ? 'border-b border-line' : ''}`}
          >
            <div className="px-5 py-4 text-base text-text font-bold">{r.perm}</div>
            <div className="px-5 py-4 text-base text-text border-l border-line">{r.ooda}</div>
            <div className="px-5 py-4 text-base text-text-sub border-l border-line">{r.intervention}</div>
          </div>
        ))}
      </div>
    </>
  );
}
