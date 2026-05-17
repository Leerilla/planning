// Source: lectures/S3/lecture.md lines 662-670 (챕터 5 용어 5행)
// Type: terms

export default function S3TheoryC5Terms() {
  const terms = [
    { term: 'MVP', definition: '검증 가능한 최소 기능 제품' },
    { term: '검증 가능한 지표', definition: 'Before/After 수치 있는 측정 가능 형태' },
    { term: 'prd.md export', definition: 'Manyfast 마크다운 내보내기' },
    { term: '4단계 정제 워크플로', definition: '업로드 → 추출 → 생성 → 검토' },
    { term: '표준 3개 구성', definition: '입력 1 + 핵심 처리 1 + 출력 1' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          챕터 용어 해설 — PRD 정제의 실전
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
