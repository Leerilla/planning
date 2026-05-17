// Source: lectures/S2/lecture.md line 31
// Type: example (inline 2-card — 검증 두 조건)
// D-036: accent-bar 3px / dot w-2.5 / border-l-4

export default function S2TheoryC1TwoConditions() {
  const conditions = [
    {
      num: '1',
      label: '답변자 조건',
      title: '페르소나에 부합하는 모르는 사람',
      desc: (
        <>
          본인 가설과 무관한 거리를 둔 사람이어야 한다.
          <br />
          친구·동료는 관계 의식 때문에 답이 호의적으로 기운다.
        </>
      ),
    },
    {
      num: '2',
      label: '질문 조건',
      title: '가설 키워드를 데이터로 식별 가능한 형태',
      desc: (
        <>
          지불 의향, 선호, 사용 빈도 같은 측정 가능 단어로 묻는다.
          <br />
          {'"쓸 만하다"는 측정 불가능, "월 1만원 지불 의향"은 측정 가능.'}
        </>
      ),
    },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          검증의 두 조건
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-2">
        답이 검증이 되려면
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-6 max-w-4xl">
        <span className="highlight-mark">두 조건이 모두 만족</span>되어야 한다. 하나라도 빠지면 의견 수집에 머문다.
      </p>

      {/* 2-card grid */}
      <div className="grid grid-cols-2 gap-5 max-w-5xl">
        {conditions.map((c) => (
          <div
            key={c.num}
            className="rounded-2xl border-l-4 border-accent bg-bg-soft p-5 flex flex-col gap-3 hover:bg-success-soft hover:border-success transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="text-accent text-2xl font-bold tabular-nums tracking-wider group-hover:text-success transition-colors">
                {c.num}
              </span>
              <span className="text-text-muted text-xs font-semibold tracking-wider uppercase">
                {c.label}
              </span>
            </div>
            <div className="text-xl font-bold text-text tracking-tight leading-snug">
              {c.title}
            </div>
            <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed">
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
