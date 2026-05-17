// Source: lectures/S7/lecture.md L816-825 (3-5. 통과 조건)
// Type: example (inline JSX — AND 3-section)

export default function S7Activity_3_4_Pass() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-4 · 통과 조건
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text mb-2">
        3-4. 통과 조건 (AND 조건 3)
      </h2>

      <p className="text-base text-text-sub mb-4">
        세 조건 모두 충족 시 Step 3 완료
      </p>

      <div className="flex flex-col items-center gap-3 max-w-4xl">
        {/* Condition 1 */}
        <div className="w-full border-l-4 border-success bg-success-soft rounded-r-xl px-5 py-3">
          <div className="text-success font-bold text-sm mb-1">조건 1</div>
          <div className="text-base text-text">
            보고서 시나리오 통과 여부: "통과"
          </div>
        </div>

        {/* AND */}
        <div className="text-text-muted text-xs font-bold uppercase tracking-wider">
          AND
        </div>

        {/* Condition 2 */}
        <div className="w-full border-l-4 border-success bg-success-soft rounded-r-xl px-5 py-3">
          <div className="text-success font-bold text-sm mb-1">조건 2</div>
          <div className="text-base text-text">
            작업자가 막힘 지점 0건 직접 확인
          </div>
        </div>

        {/* AND */}
        <div className="text-text-muted text-xs font-bold uppercase tracking-wider">
          AND
        </div>

        {/* Condition 3 */}
        <div className="w-full border-l-4 border-success bg-success-soft rounded-r-xl px-5 py-3">
          <div className="text-success font-bold text-sm mb-1">조건 3</div>
          <div className="text-base text-text">
            E2E 테스트도 통과 (Step 1-2 결과와 일치)
          </div>
        </div>
      </div>
    </>
  );
}
