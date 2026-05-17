// Source: lectures/S6/lecture.md lines 330-337
// Type: terms (5행 챕터 2 용어 정의)
// Agent 설계 6원칙 및 관련 개념들의 정의 표

export default function S6TheoryC2Terms() {
  const terms = [
    {
      term: 'sub-agent',
      definition: '특정 역할을 부여한 별도 에이전트',
    },
    {
      term: 'frontmatter',
      definition: '마크다운 파일 상단 YAML 메타데이터',
    },
    {
      term: 'Agent 설계 6원칙',
      definition: '단일 책임, 최소 권한, 결정적 출력, 책임 분리, 호출 시점, 입출력 계약',
    },
    {
      term: '컨텍스트 격리',
      definition: 'sub-agent가 메인과 분리된 컨텍스트',
    },
    {
      term: '최소 권한 원칙',
      definition: '필요한 도구만 부여하고 초과 권한 제한',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          챕터 용어 해설 — Agent 설계 6원칙
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        Section 2 핵심 용어 정리
      </h2>

      <div className="grid grid-cols-2 gap-x-6 gap-y-4 max-w-5xl">
        {terms.map((t, i) => (
          <div key={i} className="border-l-2 border-accent pl-4 py-2">
            <div className="text-lg font-bold text-text tracking-tight leading-snug">
              {t.term}
            </div>
            <div className="text-base text-text-sub tracking-tight leading-relaxed mt-1.5">
              {t.definition}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
