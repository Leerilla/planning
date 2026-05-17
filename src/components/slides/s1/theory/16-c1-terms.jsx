// Source: lectures/S1/lecture.md lines 173-184
// Type: terms (8행 용어 표)
// D-040: Terms 패턴 부재 → inline 2열 grid (ThreeCards는 3개 한계)

export default function S1TheoryC1Terms() {
  const terms = [
    { term: "기획 (Planning)", definition: "누구의 어떤 문제를 어떻게 풀 것인가의 답을 정의하는 일" },
    { term: "페르소나 (Persona)", definition: "서비스가 풀려는 문제를 가진 구체적 사용자상" },
    { term: "페인포인트 (Pain Point)", definition: "페르소나가 실제로 겪는 불편과 어려움" },
    { term: "증상 (Symptom)", definition: "표면에서 관찰되는 현상. 문제 자체가 아님" },
    { term: "5 Whys", definition: "'왜?'를 5번 물어 증상에서 진짜 문제로 내려가는 기법" },
    { term: "1차 가설", definition: "검증 전 추측 단계의 가설. 틀려도 되는 출발점" },
    { term: "가설 페르소나", definition: "데이터 없이 직관과 1차 리서치로 만든 첫 페르소나 윤곽" },
    { term: "5단계 사슬", definition: "한 단계의 출력이 다음 입력이 되는 연결 구조" },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          챕터 용어 해설 — 기획이란 무엇인가
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        핵심 용어 정리
      </h2>

      {/* Terms — 2 columns grid */}
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
