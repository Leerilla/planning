// Source: lectures/S1/lecture.md lines 267-277
// Type: comparison (5행 표 + summary)
// D-040: 표 형식 → inline grid (Comparison 패턴 부적합)
// D-037: 모든 시각 prop 활용 (eyebrow + summary)

export default function S1TheoryC25AreasSummary() {
  const rows = [
    { area: '1차 시장 리서치', past: '며칠', present: '짧은 시간 단위', tool: 'ChatGPT · Gemini' },
    { area: 'PRD 초안 작성', past: '한 주', present: '짧은 시간 단위', tool: 'Manyfast' },
    { area: '검증 사이클', past: '보름 이상', present: '하루', tool: '메타 프롬프팅 · NotebookLM' },
    { area: '데이터 스크래핑', past: '며칠', present: '짧은 시간 단위', tool: 'Playwright MCP' },
    { area: '페인포인트 분석', past: '며칠', present: '1-2시간', tool: 'NotebookLM' },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          5개 영역의 가속 정리
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        AI 가속 한눈에 보기
      </h2>

      {/* Table */}
      <div className="max-w-6xl">
        {/* Header */}
        <div className="grid grid-cols-[1.5fr_1fr_1fr_2fr] gap-4 px-4 py-3 border-b-2 border-divider">
          <span className="text-text-muted text-xs font-semibold tracking-wider uppercase">영역</span>
          <span className="text-text-muted text-xs font-semibold tracking-wider uppercase">과거</span>
          <span className="text-accent text-xs font-semibold tracking-wider uppercase">현재</span>
          <span className="text-text-muted text-xs font-semibold tracking-wider uppercase">핵심 도구</span>
        </div>

        {/* Rows */}
        {rows.map((r, i) => (
          <div
            key={i}
            className="grid grid-cols-[1.5fr_1fr_1fr_2fr] gap-4 px-4 py-3 border-b border-divider items-center"
          >
            <span className="text-base font-bold text-text">{r.area}</span>
            <span className="text-base text-text-sub">{r.past}</span>
            <span className="text-base font-semibold text-accent">{r.present}</span>
            <span className="text-sm font-medium text-text">{r.tool}</span>
          </div>
        ))}
      </div>

      {/* Summary message */}
      <div className="border-l-4 border-accent bg-success-soft pl-5 py-4 mt-6 max-w-5xl">
        <p className="text-lg font-bold text-text leading-snug">
          작업자는 더 많은 가설을 더 빨리 시험할 수 있게 됐다.{' '}
          <span className="text-accent">그러나 가속은 가설의 품질을 높이지 않는다.</span>
        </p>
      </div>
    </>
  );
}
