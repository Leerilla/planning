// Source: lectures/S7/lecture.md lines 471-485
// Type: comparison, 2-col left danger / right success inline JSX
// Profile: hierarchical, simulation, balanced

export default function Slide38({ deckMeta }) {
  return (
    <div className="w-full h-full bg-bg flex flex-col gap-6 p-7 justify-center">
      {/* Header marker */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-text-sub uppercase tracking-wider">
          자료 7 · §3-C
        </span>
        <span className="text-xs font-semibold text-accent uppercase tracking-wider">
          안티 vs 올바른 운영
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text leading-tight">
        안티패턴 vs 검증 루프
      </h2>

      {/* Two-column comparison */}
      <div className="grid grid-cols-2 gap-4 max-w-5xl">
        {/* Left: 안티패턴 (danger) */}
        <div className="border-l-4 border-danger bg-danger-soft rounded-r-md px-5 py-4">
          <p className="text-danger font-bold uppercase text-xs tracking-wider mb-2">
            안티패턴
          </p>
          <div className="flex flex-col gap-2 text-sm text-text">
            <p>
              &apos;보고서가 통과라고 했으니 다음 단계&apos;
              <br />
              → 검증 우선주의 위반
            </p>
            <p>
              &apos;한 번 호출하고 결과 그대로 수용&apos;
              <br />
              → 루프 누락
            </p>
          </div>
        </div>

        {/* Right: 올바른 운영 (success) */}
        <div className="border-l-4 border-success bg-success-soft rounded-r-md px-5 py-4">
          <p className="text-success font-bold uppercase text-xs tracking-wider mb-2">
            올바른 운영
          </p>
          <p className="text-sm text-text leading-relaxed">
            보고서의 막힘 지점 1-2개 직접 확인. 수정 후 다시 호출. 통과까지 반복.
          </p>
        </div>
      </div>
    </div>
  );
}
