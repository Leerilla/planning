// Source: lectures/S7/lecture.md line 183-188
// Type: comparison
// Pattern: 2-row result outcomes
// Profile: systematic/simulation/medium-interactive

export default function S7TheoryC2Step3ResultCheck({ deckMeta }) {
  return (
    <div className="flex h-full flex-col gap-8 bg-bg-base p-12">
      {/* Header marker */}
      <div className="flex items-center gap-4">
        <div className="h-[3px] w-10 rounded-full bg-accent" />
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">
          3단계
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-text">
        3단계: 실행과 결과 확인
      </h1>

      {/* 2-row grid */}
      <div className="max-w-3xl space-y-3">
        {/* Row 1: Pass */}
        <div className="flex items-center gap-4">
          <div className="rounded-r-md border-l-4 border-success bg-success-soft px-5 py-3">
            <span className="font-semibold text-success">[통과]</span>
          </div>
          <span className="font-semibold text-success">→ 다음 검증으로</span>
        </div>

        {/* Row 2: Failure */}
        <div className="flex items-center gap-4">
          <div className="rounded-r-md border-l-4 border-danger bg-danger-soft px-5 py-3">
            <span className="font-semibold text-danger">[실패]</span>
          </div>
          <span className="font-semibold text-danger">→ 자율 디버깅 루프로</span>
        </div>
      </div>
    </div>
  );
}
