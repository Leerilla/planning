// Source: lectures/S7/lecture.md lines 306-319 (한계 사례, 5-step 플로우)
// Type: example (5-step vertical flow + aside)
// Profile: hierarchical / comparison / medium / balanced

export default function S7TheoryC3CodeUnitLimit() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          한계 사례
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-8">
        코드 단위 검증의 한계
      </h2>

      <div className="flex flex-col gap-2 max-w-3xl">
        {/* Step 1: 화면 1 PRD 일치 */}
        <div className="border-l-4 border-success bg-success-soft rounded-r-md px-5 py-3">
          <p className="text-base text-success font-semibold">화면 1: PRD 일치 통과</p>
        </div>

        {/* Step 2: 화면 2 PRD 일치 */}
        <div className="border-l-4 border-success bg-success-soft rounded-r-md px-5 py-3">
          <p className="text-base text-success font-semibold">화면 2: PRD 일치 통과</p>
        </div>

        {/* Separator */}
        <div className="text-center text-text-muted py-1">↓</div>

        {/* Step 4: 라우팅 문제 */}
        <div className="border-l-4 border-warning bg-warning-soft rounded-r-md px-5 py-3">
          <p className="text-base text-warning font-semibold">
            하지만 화면 1 → 화면 2 라우팅이 깨져 있으면?
          </p>
        </div>

        {/* Separator */}
        <div className="text-center text-text-muted py-1">↓</div>

        {/* Step 6: 시나리오 통과 X */}
        <div className="border-l-4 border-danger bg-danger-soft rounded-r-md px-5 py-3">
          <p className="text-base text-danger font-bold">시나리오 통과 X</p>
        </div>
      </div>

      {/* Aside */}
      <div className="mt-4 border-l-4 border-accent bg-bg-soft px-6 py-3 rounded-r-md max-w-3xl">
        <p className="text-base text-text-sub leading-relaxed">
          각 화면이 따로따로 PRD와 일치해도 화면 간 연결이 깨지면 시나리오는 통과 못 함.
          시나리오 단위 검증이 이 문제를 잡는다.
        </p>
      </div>
    </>
  );
}
