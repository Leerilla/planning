// Source: lectures/S4/lecture.md lines 210-227 (#### AI 검증 루프 5단계)
// Type: process (5단계 sequential reveal)

export default function S4TheoryC2AiVerify5Steps() {
  const steps = [
    {
      n: '1',
      title: 'Claude Code 명령',
      detail: '"이 CLAUDE.md만 보고 우리 프로젝트가 무엇인지 한 문장으로 요약해줘"',
    },
    {
      n: '2',
      title: 'AI 요약 답변 확인',
      detail: '답변 텍스트를 그대로 읽기',
    },
    {
      n: '3',
      title: '작업자 의도와 비교',
      detail: '일치 → 검증 통과 / 불일치 → 모호한 부분 존재',
    },
    {
      n: '4',
      title: '불일치 시 CLAUDE.md 수정',
      detail: '모호한 영역 식별 → 명확한 표현으로 보강',
    },
    {
      n: '5',
      title: '재검증 (의도 일치까지 반복)',
      detail: '작업자 의도와 일치할 때까지 1~4 반복',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          AI 검증 루프 5단계
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        만들고 즉시 검증, 의도 일치까지 반복
      </h2>

      <div className="space-y-2.5 max-w-5xl">
        {steps.map((s, i) => (
          <div key={i} className="grid grid-cols-[50px_1.4fr_3fr] items-center gap-4 border-l-2 border-accent pl-4 py-2.5">
            <span className="text-2xl font-bold text-accent leading-none">{s.n}</span>
            <span className="text-base text-text font-bold">{s.title}</span>
            <span className="text-sm text-text-sub leading-relaxed">{s.detail}</span>
          </div>
        ))}
      </div>
    </>
  );
}
