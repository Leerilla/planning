// Source: lectures/S6/lecture.md line 70 (#### 자동화 가능한 반복 3조건)
// Type: concept / default
// Profile: hierarchical / comparison / medium-high / balanced

export default function S6TheoryC13Conditions() {
  const conditions = [
    {
      label: 'Condition 1',
      title: '매번 같은 방식',
      meaning: '매번 같은 절차로 진행',
    },
    {
      label: 'Condition 2',
      title: '판단 기준 명확',
      meaning: '통과/미통과가 명확',
    },
    {
      label: 'Condition 3',
      title: '사람이 매번 X',
      meaning: '판단만 사람이, 실행은 도구',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          자동화 가능성 판정
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        자동화 가능한 반복 3조건
      </h2>

      <p className="text-base text-text-sub mb-6 max-w-3xl">
        3조건 모두 충족해야 자동화 대상이 될 수 있다.
      </p>

      <div className="grid grid-cols-3 gap-6 max-w-6xl">
        {conditions.map((c, i) => (
          <div key={i} className="border border-line rounded p-6">
            <div className="text-xs uppercase tracking-wider text-accent mb-3 font-semibold">
              {c.label}
            </div>
            <h3 className="text-xl font-bold text-text mb-2">
              {c.title}
            </h3>
            <p className="text-base text-text-sub leading-relaxed">
              {c.meaning}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
