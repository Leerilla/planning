// Source: lectures/S7/lecture.md lines 321-337 (도구 진화 4-step timeline)
// Type: process (4-step vertical, steps 3/4 accent, with aside)
// Profile: hierarchical / comparison / medium / balanced

export default function S7TheoryC3ToolEvolution() {
  const steps = [
    {
      num: 1,
      label: '자료 3',
      body: 'Manyfast로 PRD 작성',
      isAccent: false,
    },
    {
      num: 2,
      label: '자료 4',
      body: 'Manyfast → docs/prd.md export',
      note: '(Manyfast MCP 유료화로 제외)',
      isAccent: false,
    },
    {
      num: 3,
      label: '자료 6',
      body: 'prd-reviewer가 docs/prd.md를 Read로 직접 읽고 코드 단위 검증',
      isAccent: true,
    },
    {
      num: 4,
      label: '자료 7 (본 자료)',
      body: 'scenario-verifier가 docs/prd.md를 Read로 읽고 시나리오 단위 검증',
      isAccent: true,
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          도구 진화
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-8">
        검증 도구의 진화
      </h2>

      <div className="flex flex-col gap-3 max-w-4xl">
        {steps.map((step, i) => {
          const borderColor = step.isAccent ? 'border-accent' : 'border-divider';
          const bgColor = step.isAccent ? 'bg-accent-soft' : 'bg-bg-soft';
          const textColor = step.isAccent ? 'text-accent' : 'text-text';

          return (
            <div key={i} className={`border-l-4 ${borderColor} ${bgColor} rounded-r-md px-5 py-3`}>
              <div className={`text-xs uppercase tracking-wider font-semibold text-text-muted mb-1`}>
                {step.label}
              </div>
              <div className={`text-base font-semibold ${step.isAccent ? 'text-text' : 'text-text'}`}>
                {step.body}
              </div>
              {step.note && (
                <div className="text-xs text-text-muted mt-1">{step.note}</div>
              )}
            </div>
          );
        })}
      </div>

      {/* Aside */}
      <div className="mt-6 border-l-4 border-accent bg-bg-soft px-6 py-3 rounded-r-md max-w-4xl">
        <p className="text-base text-text-sub leading-relaxed">
          본 학습 전체에서 Manyfast MCP는 PRD 작성 단계만 사용. 검증은 docs/prd.md를 직접 읽는 방식으로 일관.
        </p>
      </div>
    </>
  );
}
