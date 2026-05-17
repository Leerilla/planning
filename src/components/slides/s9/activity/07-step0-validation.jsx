// Source: lectures/S9/lecture.md L593-598 (#### Step 0 검증 기준, activity 4-item checklist)
// Type: ActivitySlide

export default function S9ActivityStep0Validation() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 0 · 검증 기준
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          Step 0 검증 기준
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          학습 입구 — 4가지 확인 후 Step 1 진입
        </p>

        {/* 4-item checklist */}
        <div className="flex flex-col gap-3 max-w-5xl">
          {/* Checkbox item 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <span className="text-base text-text leading-relaxed">
              자료 8 산출물 7개가 모두 손에 있는가
            </span>
          </div>

          {/* Checkbox item 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <span className="text-base text-text leading-relaxed">
              Clarity 대시보드에 본인 세션이 들어와 있는가
            </span>
          </div>

          {/* Checkbox item 3 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <span className="text-base text-text leading-relaxed">
              NotebookLM 노트북에 접근 가능한가
            </span>
          </div>

          {/* Checkbox item 4 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <span className="text-base text-text leading-relaxed">
              /cost 베이스라인을 메모했는가
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
