// Source: lectures/S9/lecture.md L305-321 (#### docs/persona.md와 docs/prd.md 동시 갱신, comparison 2-col)
// Type: ComparisonSlide
// Pattern: 페르소나 갱신 vs PRD 갱신 2-col 카드
// Profile: hierarchical + comparison visual + balanced tone

export default function S9TheoryC3DocsUpdate() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 3 · docs 동시 갱신
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          <code className="text-accent font-semibold">docs/persona.md</code> + <code className="text-accent font-semibold">docs/prd.md</code> 동시 갱신
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-4xl">
          페르소나 갱신이 PRD 5요소 갱신을 동반
        </p>

        {/* 2-col cards */}
        <div className="grid grid-cols-2 gap-4 max-w-6xl">
          {/* Left: Update (persona) */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-5">
            <div className="text-accent font-bold text-xs uppercase tracking-widest mb-3">
              갱신
            </div>
            <div className="text-base font-semibold text-text mb-2">
              키워드 5개 → 3-5개 가변 입력
            </div>
            <div className="text-sm text-text-sub mt-3">
              <span className="font-semibold">[PRD 핵심 기능]</span>
            </div>
            <div className="text-sm text-text-sub font-medium mt-1">
              「키워드 5개 입력」 → 「키워드 3-5개 가변 입력」
            </div>
          </div>

          {/* Right: Remove (prd) */}
          <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-5 py-5">
            <div className="text-warning font-bold text-xs uppercase tracking-widest mb-3">
              제거
            </div>
            <div className="text-base font-semibold text-text mb-2">
              광고비 의존도 동기 제거
            </div>
            <div className="text-sm text-text-sub mt-3">
              <span className="font-semibold">[PRD 성공 지표]</span>
            </div>
            <div className="text-sm text-text-sub font-medium mt-1">
              광고 관련 항목 제거
            </div>
          </div>
        </div>

        {/* Aside note — request.md 양식 적용 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-2xl px-6 py-4 max-w-4xl mt-6">
          <p className="text-sm text-text leading-relaxed">
            페르소나 한 항목 변경 → PRD 연쇄 갱신
          </p>
        </div>
      </div>
    </>
  );
}
