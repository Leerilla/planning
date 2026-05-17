// Source: lectures/S3/lecture.md lines 301-309
// Type: terms (5행 용어 표)

export default function S3TheoryC2Terms() {
  const terms = [
    { term: '5요소', definition: '문제, 페르소나, 핵심 기능, 성공 지표, 사용자 스토리' },
    { term: '성공 지표', definition: '제품이 의도대로 작동하는지 측정 가능한 기준' },
    { term: 'MVP', definition: '검증 가능한 최소 기능 제품. 핵심 기능 3개 이하' },
    { term: '표준 3개 구성', definition: '입력 1 + 핵심 처리 1 + 출력 1' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          챕터 용어 해설 — 좋은 PRD의 5요소
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
