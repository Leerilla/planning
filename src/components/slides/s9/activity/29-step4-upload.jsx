// Source: lectures/S9/lecture.md L817-826 (#### 4-1 추가 자료 업로드, example 3-card)
// Type: ExampleSlide

export default function S9ActivityStep4Upload() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 4-1 · 자료 업로드
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          4-1. 추가 자료 업로드
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          자료 3의 NotebookLM 노트북에 3종 자료 추가
        </p>

        {/* 3-card */}
        <div className="flex flex-col gap-3 max-w-5xl">
          {/* Card 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold text-sm shrink-0">
              1
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold text-text">응답 정리 메모</p>
              <p className="text-sm text-text-sub mt-1">Step 2의 응답을 한 파일로 통합</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold text-sm shrink-0">
              2
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold text-text">분석 메모</p>
              <p className="text-sm text-text-sub mt-1">Step 3 결과 (Clarity·Sentry·이벤트 추적)</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold text-sm shrink-0">
              3
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold text-text">새 커뮤니티 스크래핑 CSV</p>
              <p className="text-sm text-text-sub mt-1">Step 2-1에서 수집한 커뮤니티 피드 데이터</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
