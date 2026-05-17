// Source: lectures/S2/lecture.md lines 42-44
// Type: example (inline 2-col — 시드 1/5 가설 형식 변환)
// D-036: 시각 마커 / D-037 inline custom

export default function S2TheoryC1SeedExamples() {
  const seeds = [
    {
      num: '시드 1',
      persona: 'PM',
      bad: '"PM은 회의록 정리 도구를 좋아할 것이다"',
      badReason: '"좋아한다"의 측정 단위 X',
      good: '"PM은 회의록을 5분 안에 정리해주는 도구에 월 1만원 이상 지불할 의향이 있을 것이다"',
      goodReason: '1만원 이상 / 그 이하 / 0원 세 카테고리 분류',
    },
    {
      num: '시드 5',
      persona: '동호회 총무',
      bad: '"동호회 총무는 공지 자동화를 원할 것이다"',
      badReason: '"원한다"의 측정 단위 X',
      good: '"동호회 총무는 공지 카피 자동 생성 도구에 무료라면 사용할 의향이 있을 것이다"',
      goodReason: '"사용한다"의 행동 측정 가능',
    },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          시드 적용 — 같은 가설을 검증 가능하게
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        시드 1/5 가설 형식 변환
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        같은 페르소나·문제에서도 <span className="highlight-mark">동사의 추상도</span>에 따라 검증 가능성이 갈린다.
      </p>

      {/* 2 시드 카드 */}
      <div className="flex flex-col gap-3 max-w-5xl">
        {seeds.map((s) => (
          <div key={s.num} className="rounded-2xl border border-divider bg-bg-soft p-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-accent bg-bg-soft border border-accent text-xs font-semibold tracking-wider uppercase rounded-xl px-3 py-1">
                {s.num}
              </span>
              <span className="text-base font-semibold text-text tracking-tight">
                페르소나: {s.persona}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border-l-4 border-danger bg-danger-soft p-3">
                <div className="text-danger text-xs font-semibold tracking-wider uppercase mb-2">
                  검증 불가능
                </div>
                <p className="text-sm font-medium text-text leading-relaxed mb-2">
                  {s.bad}
                </p>
                <p className="text-xs text-text-sub leading-snug">
                  {s.badReason}
                </p>
              </div>
              <div className="rounded-xl border-l-4 border-success bg-success-soft p-3">
                <div className="text-success text-xs font-semibold tracking-wider uppercase mb-2">
                  검증 가능
                </div>
                <p className="text-sm font-medium text-text leading-relaxed mb-2">
                  {s.good}
                </p>
                <p className="text-xs text-text-sub leading-snug">
                  {s.goodReason}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
