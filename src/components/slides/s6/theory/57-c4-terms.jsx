// Source: lectures/S6/lecture.md lines 646-653
// Type: terms (4행 챕터 4 용어 정의)
// PostToolUse, Stop, 결합, 검증 우선주의 용어 해설

export default function S6TheoryC4Terms() {
  const terms = [
    {
      term: 'PostToolUse 패턴',
      definition: '코드 수정 직후 sub-agent 자동 검증',
    },
    {
      term: 'Stop 패턴',
      definition: '응답 종료 시 sub-agent 자동 커밋',
    },
    {
      term: '결합 패턴',
      definition: '두 패턴이 함께 작동하는 완전 자동화 사이클',
    },
    {
      term: '검증 우선주의',
      definition: '자동화 보고도 작업자 직접 검증',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          챕터 용어 해설 — hooks와 자동화 패턴
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
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
    </>
  );
}
