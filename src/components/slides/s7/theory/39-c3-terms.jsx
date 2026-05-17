// Source: lectures/S7/lecture.md lines 487-495
// Type: terms, 5-row 2-col table inline JSX
// Profile: hierarchical, simulation, balanced

export default function Slide39({ deckMeta }) {
  return (
    <div className="w-full h-full bg-bg flex flex-col gap-6 p-7 justify-center">
      {/* Header marker */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-text-sub uppercase tracking-wider">
          자료 7 · §3-C
        </span>
        <span className="text-xs font-semibold text-accent uppercase tracking-wider">
          용어 해설
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text leading-tight">
        용어 해설
      </h2>

      {/* Terms table */}
      <div className="max-w-4xl overflow-hidden rounded-md border border-divider">
        {/* Header */}
        <div className="grid grid-cols-[180px_1fr] gap-0 bg-bg-soft border-b border-divider px-6 py-3">
          <div className="font-semibold text-text">용어</div>
          <div className="font-semibold text-text">정의</div>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-[180px_1fr] gap-0 border-b border-divider px-6 py-3">
          <div className="text-text-sub text-sm font-medium">시나리오 단위 검증</div>
          <div className="text-text-sub text-sm">코드 한 줄이 아닌 사용자 흐름 한 묶음으로 검증</div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-[180px_1fr] gap-0 border-b border-divider px-6 py-3">
          <div className="text-text-sub text-sm font-medium">scenario-verifier</div>
          <div className="text-text-sub text-sm">시나리오 단위 검증 전문 sub-agent</div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-[180px_1fr] gap-0 border-b border-divider px-6 py-3">
          <div className="text-text-sub text-sm font-medium">검증 루프</div>
          <div className="text-text-sub text-sm">검증 → 수정 → 재검증을 통과까지 반복</div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-[180px_1fr] gap-0 border-b border-divider px-6 py-3">
          <div className="text-text-sub text-sm font-medium">PRD 일치성</div>
          <div className="text-text-sub text-sm">만든 것이 PRD의 의도대로 동작하는가</div>
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-[180px_1fr] gap-0 px-6 py-3">
          <div className="text-text-sub text-sm font-medium">두 갈래 결과</div>
          <div className="text-text-sub text-sm">결과는 항상 통과 또는 미통과 (부분 통과 포함)</div>
        </div>
      </div>
    </div>
  );
}
