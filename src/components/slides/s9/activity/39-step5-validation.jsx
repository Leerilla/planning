// Source: lectures/S9/lecture.md L952-957 (#### Step 5 검증 기준, activity 4-item checklist, D-035 빈 box only)
// Type: ActivitySlide

export default function S9ActivityStep5Validation() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 5 · 검증 기준
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          Step 5 검증 기준
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          Step 6 진입 전 4가지 확인
        </p>

        {/* 4-item checklist */}
        <div className="flex flex-col gap-3 max-w-5xl">
          {/* Checkbox item 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <span className="text-base text-text leading-relaxed">
              docs/persona.md가 데이터 기반으로 갱신됐는가
            </span>
          </div>

          {/* Checkbox item 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <span className="text-base text-text leading-relaxed">
              docs/prd.md의 5요소가 검토되고 갱신됐는가
            </span>
          </div>

          {/* Checkbox item 3 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <span className="text-base text-text leading-relaxed">
              자동 커밋이 일어났는가
            </span>
          </div>

          {/* Checkbox item 4 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <span className="text-base text-text leading-relaxed">
              커밋 메시지가 갱신의 근거를 명시했는가
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
