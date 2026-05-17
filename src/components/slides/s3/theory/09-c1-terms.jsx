// Source: lectures/S3/lecture.md lines 88-96
// Type: terms (5행 용어 표)

export default function S3TheoryC1Terms() {
  const terms = [
    { term: 'PRD', definition: '모든 이해관계자가 같은 그림을 보게 하는 합의 문서' },
    { term: '이해관계자', definition: 'PM, 개발자, 디자이너, 경영진, AI 에이전트 등' },
    { term: '합의 문서', definition: '모든 이해관계자가 같은 해석을 갖도록 명시' },
    { term: '모호함', definition: '측정 불가능한 표현. 임의 해석을 낳음' },
    { term: '임의 해석', definition: '모호한 표현을 각자 본인 기준으로 채우는 현상' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          챕터 용어 해설 — PRD란 무엇인가
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        핵심 용어 정리
      </h2>

      <div className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-5xl">
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
