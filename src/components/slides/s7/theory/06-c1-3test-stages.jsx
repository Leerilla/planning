// Source: lectures/S7/lecture.md lines 46-52 (#### 3가지 테스트 단계)
// Type: comparison
// Phase 6 fix (2026-05-16): 헤더 가시 구분 + marker/title 일관 + bg-accent-soft 헤더

export default function S7TheoryC1ThreeTestStages() {
  return (
    <>
      {/* Header marker + label */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          테스트 단계
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        3가지 테스트 단계
      </h2>

      {/* 3-row × 3-col table */}
      <div className="flex flex-col gap-3 max-w-5xl">
        {/* Header row — 가시 구분 강화 */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-bg-soft rounded-xl px-5 py-3 border-2 border-divider">
            <div className="text-sm font-bold text-text uppercase tracking-wide">
              단계
            </div>
          </div>
          <div className="bg-bg-soft rounded-xl px-5 py-3 border-2 border-divider">
            <div className="text-sm font-bold text-text uppercase tracking-wide">
              검증 대상
            </div>
          </div>
          <div className="bg-bg-soft rounded-xl px-5 py-3 border-2 border-divider">
            <div className="text-sm font-bold text-text uppercase tracking-wide">
              본 학습 합격선
            </div>
          </div>
        </div>

        {/* Row 1: 단위 테스트 */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-bg-soft rounded-xl px-5 py-4 border border-divider flex items-center">
            <div className="text-base font-bold text-text">단위 테스트</div>
          </div>
          <div className="bg-bg-soft rounded-xl px-5 py-4 border border-divider flex items-center">
            <div className="text-base text-text-sub">한 함수</div>
          </div>
          <div className="bg-bg-soft rounded-xl px-5 py-4 border border-divider flex items-center justify-center">
            <div className="text-base text-text-sub">보조</div>
          </div>
        </div>

        {/* Row 2: 통합 테스트 */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-bg-soft rounded-xl px-5 py-4 border border-divider flex items-center">
            <div className="text-base font-bold text-text">통합 테스트</div>
          </div>
          <div className="bg-bg-soft rounded-xl px-5 py-4 border border-divider flex items-center">
            <div className="text-base text-text-sub">여러 모듈 연결</div>
          </div>
          <div className="bg-bg-soft rounded-xl px-5 py-4 border border-divider flex items-center justify-center">
            <div className="text-base text-text-sub">보조</div>
          </div>
        </div>

        {/* Row 3: E2E 테스트 (accent) */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-accent-soft rounded-xl px-5 py-4 border-2 border-accent flex items-center">
            <div className="text-base font-bold text-accent">E2E 테스트</div>
          </div>
          <div className="bg-accent-soft rounded-xl px-5 py-4 border-2 border-accent flex items-center">
            <div className="text-base text-accent font-semibold">사용자 시나리오</div>
          </div>
          <div className="bg-accent-soft rounded-xl px-5 py-4 border-2 border-accent flex items-center justify-center">
            <div className="text-base text-accent font-bold">핵심</div>
          </div>
        </div>
      </div>
    </>
  );
}
