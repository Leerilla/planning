// Source: lectures/S5/lecture.md lines 228-234 (#### 2️⃣ 챕터 용어 해설)
// Type: terms (3행 용어 표)

export default function S5TheoryC2Terms() {
  const terms = [
    { term: '위임', definition: 'AI에게 작업을 맡기는 행위' },
    { term: '위임 3원칙', definition: '범위 좁히기, 결과물 명시, 검증 방법 결정' },
    { term: '광범위한 명령의 함정', definition: '에이전트가 추측해 만들고 매번 결과가 다름' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          챕터 용어 해설 — 위임 3원칙
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
