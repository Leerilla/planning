// Source: lectures/S7/lecture.md line 194-201
// Type: concept (definition)
// Profile: systematic/simulation/medium-interactive

export default function S7TheoryC2AutonomousDebug({ deckMeta }) {
  return (
    <div className="flex h-full flex-col gap-8 bg-bg-base p-12">
      {/* Header marker */}
      <div className="flex items-center gap-4">
        <div className="h-[3px] w-10 rounded-full bg-accent" />
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">
          정의
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-text">
        자율 디버깅이란
      </h1>

      {/* Definition box */}
      <div className="max-w-3xl space-y-6">
        <div className="rounded-r-md border-l-4 border-accent bg-bg-soft px-6 py-5">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">
            Autonomous Debugging
          </p>
          <p className="mt-3 text-base text-text">
            에이전트가 에러 분석 → 수정 → 재실행을 반복하는 흐름.
          </p>
        </div>

        {/* Role breakdown */}
        <div className="grid grid-cols-2 gap-4">
          {/* Card 1: 작업자 */}
          <div className="rounded-xl border border-divider bg-bg-soft px-5 py-4">
            <p className="text-xs uppercase tracking-wider text-text-sub">
              작업자
            </p>
            <p className="mt-2 text-lg font-bold text-text">
              명령자
            </p>
          </div>

          {/* Card 2: 에이전트 */}
          <div className="rounded-xl border border-divider bg-bg-soft px-5 py-4">
            <p className="text-xs uppercase tracking-wider text-text-sub">
              에이전트
            </p>
            <p className="mt-2 text-lg font-bold text-text">
              디버깅 수행자
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
