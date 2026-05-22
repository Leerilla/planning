// Source: lectures/S6/lecture.md lines 183-192 (#### Agent 설계 6원칙 한눈에)
// Type: concept / default
// Profile: hierarchical / comparison / medium-high / balanced
// Interactive: static (의도된 정적 — 6원칙 grid overview)

export default function S6TheoryC2PrinciplesOverview() {
  const principles = [
    {
      number: 1,
      title: '단일 책임',
      description: '한 sub-agent는 한 역할만',
    },
    {
      number: 2,
      title: '최소 권한',
      description: '역할에 필요한 최소 도구만',
    },
    {
      number: 3,
      title: '결정적 출력',
      description: '출력 형식 고정',
    },
    {
      number: 4,
      title: '책임 분리',
      description: 'sub-agent는 조언, 메인이 결정',
    },
    {
      number: 5,
      title: '호출 시점 명시',
      description: 'description에 "~할 때"',
    },
    {
      number: 6,
      title: '입출력 계약',
      description: '입력·출력을 본문에 명시',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          Agent 설계 원칙
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        Agent 설계 6원칙 한눈에
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        원칙 없이 만든 sub-agent는 메인의 복제가 되거나 권한이 너무 넓어 위험하다.
      </p>

      <div className="grid grid-cols-3 gap-6 max-w-6xl">
        {principles.map((p, i) => (
          <div
            key={i}
            className="border border-divider rounded-2xl p-6 bg-bg-soft hover:shadow-lg transition-shadow duration-200"
          >
            <div className="text-lg font-bold text-accent mb-2">
              {String(p.number).padStart(2, '0')}
            </div>
            <h3 className="text-xl font-bold text-text mb-3 leading-snug">
              {p.title}
            </h3>
            <p className="text-base text-text-sub leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
