// Source: lectures/S6/lecture.md lines 1130-1139 (#### 5-5. 자동화 효과 측정)
// Type: comparison (4-row table, Issue #1 수동 vs Issue #5 자동화)
// Profile: hierarchical / comparison / medium-high / balanced
// Emphasis: key-message (본 sprint 자동화 효과 측정 핵심)

export default function S6ActivityStep5AutomationEffect() {
  const rows = [
    {
      item: '빌드 명령 입력',
      manual: '새로 작성',
      auto: '메모 복사',
    },
    {
      item: 'PRD 확인',
      manual: '손으로',
      auto: 'hook이 자동',
    },
    {
      item: '커밋 작성',
      manual: '손으로',
      auto: 'hook이 자동',
    },
    {
      item: '작업 시간',
      manual: '100%',
      auto: '50% 이하',
      accent: true,
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 5-5 · 효과 측정
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        5-5. 자동화 효과 측정
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-6 max-w-4xl">
        자료 5의 Issue #1 (수동) 대비 자료 6의 Issue #5 (자동화) 차이
      </p>

      <div className="max-w-4xl overflow-hidden rounded-md border border-divider">
        <div className="grid grid-cols-[180px_1fr_1fr] bg-bg-soft px-6 py-3 border-b border-divider">
          <span className="text-xs font-semibold uppercase tracking-wider text-text-sub">항목</span>
          <span className="text-xs font-semibold uppercase tracking-wider text-text-sub">Issue #1 (수동)</span>
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Issue #5 (자동화)</span>
        </div>
        {rows.map((row, idx) => (
          <div
            key={row.item}
            className={`grid grid-cols-[180px_1fr_1fr] px-6 py-4 items-center ${
              idx === rows.length - 1 ? '' : 'border-b border-divider'
            } ${row.accent ? 'bg-bg-soft' : ''}`}
          >
            <span className={`text-sm font-semibold ${row.accent ? 'text-text' : 'text-text'}`}>
              {row.item}
            </span>
            <span className="text-sm font-medium text-text-sub">{row.manual}</span>
            <span className={`text-sm font-medium ${row.accent ? 'text-accent font-bold' : 'text-text'}`}>
              {row.auto}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 max-w-4xl border-l-4 border-accent bg-bg-soft px-7 py-5 rounded-r-md">
        <p className="text-sm font-medium text-text leading-relaxed">
          작업자의 손이 절반 이하로 줄었다. 자동화의 효과는 측정 가능한 시간 절감으로 드러난다.
        </p>
      </div>
    </>
  );
}
