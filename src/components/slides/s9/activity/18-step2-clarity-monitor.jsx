// Source: lectures/S9/lecture.md L706-715 (#### 2-3 Clarity 대시보드 모니터링, example bullet)
// Type: ExampleSlide

export default function S9ActivityStep2ClarityMonitor() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 2-3 · Clarity 모니터링
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          2-3. Clarity 대시보드 모니터링
        </h2>

        {/* Subtitle with inline code - D-054 */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          <code className="text-accent font-semibold">clarity.microsoft.com</code> 접속 후 확인할 항목
        </p>

        {/* Monitoring card */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-5 max-w-5xl">
          <p className="text-accent font-bold text-xs uppercase tracking-widest mb-3">
            모니터링 항목
          </p>
          <div className="flex flex-col gap-3">
            {/* Item 1 */}
            <div className="flex items-start gap-3 text-base text-text">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
              <p>본 단계 동안 들어온 세션 수</p>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-3 text-base text-text">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
              <p>본인 외 다른 세션의 존재</p>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-3 text-base text-text">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
              <p>셋업 직후라 세션이 적을 수 있음 (정상)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
