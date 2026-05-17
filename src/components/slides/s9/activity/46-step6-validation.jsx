// Source: lectures/S9/lecture.md L1035-1041 (#### Step 6 검증 기준, activity 5-item checklist)
// Type: ActivitySlide

export default function S9ActivityStep6Validation() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 6 · 검증 기준
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          Step 6 검증 기준
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          Step N 진입 전 5가지 확인
        </p>

        {/* 5-item checklist */}
        <div className="flex flex-col gap-3 max-w-5xl">
          {/* Item 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <p className="text-base text-text leading-relaxed flex-1">
              Pivot · Persevere · Kill 중 결정 1개를 내렸는가
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <p className="text-base text-text leading-relaxed flex-1">
              결정 근거가 데이터 3개 이상으로 명시됐는가
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <p className="text-base text-text leading-relaxed flex-1">
              다음 단계(1주 안)와 1개월 안 일이 정해졌는가
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <p className="text-base text-text leading-relaxed flex-1">
              학습 회고 3개 질문에 답했는가
            </p>
          </div>

          {/* Item 5 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 rounded border-2 border-divider shrink-0 mt-0.5 bg-bg" />
            <p className="text-base text-text leading-relaxed flex-1">
              /cost 누적을 메모했는가
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
