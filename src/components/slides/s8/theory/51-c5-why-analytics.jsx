// Source: lectures/S8/captures/lecture.md (#### 5️⃣ 분석 도구 — 왜 필요한가)
// Type: concept, emphasis: default
// Profile: logic=hierarchical / visual=comparison / tone=strong

export default function S8TheoryC5WhyAnalytics() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 5 · 필요성
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        분석 도구가 왜 필요한가
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-6 max-w-4xl">
        검증된 MVP 사용자 노출 단계에서 작업자가 모를 일이 일어남
      </p>

      {/* Content: User Behavior Questions */}
      <pre className="bg-bg-soft border border-divider rounded-xl p-5 text-xs whitespace-pre-line w-full text-text leading-relaxed">
사용자 행동:
- 어디서 막혔는가? (모름)
- 어느 버튼이 안 보였는가? (모름)
- 어떤 에러를 만났는가? (사용자가 보고 안 함)
- PRD 가설이 진짜 통과하는가? (체감만)
      </pre>

      {/* Warning Aside */}
      <aside className="mt-4 border-l-4 border-warning bg-warning-soft rounded-r-xl px-6 py-3 max-w-4xl">
        <p className="text-sm text-text leading-relaxed">
          사용자는 피드백을 안 줌. 안 좋은 경험이면 그냥 떠나고 다시 안 옴. 작업자가 데이터로 자동 수집하지 않으면 그 사용자의 경험은 영원히 모름.
        </p>
      </aside>
    </>
  );
}
