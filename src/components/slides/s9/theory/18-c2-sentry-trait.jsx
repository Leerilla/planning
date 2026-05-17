// Source: lectures/S9/lecture.md L174-187 (자동 매핑, process 3-step horizontal)
// Type: ProcessSlide
// Pattern: Sentry 특징 3-step horizontal flow
// Profile: hierarchical + process visual + balanced tone

export default function S9TheoryC2SentryTrait() {
  return (
    <>
      <div className="flex flex-col h-full">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 2 · Sentry 특징
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          Sentry의 특징
        </h2>

        {/* Subtitle main */}
        <p className="text-base text-text-sub mb-3 max-w-5xl">
          Sentry(수동·에러 데이터)는 <span className="font-semibold text-text">사용자가 알려주지 않은 에러</span>를 자동 수집
        </p>

        {/* Subtitle secondary */}
        <p className="text-sm font-semibold text-text-sub mb-6 max-w-5xl">
          사용자 신뢰 침식의 안전망
        </p>

        {/* 3-step horizontal flow */}
        <div className="grid grid-cols-3 gap-2 max-w-6xl items-stretch mt-auto">
          {/* Step 1 */}
          <div className="border border-divider bg-bg-soft rounded-xl px-4 py-5 flex flex-col gap-3">
            <div className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold">1</span>
            </div>
            <div className="text-sm text-text leading-snug">
              사용자는 에러 만나도 안 알려줌
            </div>
          </div>

          {/* Step 2 */}
          <div className="border border-divider bg-warning-soft rounded-xl px-4 py-5 flex flex-col gap-3">
            <div className="w-7 h-7 rounded-full bg-warning text-bg flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold">2</span>
            </div>
            <div className="text-sm text-text leading-snug">
              그냥 떠남
            </div>
          </div>

          {/* Step 3 */}
          <div className="border border-divider border-l-4 border-l-success bg-success-soft rounded-xl px-4 py-5 flex flex-col gap-3">
            <div className="w-7 h-7 rounded-full bg-success text-bg flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold">3</span>
            </div>
            <div className="text-sm text-text leading-snug">
              Sentry가 자동 수집 → 작업자에게 알림
            </div>
          </div>
        </div>

        {/* Aside note */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-2xl px-6 py-4 max-w-4xl mt-6">
          <p className="text-sm text-text leading-relaxed">
            5%의 사용자가 timeout을 만났다는 사실을 Sentry가 알려주지 않으면 영원히 모른다.
          </p>
        </div>
      </div>
    </>
  );
}
