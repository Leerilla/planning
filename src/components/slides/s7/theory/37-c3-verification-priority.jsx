// Source: lectures/S7/lecture.md lines 461-469
// Type: comparison, 3-row 2-col table inline JSX
// Profile: hierarchical, simulation, balanced

export default function Slide37({ deckMeta }) {
  return (
    <div className="w-full h-full bg-bg flex flex-col gap-6 p-7 justify-center">
      {/* Header marker */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-text-sub uppercase tracking-wider">
          자료 7 · §3-C
        </span>
        <span className="text-xs font-semibold text-accent uppercase tracking-wider">
          검증 우선주의 일관
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text leading-tight mb-1">
        sub-agent 보고서도 AI 산출물
      </h2>

      {/* Subtitle */}
      <p className="text-lg text-text-sub">
        검증 우선주의의 일관 적용 — 자동 신뢰 금지
      </p>

      {/* Table */}
      <div className="max-w-4xl rounded-md border border-divider overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-[200px_1fr] gap-0 bg-bg-soft border-b border-divider">
          <div className="px-5 py-3 font-semibold text-text">점검 항목</div>
          <div className="px-5 py-3 font-semibold text-text">방법</div>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-[200px_1fr] gap-0 border-b border-divider">
          <div className="px-5 py-3 text-text-sub text-sm">막힘 지점 1-2개 직접 확인</div>
          <div className="px-5 py-3 text-text-sub text-sm">보고서가 가리킨 파일·줄 열어보기</div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-[200px_1fr] gap-0 border-b border-divider">
          <div className="px-5 py-3 text-text-sub text-sm">수정 제안 적절성 점검</div>
          <div className="px-5 py-3 text-text-sub text-sm">본인이 PRD와 대조</div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-[200px_1fr] gap-0">
          <div className="px-5 py-3 text-text-sub text-sm">자동 신뢰 금지</div>
          <div className="px-5 py-3 text-text-sub text-sm">환각 가능성 인식</div>
        </div>
      </div>
    </div>
  );
}
