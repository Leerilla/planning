// Source: lectures/S6/lecture.md lines 133-140 (#### 1️⃣ 챕터 용어 해설)
// Type: terms (5행 용어 표)
// Profile: hierarchical / comparison / medium-high / balanced

export default function S6TheoryC1Terms() {
  const terms = [
    { term: '확장', definition: '첫 화면 빌드 패턴을 두 번째 화면에 복사' },
    { term: '자동화', definition: '빌드 사이클 안의 반복 작업을 도구에 위임' },
    { term: '반복 패턴', definition: '매번 같은 방식으로 일어나는 작업. 자동화 대상' },
    { term: '자동화 부적합', definition: '매번 다른 판단 필요. 사람이 해야 함' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          챕터 용어 해설 — 확장과 자동화
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        핵심 용어 정리
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
