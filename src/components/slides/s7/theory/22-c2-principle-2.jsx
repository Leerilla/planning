// Source: lectures/S7/lecture.md lines 215-227
// Type: process
// Pattern: 3-step vertical (분석 → 검토 → 수정) + aside

export default function S7TheoryC2Principle2() {
  return (
    <div className="flex h-full flex-col gap-8 bg-bg p-12">
      {/* Header marker */}
      <div className="flex items-center gap-4">
        <div className="h-[3px] w-10 rounded-full bg-accent" />
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">
          원칙 2
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-text">
        분석을 먼저, 수정은 그다음
      </h1>

      {/* 3-step vertical process */}
      <div className="max-w-3xl space-y-3">
        {/* Step 1 */}
        <div className="flex flex-col gap-2 rounded-r-md border-l-4 border-accent bg-bg-soft px-5 py-3">
          <p className="text-sm font-semibold text-text">
            "분석해주세요"부터
          </p>
        </div>

        {/* Arrow indicator - implicit via layout */}
        <div className="flex justify-center">
          <div className="h-6 w-[2px] bg-divider" />
        </div>

        {/* Step 2 */}
        <div className="flex flex-col gap-2 rounded-r-md border-l-4 border-divider bg-bg-soft px-5 py-3">
          <p className="text-sm font-medium text-text-sub">
            [작업자가 분석 결과 검토]
          </p>
        </div>

        {/* Arrow indicator */}
        <div className="flex justify-center">
          <div className="h-6 w-[2px] bg-divider" />
        </div>

        {/* Step 3 */}
        <div className="flex flex-col gap-2 rounded-r-md border-l-4 border-accent bg-bg-soft px-5 py-3">
          <p className="text-sm font-semibold text-text">
            "수정해주세요"로 이어감
          </p>
        </div>
      </div>

      {/* Aside */}
      <div className="mt-4 max-w-3xl rounded-r-md border-l-4 border-accent bg-bg-soft px-6 py-3">
        <p className="text-sm leading-relaxed text-text">
          "고쳐주세요" 바로 → 에이전트 추측. "분석 → 수정" 순서 → 작업자가 방향 검토 가능.
        </p>
      </div>
    </div>
  );
}
