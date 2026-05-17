// Source: lectures/S9/lecture.md L906-918 (#### 5-2 갱신 검토, activity 3-row table, D-035 "✓" → "필수" 텍스트)
// Type: ActivitySlide

export default function S9ActivityStep5UpdateReview() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 5-2 · 갱신 검토
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          5-2. 갱신 검토
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          갱신된 페르소나가 데이터 기반인지 점검
        </p>

        {/* Table grid [1fr_180px] max-w-5xl */}
        <div className="grid grid-cols-[1fr_180px] gap-0 border border-divider rounded-xl overflow-hidden max-w-5xl">
          {/* Header row */}
          <div className="bg-bg-soft border-b-2 border-divider px-5 py-3 text-sm font-bold text-text-muted uppercase tracking-wide">
            점검 질문
          </div>
          <div className="bg-bg-soft border-b-2 border-divider border-l border-divider px-5 py-3 text-sm font-bold text-text-muted uppercase tracking-wide text-center">
            확인
          </div>

          {/* Row 1 */}
          <div className="px-5 py-4 border-b border-divider text-base text-text">
            추가된 특성에 데이터 근거가 있는가
          </div>
          <div className="px-5 py-4 border-b border-divider border-l border-divider text-center text-accent font-bold">
            필수
          </div>

          {/* Row 2 */}
          <div className="px-5 py-4 border-b border-divider text-base text-text">
            제거된 특성이 정말 데이터에서 안 보였는가
          </div>
          <div className="px-5 py-4 border-b border-divider border-l border-divider text-center text-accent font-bold">
            필수
          </div>

          {/* Row 3 */}
          <div className="px-5 py-4 text-base text-text">
            페르소나 핵심 윤곽(1인 셀러)이 유지됐는가
          </div>
          <div className="px-5 py-4 border-l border-divider text-center text-warning font-semibold">
            유지 또는 큰 변화
          </div>
        </div>

        {/* Aside box */}
        <div className="mt-5 border-l-4 border-warning bg-warning-soft rounded-r-xl px-6 py-3 max-w-5xl">
          <p className="text-base text-warning font-semibold">
            큰 변화가 있다면 Pivot 신호일 가능성. Step 6에서 본격적으로 판단.
          </p>
        </div>
      </div>
    </>
  );
}
