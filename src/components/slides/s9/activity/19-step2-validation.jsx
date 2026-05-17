// Source: lectures/S9/lecture.md L717-722 (#### Step 2 검증 기준, activity 3-item)
// Type: ActivitySlide

export default function S9ActivityStep2Validation() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 2 · 검증 기준
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          Step 2 검증 기준
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          Step 3 진입 전 3가지 확인
        </p>

        {/* 3-item checklist */}
        <div className="flex flex-col gap-3 max-w-5xl">
          {/* Item 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <p className="text-base text-text leading-relaxed">
              새 커뮤니티 1-2곳의 스크래핑 데이터가 수집됐는가 (CSV)
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <p className="text-base text-text leading-relaxed">
              Clarity 대시보드에 본인 세션 외 다른 세션이 있는가
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <p className="text-base text-text leading-relaxed">
              응답이 도착했다면 짧은 감사 답장을 보냈는가
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
