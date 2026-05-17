// Source: lectures/S6/lecture.md lines 480-489
// Type: terms, 6행 챕터 3 용어 해설
// Profile: hierarchical logic / terms visual / balanced tone

export default function S6TheoryC3Terms() {
  const terms = [
    {
      term: 'hook',
      definition: '특정 시점에 자동 실행되는 작업',
    },
    {
      term: 'lifecycle 이벤트',
      definition: 'Claude Code 동작 흐름의 특정 시점 (5개)',
    },
    {
      term: 'command 타입',
      definition: '셸 명령 직접 실행. 결정적',
    },
    {
      term: 'agent 타입',
      definition: 'sub-agent 호출. 출력 구조는 결정적',
    },
    {
      term: 'matcher',
      definition: '어떤 도구가 트리거 대상인지 명시하는 정규식',
    },
    {
      term: 'timeout',
      definition: 'hook 실행 최대 시간. 초 단위',
    },
  ];

  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex items-center gap-3">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          챕터 용어 해설 — hooks와 5개 lifecycle
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug">
        핵심 용어 정리
      </h2>

      <div className="grid grid-cols-2 gap-x-6 gap-y-4 flex-1 max-w-5xl">
        {terms.map((t, i) => (
          <div key={i} className="border-l-2 border-accent pl-4 py-2">
            <div className="text-base font-bold text-text tracking-tight leading-snug">
              {t.term}
            </div>
            <div className="text-sm text-text-sub tracking-tight leading-relaxed mt-1">
              {t.definition}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
