// Source: lectures/S4/lecture.md lines 388-394 (#### 책임 분배의 의미 3-row)
// Type: comparison

export default function S4TheoryC3Responsibility() {
  const rows = [
    { stage: 'auto_allow', resp: '에이전트', meaning: '자율에 맡김' },
    { stage: 'ask_before', resp: '함께', meaning: '작업자 + 에이전트 결정' },
    { stage: 'deny', resp: '작업자도 안 함', meaning: '시스템 차단' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          책임 분배의 의미
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        Permissions = 책임 분배의 명시화
      </h2>

      <div className="rounded border border-line overflow-hidden max-w-5xl">
        <div className="grid grid-cols-[1.2fr_1.4fr_2fr] bg-bg-soft border-b border-line">
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub">단계</div>
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub border-l border-line">책임</div>
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub border-l border-line">의미</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1.2fr_1.4fr_2fr] ${i < rows.length - 1 ? 'border-b border-line' : ''}`}
          >
            <div className="px-5 py-4 text-base text-text font-bold">{r.stage}</div>
            <div className="px-5 py-4 text-base text-text border-l border-line">{r.resp}</div>
            <div className="px-5 py-4 text-base text-text-sub border-l border-line">{r.meaning}</div>
          </div>
        ))}
      </div>
    </>
  );
}
