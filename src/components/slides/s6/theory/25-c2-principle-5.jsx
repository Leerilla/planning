// Source: lectures/S6/lecture.md lines 241-246 (#### 원칙 5: 호출 시점 명시)
// Type: comparison (2-column 명확 vs 모호)
// Profile: hierarchical / comparison / medium-high / balanced
// Interactive: static (텍스트 비교, toggle 최소화)

export default function S6TheoryC2Principle5() {
  const callTiming = [
    {
      label: '명확',
      border: 'success',
      examples: ['코드 작성/수정 직후 호출', 'hook matcher가 잘 잡힘'],
    },
    {
      label: '모호',
      border: 'danger',
      examples: ['코드 검토에 사용', '자연어 호출도 일관됨'],
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          원칙 5 · 호출 시점 명시
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        정확한 타이밍 명시
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        호출 시점이 명확해야 hook이 일관되게 작동하고 자동화 신뢰도가 올라간다.
      </p>

      <div className="grid grid-cols-2 gap-6 max-w-5xl">
        {callTiming.map((col, i) => (
          <div
            key={i}
            className={`border-l-4 border-${col.border === 'success' ? 'success' : 'danger'} bg-bg-soft rounded-md p-6`}
          >
            <div className={`text-xs uppercase tracking-wider font-semibold mb-4 ${col.border === 'success' ? 'text-success' : 'text-danger'}`}>
              {col.label}
            </div>
            <ul className="flex flex-col gap-3">
              {col.examples.map((ex, j) => (
                <li key={j} className="flex gap-3 items-start">
                  <span className={`inline-block w-1.5 h-1.5 rounded-full mt-2.5 shrink-0 ${col.border === 'success' ? 'bg-success' : 'bg-danger'}`} />
                  <span className="text-base text-text-sub leading-relaxed">
                    {ex}
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
