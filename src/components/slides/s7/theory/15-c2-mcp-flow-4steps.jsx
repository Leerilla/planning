// Source: lectures/S7/lecture.md lines 147-154 (#### Playwright MCP 사용 흐름 4단계)
// Type: process (4-step table)
// Phase 6 fix (2026-05-16): 타이틀-표 좌측 정렬 통일 + max-w-5xl 일관

export default function S7TheoryC2MCPFlow4Steps() {
  return (
    <>
      {/* Header marker + label */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          MCP 사용 흐름
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        Playwright MCP 사용 흐름 4단계
      </h2>

      {/* Process table — 좌측 정렬, max-w-5xl */}
      <div className="max-w-5xl w-full overflow-hidden rounded-xl border border-divider">
        {/* Table header — 가시 구분 */}
        <div className="grid grid-cols-[100px_1fr] bg-bg-soft border-b-2 border-divider">
          <div className="px-6 py-3 text-sm font-bold text-text text-center uppercase tracking-wide">
            단계
          </div>
          <div className="px-6 py-3 text-sm font-bold text-text uppercase tracking-wide">
            작업
          </div>
        </div>

        {/* Table rows */}
        {[
          { step: '1', task: 'PRD에서 핵심 시나리오 1개 선택' },
          { step: '2', task: '자연어로 시나리오 설명 → 테스트 코드 생성' },
          { step: '3', task: '테스트 실행과 통과 여부 확인' },
          { step: '4', task: '실패 시 자율 디버깅 3원칙 적용' },
        ].map((row, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[100px_1fr] border-b border-divider last:border-b-0"
          >
            <div className="px-6 py-4 text-base text-accent text-center font-bold">
              {row.step}
            </div>
            <div className="px-6 py-4 text-base text-text leading-relaxed">
              {row.task}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
