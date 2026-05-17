// Source: lectures/S6/lecture.md line 78 (#### 조건 1: 매번 같은 방식)
// Type: comparison (2-column 좌우)
// Profile: hierarchical / comparison / medium-high / balanced

export default function S6TheoryC1Condition1() {
  const columns = [
    {
      label: '자동화 대상',
      items: [
        '코드 수정 후 PRD 일치 확인',
        '매번 같은 절차',
      ],
      emphasis: 'success',
      bgClass: 'bg-bg-emphasis',
      labelClass: 'text-fg-strong',
    },
    {
      label: '자동화 부적합',
      items: [
        '페르소나 인터뷰 응답 분석',
        '응답자에 따라 후속 질문 달라짐',
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
          조건 1 · 매번 같은 방식
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        절차의 일관성이 필수 조건
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        매번 같은 절차를 반복해야만 자동화의 대상이 될 수 있다.
      </p>

      <div className="grid grid-cols-2 gap-6 max-w-5xl">
        {columns.map((col, i) => (
          <div
            key={i}
            className={`border border-line rounded p-6 ${col.bgClass}`}
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
