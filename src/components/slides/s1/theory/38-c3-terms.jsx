// Source: lectures/S1/lecture.md lines 470-480
// Type: terms (§3 챕터 용어 해설 — 7행)
// D-035: emoji "3️⃣" 제거 → "Section 3" 텍스트
// D-040: 표 형식 → inline 2열 grid (s16/s27와 동일 패턴)

export default function S1TheoryC3Terms() {
  const terms = [
    { term: '출처 클릭 (Source Click)', definition: 'AI가 인용한 URL을 직접 클릭해 원문을 확인하는 행위' },
    { term: '원문 확인 (Original Reading)', definition: '페이지가 진짜 AI 답변의 내용을 담고 있는지 점검' },
    { term: '신뢰성 판단 (Trust Judgment)', definition: '1차 자료인가, 검증 가능한가, 다른 출처와 일치하는가' },
    { term: '검증 우선주의', definition: 'AI 답변은 검증 전까지 사용 불가하다는 운영 원칙' },
    { term: '그럴듯한 통계', definition: '숫자는 정확해 보이지만 출처가 없는 거짓 패턴' },
    { term: '가짜 인용', definition: '유명인의 발언을 그럴듯하게 만든 거짓 패턴' },
    { term: '출처 조작', definition: 'URL이나 출판물 이름을 가공한 거짓 패턴' },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          챕터 용어 해설 — 출처 검증의 실전
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
