// Source: lectures/S9/lecture.md L751-760 (#### 3-3 Sentry 에러 패턴, example 3-bullet)
// Type: ExampleSlide

export default function S9ActivityStep3SentryPattern() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 3-3 · Sentry 에러 패턴
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          3-3. Sentry 에러 패턴 확인
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          Sentry 대시보드에서 발생한 에러 목록 점검
        </p>

        {/* Memo box */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-5 max-w-5xl">
          <p className="text-accent font-bold text-xs uppercase tracking-widest mb-3">
            메모 항목
          </p>
          <div className="flex flex-col gap-3 text-base text-text">
            {/* Bullet 1 */}
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
              <span>가장 자주 발생한 에러 1-3개</span>
            </div>

            {/* Bullet 2 */}
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
              <span>각 에러의 영향 사용자 수</span>
            </div>

            {/* Bullet 3 */}
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
              <span>에러 발생 시점의 컨텍스트 (페이지, 입력값)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
