// Source: lectures/S7/lecture.md lines 229-241
// Type: process
// Pattern: 3-step vertical (완료 ≠ 신뢰 → 재실행 → 확인) + aside

export default function S7TheoryC2Principle3() {
  return (
    <div className="flex h-full flex-col gap-8 bg-bg p-12">
      {/* Header marker */}
      <div className="flex items-center gap-4">
        <div className="h-[3px] w-10 rounded-full bg-accent" />
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">
          원칙 3
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-text">
        결과를 검증
      </h1>

      {/* 3-step vertical process */}
      <div className="max-w-3xl space-y-3">
        {/* Step 1: Warning color */}
        <div className="flex flex-col gap-2 rounded-r-md border-l-4 border-warning bg-warning-soft px-5 py-3">
          <p className="text-sm font-semibold text-text">
            [수정 완료] ← 그대로 신뢰 X
          </p>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="h-6 w-[2px] bg-divider" />
        </div>

        {/* Step 2 */}
        <div className="flex flex-col gap-2 rounded-r-md border-l-4 border-accent bg-bg-soft px-5 py-3">
          <p className="text-sm font-semibold text-text">
            테스트 재실행
          </p>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="h-6 w-[2px] bg-divider" />
        </div>

        {/* Step 3: Success color */}
        <div className="flex flex-col gap-2 rounded-r-md border-l-4 border-success bg-success-soft px-5 py-3">
          <p className="text-sm font-semibold text-text">
            [통과 확인] ← 작업자가 직접
          </p>
        </div>
      </div>

      {/* Aside */}
      <div className="mt-4 max-w-3xl rounded-r-md border-l-4 border-accent bg-bg-soft px-6 py-3">
        <p className="text-sm leading-relaxed text-text">
          "수정 완료"를 그대로 신뢰하지 않음. 통과하지 않으면 디버깅 루프 한 번 더.
        </p>
      </div>
    </div>
  );
}
