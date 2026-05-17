// Source: lectures/S9/lecture.md L189-203 (자동 매핑, process 5-step vertical funnel)
// Type: ProcessSlide
// Pattern: 이벤트 추적 특징 5-step vertical funnel
// Profile: hierarchical + process visual + balanced tone

export default function S9TheoryC2EventTrait() {
  return (
    <>
      <div className="flex flex-col h-full">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 2 · 이벤트 추적 특징
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          이벤트 추적의 특징
        </h2>

        {/* Subtitle main */}
        <p className="text-base text-text-sub mb-8 max-w-4xl">
          이벤트 추적(수동·가설 데이터)은 PRD 가설의 <span className="font-semibold text-text">통과율을 숫자로 측정</span>한다
        </p>

        {/* 5-step vertical funnel */}
        <div className="flex flex-col gap-2 max-w-4xl mt-auto">
          {/* Step 1 */}
          <div className="flex items-center gap-3 px-4 py-3 bg-bg-soft border border-divider rounded-xl">
            <div className="w-6 h-6 rounded-full bg-accent text-bg flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold">1</span>
            </div>
            <span className="text-sm text-text font-semibold">페이지 진입 N명</span>
          </div>

          {/* Arrow + conversion rate */}
          <div className="text-text-muted text-sm text-center -my-1">
            ↓ 전환율 M/N
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-3 px-4 py-3 bg-bg-soft border border-divider rounded-xl">
            <div className="w-6 h-6 rounded-full bg-accent text-bg flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold">2</span>
            </div>
            <span className="text-sm text-text font-semibold">핵심 버튼 클릭 M명</span>
          </div>

          {/* Arrow + conversion rate */}
          <div className="text-text-muted text-sm text-center -my-1">
            ↓ 전환율 K/M
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-3 px-4 py-3 bg-bg-soft border border-divider rounded-xl">
            <div className="w-6 h-6 rounded-full bg-accent text-bg flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold">3</span>
            </div>
            <span className="text-sm text-text font-semibold">핵심 기능 완료 K명</span>
          </div>

          {/* Arrow + completion rate */}
          <div className="text-text-muted text-sm text-center -my-1">
            ↓ 전체 완료율 K/N
          </div>

          {/* Step 4 - Success */}
          <div className="flex items-center gap-3 px-4 py-3 bg-success-soft border border-success border-l-4 border-l-success rounded-xl">
            <div className="w-6 h-6 rounded-full bg-success text-bg flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold">4</span>
            </div>
            <span className="text-sm text-text font-semibold">PRD 가설 통과 여부 결정</span>
          </div>
        </div>
      </div>
    </>
  );
}
