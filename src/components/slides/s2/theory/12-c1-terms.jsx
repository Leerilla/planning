// Source: lectures/S2/lecture.md lines 46-52
// Type: terms (5행 용어 표)
// D-040: 표 형식 → inline 2-col grid (S1 동형)

export default function S2TheoryC1Terms() {
  const terms = [
    { term: '고객 검증 (Customer Validation)', definition: '가설이 시장에서 진짜 통하는지를 데이터로 시험하는 일' },
    { term: '유도 질문 (Leading Question)', definition: '응답자가 특정 답을 하도록 유도하는 질문' },
    { term: '확증 편향 (Confirmation Bias)', definition: '자기 가설에 부합하는 답만 받아들이는 경향' },
    { term: '검증 가능한 형태', definition: '가설이 틀렸을 때 데이터가 명확히 틀렸다고 말해주는 형태' },
    { term: '측정 가능성', definition: '가설의 핵심 단어가 데이터로 식별 가능한가' },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          챕터 용어 해설 — 고객 검증이란 무엇인가
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        핵심 용어 정리
      </h2>

      {/* Terms — 2 columns */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-5xl">
        {terms.map((t, i) => (
          <div
            key={i}
            className="border-l-2 border-accent pl-4 py-2"
          >
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
