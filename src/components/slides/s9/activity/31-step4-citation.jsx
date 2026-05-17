// Source: lectures/S9/lecture.md L843-856 (#### 4-3 인용 검증, example 3-step + aside)
// Type: ExampleSlide

export default function S9ActivityStep4Citation() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 4-3 · 인용 검증
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          4-3. 인용 검증
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          자료 3에서 배운 인용 클릭 검증을 본 단계에도 적용
        </p>

        {/* 3-step */}
        <div className="flex flex-col gap-3 max-w-5xl">
          {/* Step 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold text-sm shrink-0">
              1
            </div>
            <p className="text-base text-text leading-relaxed flex-1 pt-0.5">
              인용 1-2개 클릭 → 원문 표시
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold text-sm shrink-0">
              2
            </div>
            <p className="text-base text-text leading-relaxed flex-1 pt-0.5">
              원문이 답변 내용을 담고 있는지 확인
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold text-sm shrink-0">
              3
            </div>
            <p className="text-base text-text leading-relaxed flex-1 pt-0.5">
              거짓 인용이면 별도 메모로 기록
            </p>
          </div>
        </div>

        {/* Aside */}
        <div className="mt-5 border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-5xl">
          <p className="text-sm text-text leading-relaxed">
            자료 1·3의 출처 검증 우선주의가 본 단계에도 일관 적용. AI 보고서도 검증 대상.
          </p>
        </div>
      </div>
    </>
  );
}
