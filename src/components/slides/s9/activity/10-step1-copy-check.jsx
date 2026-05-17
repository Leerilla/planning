// Source: lectures/S9/lecture.md L614-624 (#### 1-2 카피 점검, activity 4-item checklist)
// Type: ActivitySlide

export default function S9ActivityStep1CopyCheck() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 1-2 · 카피 점검
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          1-2. 재피드백 메일 카피 최종 점검
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          자료 8 과제 산출물 — 4가지 항목 확인
        </p>

        {/* 4-item checklist */}
        <div className="flex flex-col gap-3 max-w-5xl">
          {/* Item 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <p className="text-base text-text leading-relaxed">
              배포 URL 정확 (Vercel URL)
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <p className="text-base text-text leading-relaxed">
              사용 시간 안내 (5-10분) 명확
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <p className="text-base text-text leading-relaxed">
              응답 질문 3개 포함
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <p className="text-base text-text leading-relaxed">
              본인 톤으로 다듬어짐
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
