// Source: lectures/S8/captures/lecture.md (#### 세 도구가 함께 만드는 의사결정 흐름)
// Type: process
// Pattern: Horizontal flow diagram
// D-050: lecture.md 원문 보존 (의사결정 흐름)
// Phase 6 (2026-05-17): request.md #63 — 본문 콘텐츠 가로 형식

export default function S8TheoryC5ThreeToolsFlow() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 5 · 의사결정 흐름
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        세 도구가 함께 만드는 의사결정 흐름
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-6 max-w-4xl">
        이벤트 추적 + Clarity + Sentry → 다음 사이클 의사결정
      </p>

      {/* Flow Diagram — Horizontal grid 4 cols × 2 rows */}
      <div className="grid grid-cols-4 gap-2 max-w-6xl items-stretch mb-4">
        {/* Step 1 */}
        <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
          <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">1</span>
          <div className="text-sm text-text leading-snug flex-1">사용자 진입</div>
        </div>

        {/* Step 2 — 이벤트 추적 */}
        <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
          <span className="text-xs font-bold text-accent uppercase tracking-wider">이벤트 추적</span>
          <div className="text-sm text-text leading-snug flex-1">페이지 진입 기록</div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
          <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">2</span>
          <div className="text-sm text-text leading-snug flex-1">사용자 사용</div>
        </div>

        {/* Step 4 — Clarity */}
        <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
          <span className="text-xs font-bold text-accent uppercase tracking-wider">Clarity</span>
          <div className="text-sm text-text leading-snug flex-1">행동 영상 기록</div>
        </div>

        {/* Step 5 — Sentry */}
        <div className="flex flex-col gap-2 p-3 border border-divider border-l-4 border-l-warning bg-warning-soft rounded-xl">
          <span className="text-xs font-bold text-warning uppercase tracking-wider">Sentry</span>
          <div className="text-sm text-text leading-snug flex-1">에러 발생 시 자동 수집</div>
        </div>

        {/* Step 6 */}
        <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
          <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">3</span>
          <div className="text-sm text-text leading-snug flex-1">사용자 완료 or 이탈</div>
        </div>

        {/* Step 7 — 이벤트 추적 */}
        <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
          <span className="text-xs font-bold text-accent uppercase tracking-wider">이벤트 추적</span>
          <div className="text-sm text-text leading-snug flex-1">완료 여부 기록</div>
        </div>

        {/* Step 8 — 종합 */}
        <div className="flex flex-col gap-2 p-3 border border-divider border-l-4 border-l-success bg-success-soft rounded-xl">
          <span className="text-xs font-bold text-success uppercase tracking-wider">종합</span>
          <div className="text-sm text-text leading-snug flex-1">
            다음 사이클 의사결정
          </div>
        </div>
      </div>

      {/* Decision detail aside */}
      <aside className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-6xl">
        <p className="text-sm text-text leading-relaxed">
          <span className="font-semibold">Sentry 에러 패턴</span> → 코드 버그 수정 ·
          <span className="font-semibold"> Clarity 막힘 지점</span> → UX 개선 ·
          <span className="font-semibold"> 이벤트 추적 가설 미달</span> → PRD 갱신
        </p>
      </aside>
    </>
  );
}
