// Source: lectures/S9/lecture.md L762-774 (#### 3-4 이벤트 funnel)
// Type: ExampleSlide — diagram format
// Phase 6 (재): request.md #24 — span 크기 키우기 + M/N, K/M 의미 상단 정리

export default function S9ActivityStep3EventFunnel() {
  return (
    <>
      <div className="flex flex-col gap-4 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 3-4 · 이벤트 funnel
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          3-4. 이벤트 추적 전환율 계산
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-4 max-w-5xl">
          이벤트 추적 3개 데이터로 전환율 계산
        </p>

        {/* 변수 정의 박스 — M/N, K/M 의미 상단 정리 */}
        <div className="grid grid-cols-3 gap-3 max-w-5xl mb-4">
          <div className="border border-divider bg-bg-soft rounded-lg px-4 py-2.5 flex items-center gap-3">
            <span className="text-accent font-bold text-base">N</span>
            <span className="text-text-sub text-sm">페이지 진입 사용자</span>
          </div>
          <div className="border border-divider bg-bg-soft rounded-lg px-4 py-2.5 flex items-center gap-3">
            <span className="text-accent font-bold text-base">M</span>
            <span className="text-text-sub text-sm">핵심 버튼 클릭</span>
          </div>
          <div className="border border-divider bg-bg-soft rounded-lg px-4 py-2.5 flex items-center gap-3">
            <span className="text-accent font-bold text-base">K</span>
            <span className="text-text-sub text-sm">핵심 기능 완료</span>
          </div>
        </div>

        {/* Funnel diagram — span 크기 키움 (w-12 h-12 + text-base 라벨) */}
        <div className="flex flex-col items-center gap-2 max-w-3xl">
          {/* Step 1 */}
          <div className="w-full flex items-center gap-4 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-12 h-12 rounded-full bg-accent text-bg flex items-center justify-center font-bold text-base shrink-0">
              1
            </span>
            <span className="text-base text-text font-semibold">
              페이지 진입 <span className="text-accent">N명</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-text-muted text-sm">
            <span>↓</span>
            <span className="font-mono">전환율 M/N</span>
          </div>

          {/* Step 2 */}
          <div className="w-full flex items-center gap-4 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-12 h-12 rounded-full bg-accent text-bg flex items-center justify-center font-bold text-base shrink-0">
              2
            </span>
            <span className="text-base text-text font-semibold">
              핵심 버튼 클릭 <span className="text-accent">M명</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-text-muted text-sm">
            <span>↓</span>
            <span className="font-mono">전환율 K/M</span>
          </div>

          {/* Step 3 */}
          <div className="w-full flex items-center gap-4 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-12 h-12 rounded-full bg-accent text-bg flex items-center justify-center font-bold text-base shrink-0">
              3
            </span>
            <span className="text-base text-text font-semibold">
              핵심 기능 완료 <span className="text-accent">K명</span>
            </span>
          </div>

          <div className="text-text-muted text-sm">↓</div>

          {/* Step 4 — 강조 */}
          <div className="w-full flex items-center gap-4 p-4 border-l-4 border-accent bg-accent-soft rounded-r-xl">
            <span className="w-12 h-12 rounded-full bg-accent text-bg flex items-center justify-center font-bold text-base shrink-0">
              4
            </span>
            <span className="text-base text-accent font-bold">
              전체 완료율 K/N
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
