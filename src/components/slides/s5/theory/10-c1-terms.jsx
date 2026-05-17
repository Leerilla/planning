// Source: lectures/S5/lecture.md lines 96-103 (#### 1️⃣ 챕터 용어 해설)
// Type: terms (4행 용어 표)

export default function S5TheoryC1Terms() {
  const terms = [
    { term: '수직 슬라이스', definition: '한 기능을 UI부터 데이터까지 한 번에 만드는 방식' },
    { term: '수평 슬라이스', definition: '모든 화면을 층 단위로 만드는 방식' },
    { term: 'MVP 핵심 가설 검증', definition: '한 화면이 동작하면 PRD 가설을 가장 빨리 알 수 있음' },
    { term: '패턴 복사', definition: '첫 화면의 빌드 명령을 두 번째 화면에 90% 재사용' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          챕터 용어 해설 — 수직 슬라이스
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
