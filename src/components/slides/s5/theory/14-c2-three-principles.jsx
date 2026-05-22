// Source: lectures/S5/lecture.md lines 125-131 (#### 위임 3원칙)
// Type: concept (3-card overview)

export default function S5TheoryC2ThreePrinciples() {
  const principles = [
    {
      num: '1',
      title: '범위를 좁힌다',
      meaning: '한 번에 한 화면, 한 기능',
    },
    {
      num: '2',
      title: '결과물을 명시한다',
      meaning: '구체적 행동과 화면 변화로',
    },
    {
      num: '3',
      title: '검증 방법을 미리 정한다',
      meaning: '무엇을 확인하면 동작인지 사전 결정',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          위임 3원칙
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        모든 빌드 명령의 사전 점검 3가지
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        본 학습 빌드 명령부터 시작해 유용하게 쓰는 사고 양식.
      </p>

      <div className="grid grid-cols-3 gap-5 max-w-6xl">
        {principles.map((p, i) => (
          <div key={i} className="border border-divider rounded p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl border-2 border-accent text-accent text-base font-bold tabular-nums">
                {p.num}
              </span>
              <span className="text-base font-bold text-text leading-snug">{p.title}</span>
            </div>
            <p className="text-sm text-text-sub leading-relaxed">{p.meaning}</p>
          </div>
        ))}
      </div>
    </>
  );
}
