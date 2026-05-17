// Source: lectures/S7/lecture.md L623-627 (Step 1 검증 기준)
// Type: activity (checklist 3)

export default function S7Activity_1_Validation() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-검증 · Step 1 통과 기준
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text leading-snug mb-1">
        Step 1 검증 기준
      </h2>
      <p className="text-base text-text-sub leading-relaxed mb-6 max-w-3xl">
        3개 항목 모두 통과 시 Step 2 또는 Step 3 진입
      </p>

      <div className="flex flex-col gap-3 max-w-3xl">
        {/* 항목 1 */}
        <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
          <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
          <p className="text-base text-text leading-relaxed">
            E2E 테스트 코드가 <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">e2e/</code> 폴더에 작성됐는가
          </p>
        </div>

        {/* 항목 2 */}
        <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
          <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
          <p className="text-base text-text leading-relaxed">
            테스트 실행이 시작됐는가 (통과 또는 실패 무관)
          </p>
        </div>

        {/* 항목 3 */}
        <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
          <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
          <p className="text-base text-text leading-relaxed">
            시나리오가 PRD 핵심 가설을 검증하는가
          </p>
        </div>
      </div>
    </>
  );
}
