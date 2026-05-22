// Source: lectures/S5/lecture.md lines 280-288 (#### 동작 3요소)
// Type: concept (3-card overview)

export default function S5TheoryC3ThreeElements() {
  const elements = [
    { num: '1', title: '뜸', meaning: '페이지가 브라우저에 뜬다' },
    { num: '2', title: '인터랙션', meaning: '핵심 인터랙션이 작동한다' },
    { num: '3', title: '반응', meaning: '입력에 대한 반응이 나온다' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          동작 3요소
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        본 단계 합격선 — 3요소 모두 충족
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        세 요소가 모두 충족되면 합격. 디자인 정제는 다음 단계.
      </p>

      <div className="grid grid-cols-3 gap-5 max-w-6xl">
        {elements.map((e, i) => (
          <div key={i} className="border border-divider rounded p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl border-2 border-accent text-accent text-base font-bold tabular-nums">
                {e.num}
              </span>
              <span className="text-base font-bold text-text leading-snug">{e.title}</span>
            </div>
            <p className="text-sm text-text-sub leading-relaxed">{e.meaning}</p>
          </div>
        ))}
      </div>
    </>
  );
}
