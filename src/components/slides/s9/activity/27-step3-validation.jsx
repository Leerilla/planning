// Source: lectures/S9/lecture.md L805-811 (#### Step 3 검증 기준, activity 5-item checklist)
// Type: ActivitySlide

export default function S9ActivityStep3Validation() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 3 · 검증 기준
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          Step 3 검증 기준
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          Step 4 진입 전 5가지 확인
        </p>

        {/* 5-item checklist */}
        <div className="flex flex-col gap-3 max-w-5xl">
          {/* Item 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <p className="text-base text-text leading-relaxed">
              Clarity 세션 3-5건 이상을 영상으로 봤는가
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <p className="text-base text-text leading-relaxed">
              Sentry 에러 패턴 1-3개를 메모했는가
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <p className="text-base text-text leading-relaxed">
              이벤트 추적 전환율을 계산했는가
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <p className="text-base text-text leading-relaxed">
              분석 메모가 작성됐는가
            </p>
          </div>

          {/* Item 5 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <p className="text-base text-text leading-relaxed">
              신호와 잡음이 구분됐는가
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
