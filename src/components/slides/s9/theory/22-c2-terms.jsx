// Source: lectures/S9/lecture.md L238-245 (자동 매핑, terms 4-row)
// Type: TermsSlide
// Pattern: 4종 데이터 용어 해설 (신호와 잡음 / 30% 기준 / 네 종류 데이터 / NotebookLM 재오픈)
// Profile: hierarchical + definition visual + balanced tone
// γ' WARN 해소: "2️⃣" emoji 제거 → "2. 챕터 용어 해설" (D1/D-035)

export default function S9TheoryC2Terms() {
  return (
    <>
      <div className="flex flex-col h-full">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 2 · 용어 해설
          </span>
        </div>

        {/* Title - emoji removed, "2." 점수만 */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          2. 챕터 용어 해설
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-8 max-w-5xl">
          4개 어휘 — <span className="font-semibold">본 챕터의 핵심</span>
        </p>

        {/* Terms grid [200px_1fr] */}
        <div className="space-y-4 max-w-5xl mt-auto">
          {/* Term 1: 신호와 잡음 */}
          <div className="grid grid-cols-[200px_1fr] gap-4 items-start pb-4 border-b border-divider last:border-0">
            <span className="font-bold text-text">신호와 잡음</span>
            <span className="text-text-sub">패턴은 신호, 단발 행동은 잡음</span>
          </div>

          {/* Term 2: 30% 기준 */}
          <div className="grid grid-cols-[200px_1fr] gap-4 items-start pb-4 border-b border-divider last:border-0">
            <span className="font-bold text-text">30% 기준</span>
            <span className="text-text-sub">사용자의 30% 이상에서 반복되면 신호로 간주</span>
          </div>

          {/* Term 3: 네 종류 데이터 */}
          <div className="grid grid-cols-[200px_1fr] gap-4 items-start pb-4 border-b border-divider last:border-0">
            <span className="font-bold text-text">네 종류 데이터</span>
            <span className="text-text-sub">응답·Clarity·Sentry·이벤트 추적</span>
          </div>

          {/* Term 4: NotebookLM 재오픈 */}
          <div className="grid grid-cols-[200px_1fr] gap-4 items-start">
            <span className="font-bold text-text">NotebookLM 재오픈</span>
            <span className="text-text-sub">자료 3 노트북에 본 단계 데이터를 추가해 교차 분석</span>
          </div>
        </div>
      </div>
    </>
  );
}
