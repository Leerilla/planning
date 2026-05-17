// Source: lectures/S7/lecture.md L657-666 (2-2. 에이전트 디버깅 흐름)
// Type: process (5-step vertical flow)

export default function S7Activity_2_2_Flow() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-2 · 에이전트 흐름
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text mb-6">
        에이전트 디버깅 흐름 확인
      </h2>

      <div className="flex flex-col gap-3 max-w-3xl">
        {/* Step 1 */}
        <div className="flex items-start gap-4 p-4 border border-divider bg-bg-soft rounded-xl">
          <div className="w-10 h-10 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0">
            1
          </div>
          <div className="text-base text-text leading-relaxed pt-0.5">
            에러 분석 결과 출력
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-4 p-4 border border-divider bg-bg-soft rounded-xl">
          <div className="w-10 h-10 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0">
            2
          </div>
          <div className="text-base text-text leading-relaxed pt-0.5">
            수정 방안 제시
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-4 p-4 border border-divider bg-bg-soft rounded-xl">
          <div className="w-10 h-10 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0">
            3
          </div>
          <div className="text-base text-text leading-relaxed pt-0.5">
            코드 수정 적용
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex items-start gap-4 p-4 border border-divider bg-bg-soft rounded-xl">
          <div className="w-10 h-10 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0">
            4
          </div>
          <div className="text-base text-text leading-relaxed pt-0.5">
            테스트 재실행
          </div>
        </div>

        {/* Step 5 */}
        <div className="flex items-start gap-4 p-4 border border-divider bg-bg-soft rounded-xl">
          <div className="w-10 h-10 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0">
            5
          </div>
          <div className="text-base text-text leading-relaxed pt-0.5">
            통과 또는 추가 수정 필요
          </div>
        </div>
      </div>
    </>
  );
}
