// Source: lectures/S1/lecture.md lines 151-161
// Type: process (3단계 진화, sequential)
// D-040: 3단계 sequential → inline 세로 카드 (StepGuide 부적합)

export default function S1TheoryC2bPersonaEvolution() {
  const stages = [
    {
      name: "가설 페르소나",
      sub: "Proto-persona",
      desc: "데이터 없이 직관과 1차 리서치로 만든 첫 윤곽",
      current: true,
    },
    {
      name: "검증된 페르소나",
      sub: "Validated",
      desc: "인터뷰 5-8명, 설문, 행동 데이터로 수정한 결과",
      current: false,
    },
    {
      name: "살아있는 페르소나",
      sub: "Living",
      desc: "서비스 출시 후 실제 사용 데이터로 갱신",
      current: false,
    },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          페르소나 진화
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-2">
        페르소나는 단계별로 진화한다
      </h2>
      <p className="text-base text-text-sub mb-8">
        한 번 만들고 끝나는 산출물이 아니다.
      </p>

      {/* 3 stages 세로 흐름 */}
      <ul className="flex flex-col gap-3 max-w-3xl">
        {stages.map((s, i) => (
          <li key={i} className="grid grid-cols-[48px_1fr] gap-4 items-start">
            <span
              className={`text-sm font-bold tabular-nums tracking-wider text-center mt-1 ${
                s.current ? 'text-accent' : 'text-text-muted'
              }`}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div
              className={`rounded-2xl border ${
                s.current ? 'border-accent bg-success-soft' : 'border-divider bg-bg-soft'
              } px-5 py-4 flex flex-col gap-2`}
            >
              <div className="grid grid-cols-[1fr_auto] gap-3 items-center">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-xl font-bold tracking-tight text-text leading-tight">{s.name}</span>
                  <span className="text-xs text-text-sub uppercase tracking-wider leading-tight">
                    {s.sub}
                  </span>
                </div>
                <span
                  className={`text-xs font-bold uppercase tracking-wider leading-tight ${
                    s.current ? 'text-accent' : 'text-transparent select-none'
                  }`}
                  aria-hidden={!s.current}
                >
                  본 자료
                </span>
              </div>
              <p className="text-base font-medium text-text-sub tracking-tight leading-snug">
                {s.desc}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
