// Source: lectures/S9/lecture.md L360-367 (#### 3️⃣ 챕터 용어 해설, terms 4-row)
// Type: TermsSlide
// Pattern: 4종 용어 해설 (살아있는 페르소나 / 갱신의 두 종류 / PRD 동시 갱신 / 30% 기준)
// Profile: hierarchical + definition visual + balanced tone
// γ' WARN 해소: "3️⃣" emoji 제거 → "3. 챕터 용어 해설" (D1/D-035)

export default function S9TheoryC3Terms() {
  return (
    <>
      <div className="flex flex-col h-full">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 3 · 용어 해설
          </span>
        </div>

        {/* Title - emoji removed, "3." 점수만 */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          3. 챕터 용어 해설
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-8 max-w-5xl">
          4개 어휘 — <span className="font-semibold">본 챕터의 핵심</span>
        </p>

        {/* Terms grid [200px_1fr] */}
        <div className="space-y-4 max-w-5xl mt-auto">
          {/* Term 1: 살아있는 페르소나 */}
          <div className="grid grid-cols-[200px_1fr] gap-4 items-start pb-4 border-b border-divider last:border-0">
            <span className="font-bold text-text">살아있는 페르소나</span>
            <span className="text-text-sub">실제 사용 데이터로 갱신된 페르소나. 계속 갱신될 수 있는 상태</span>
          </div>

          {/* Term 2: 갱신의 두 종류 */}
          <div className="grid grid-cols-[200px_1fr] gap-4 items-start pb-4 border-b border-divider last:border-0">
            <span className="font-bold text-text">갱신의 두 종류</span>
            <span className="text-text-sub">추가(몰랐던 특성)와 제거(데이터에서 안 보이는 특성)</span>
          </div>

          {/* Term 3: PRD 동시 갱신 */}
          <div className="grid grid-cols-[200px_1fr] gap-4 items-start pb-4 border-b border-divider last:border-0">
            <span className="font-bold text-text">PRD 동시 갱신</span>
            <span className="text-text-sub">페르소나 갱신이 PRD의 핵심 기능과 성공 지표 갱신을 동반</span>
          </div>

          {/* Term 4: 30% 기준 */}
          <div className="grid grid-cols-[200px_1fr] gap-4 items-start">
            <span className="font-bold text-text">30% 기준</span>
            <span className="text-text-sub">페르소나에 반영할지의 판단 기준</span>
          </div>
        </div>
      </div>
    </>
  );
}
