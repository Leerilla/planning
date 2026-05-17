// Source: lectures/S9/lecture.md L662-667 (#### Step 1 검증, activity 4-item)
// Type: ActivitySlide

export default function S9ActivityStep1Validation() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 1 · 검증 기준
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          Step 1 검증 기준
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          Step 2 진입 전 4가지 확인
        </p>

        {/* 4-item checklist */}
        <div className="flex flex-col gap-3 max-w-5xl">
          {/* Item 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <p className="text-base text-text leading-relaxed">
              10명 이상에게 발송했는가
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <p className="text-base text-text leading-relaxed">
              발송 메일에 배포 URL과 응답 질문 3개가 포함됐는가
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <p className="text-base text-text leading-relaxed">
              발송 시각이 응답률 좋은 시간대인가
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <p className="text-base text-text leading-relaxed">
              발송 메모를 작성했는가
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
