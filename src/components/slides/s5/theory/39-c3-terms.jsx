// Source: lectures/S5/lecture.md lines 389-396 (#### 3️⃣ 챕터 용어 해설)
// Type: terms (4행 용어 표)

export default function S5TheoryC3Terms() {
  const terms = [
    { term: 'Stitch', definition: 'Google Labs의 AI UI 디자인 도구' },
    { term: '수직 슬라이스의 동작', definition: 'UI 뜸, 인터랙션 작동, 입력 반응' },
    { term: '폴백 도구', definition: 'Stitch가 막혔을 때 대체. v0, Lovable' },
    { term: '동작과 예쁨의 분리', definition: '본 단계는 동작, 예쁨은 다음 단계 이후' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          챕터 용어 해설 — Stitch와 동작의 정의
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
