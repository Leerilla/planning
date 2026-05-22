// Source: lectures/S6/lecture.md line 85 (#### 조건 2: 판단 기준 명확)
// Type: comparison (2-column 좌우)
// Profile: hierarchical / comparison / medium-high / balanced

export default function S6TheoryC1Condition2() {
  const columns = [
    {
      label: '자동화 대상',
      items: [
        'PRD 일치 / 커밋 메시지 형식',
        '통과/미통과 명확',
      ],
      emphasis: 'success',
      bgClass: 'bg-bg-emphasis',
      labelClass: 'text-fg-strong',
    },
    {
      label: '자동화 부적합',
      items: [
        '페인포인트 우선순위 결정',
        '작업자 판단 필요',
      ],
      emphasis: 'warning',
      bgClass: 'bg-bg-soft',
      labelClass: 'text-fg-muted',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          조건 2 · 판단 기준 명확
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        통과 기준이 명확해야 한다
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        판단 기준이 모호하면 도구가 판단할 수 없다.
      </p>

      <div className="grid grid-cols-2 gap-6 max-w-5xl">
        {columns.map((col, i) => (
          <div
            key={i}
            className={`border border-divider rounded p-6 ${col.bgClass}`}
          >
            <div className={`text-xs uppercase tracking-wider mb-3 font-semibold ${col.labelClass}`}>
              {col.label}
            </div>
            <ul className="flex flex-col gap-3">
              {col.items.map((item, j) => (
                <li key={j} className="flex gap-3 items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="text-base text-text leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
