// Source: lectures/S9/lecture.md L67-77 (자동 매핑, example with 2-col anti/good cards)
// Type: ExampleSlide
// γ' FAIL 수정: emoji 제거 → 텍스트 라벨 + 색상 대조

export default function S9TheoryC1ZeroResponse() {
  return (
    <>
      <div className="flex flex-col h-full">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 1 · 응답 0건 진입
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          응답 0건이어도 진입 가능
        </h2>

        {/* Blockquote */}
        <blockquote className="text-lg font-semibold text-text mb-6 max-w-3xl border-l-4 border-accent pl-6 py-2">
          응답이 0건이어도 분석 도구의 데이터가 다음 사이클 결정의 입력이 된다.
        </blockquote>

        {/* 2-col cards */}
        <div className="grid grid-cols-2 gap-4 max-w-6xl mt-auto">
          {/* Left: Anti-pattern */}
          <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-5 py-5">
            <div className="text-warning font-bold text-xs uppercase tracking-widest mb-3">
              안티패턴
            </div>
            <div className="text-base font-semibold text-text mb-4">
              "응답이 0건이라 다음 단계로 못 갑니다"
            </div>
            <div className="text-sm text-text-sub font-medium">
              → 한 축 의존
            </div>
          </div>

          {/* Right: Good pattern */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-5">
            <div className="text-accent font-bold text-xs uppercase tracking-widest mb-3">
              양호
            </div>
            <div className="text-base font-semibold text-text mb-4">
              "능동 응답 0건이어도 Clarity 세션으로 분석 진입"
            </div>
            <div className="text-sm text-text-sub font-medium">
              → 두 축 안전망의 재활용
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
