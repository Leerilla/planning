// Source: lectures/S9/lecture.md L604-612 (#### 1-1 발송 대상, comparison 3-card)
// Type: ComparisonSlide

export default function S9ActivityStep1Target() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 1-1 · 발송 대상
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          1-1. 발송 대상 결정
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-6xl">
          컨택 리스트에서 10명 이상 — 우선순위 3단계
        </p>

        {/* 3-card horizontal */}
        <div className="grid grid-cols-3 gap-4 max-w-6xl">
          {/* Card 1 - Priority 1 (Accent) */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl p-5">
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-3">
              우선순위 1
            </p>
            <p className="text-base text-text font-semibold">
              자료 2의 인터뷰 응답자
            </p>
            <p className="text-sm text-text-sub italic mt-2">
              → 가장 응답률 높음
            </p>
          </div>

          {/* Card 2 - Priority 2 */}
          <div className="border border-divider bg-bg-soft rounded-xl p-5">
            <p className="text-text-sub font-bold text-xs uppercase tracking-widest mb-3">
              우선순위 2
            </p>
            <p className="text-base text-text font-semibold">
              자료 2의 메일 발송 대상 중 미응답자
            </p>
          </div>

          {/* Card 3 - Priority 3 */}
          <div className="border border-divider bg-bg-soft rounded-xl p-5">
            <p className="text-text-sub font-bold text-xs uppercase tracking-widest mb-3">
              우선순위 3
            </p>
            <p className="text-base text-text font-semibold">
              자료 1의 컨택 리스트 중 신규
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
