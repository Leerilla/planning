// Source: lectures/S4/lecture.md lines 337-343 (#### Permissions 3단계)
// Type: comparison (3-row)

export default function S4TheoryC3Permissions3() {
  const rows = [
    { level: '자동 허용', en: 'allow', meaning: '확인 없이 사용' },
    { level: '매번 확인', en: 'ask', meaning: '사용 전 확인' },
    { level: '절대 금지', en: 'deny', meaning: '권한 자체 차단' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          Permissions 3단계
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        도구별 자율 권한을 세 단계로 분배
      </h2>

      <div className="rounded border border-divider overflow-hidden max-w-5xl">
        <div className="grid grid-cols-[1.4fr_1.4fr_2fr] bg-bg-soft border-b border-divider">
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub">단계</div>
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub border-l border-divider">영문</div>
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub border-l border-divider">의미</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1.4fr_1.4fr_2fr] ${i < rows.length - 1 ? 'border-b border-divider' : ''}`}
          >
            <div className="px-5 py-4 text-base text-text font-bold">{r.level}</div>
            <div className="px-5 py-4 text-base text-text border-l border-divider">{r.en}</div>
            <div className="px-5 py-4 text-base text-text-sub border-l border-divider">{r.meaning}</div>
          </div>
        ))}
      </div>
    </>
  );
}
