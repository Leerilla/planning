// Source: lectures/S7/lecture.md L616-621 (1-3. 테스트 실행 결과 확인)
// Type: comparison (2-card: 통과 vs 실패)

export default function S7Activity_1_3_Branch() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-3 · 결과 분기
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text leading-snug mb-1">
        1-3. 테스트 실행 결과 확인
      </h2>

      <div className="grid grid-cols-2 gap-4 max-w-4xl mt-6">
        {/* 좌: 통과 */}
        <div className="border-l-4 border-success bg-success-soft rounded-r-xl px-6 py-5">
          <div className="text-success font-bold text-base mb-3">
            통과
          </div>
          <p className="text-base text-text leading-relaxed">
            → Step 3 (시나리오 검증)으로
          </p>
        </div>

        {/* 우: 실패 */}
        <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-6 py-5">
          <div className="text-warning font-bold text-base mb-3">
            실패
          </div>
          <p className="text-base text-text leading-relaxed">
            → Step 2 (자율 디버깅)으로
          </p>
        </div>
      </div>

      <div className="mt-4 text-xs text-text-muted max-w-4xl">
        분기 결과에 따라 다음 Step 자동 선택.
      </div>
    </>
  );
}
