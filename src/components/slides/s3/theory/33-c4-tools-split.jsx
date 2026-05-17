// Source: lectures/S3/lecture.md lines 483-491 (두 도구 분담 정리 5-row 표)
// Type: comparison (영역 × 분석/정제 비교 표)
// 강사 결정 5: L491 분담 셀에서 "MCP 연동" 제거 → "export" 만 유지

export default function S3TheoryC4ToolsSplit() {
  const rows = [
    { axis: '사고 작업', analysis: '패턴 추출', refinement: '합의 문서 정형화' },
    { axis: '입력', analysis: 'CSV, 인터뷰 응답', refinement: '요약, 페르소나' },
    { axis: '출력', analysis: '페인포인트 + 출처', refinement: 'PRD + 기능명세 + 와이어' },
    { axis: '검증 방식', analysis: '인용 클릭 → 원문', refinement: '모호한 표현 직접 수정' },
    { axis: '다음 단계 연결', analysis: '노트북 재오픈', refinement: 'prd.md export' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          두 도구 분담 정리
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        5개 영역에서 두 도구는 다른 일을 한다
      </h2>

      <div className="rounded border border-line overflow-hidden max-w-6xl">
        <div className="grid grid-cols-[1fr_2fr_2fr] bg-bg-soft border-b border-line">
          <div className="px-5 py-3 text-base font-semibold text-text-sub">
            영역
          </div>
          <div className="px-5 py-3 text-base font-semibold text-text-sub border-l border-line">
            분석 (NotebookLM)
          </div>
          <div className="px-5 py-3 text-base font-semibold text-accent border-l border-line">
            정제 (Manyfast)
          </div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_2fr_2fr] ${i < rows.length - 1 ? 'border-b border-line' : ''}`}
          >
            <div className="px-5 py-3.5 text-base font-semibold text-text">
              {r.axis}
            </div>
            <div className="px-5 py-3.5 text-base text-text-sub border-l border-line">
              {r.analysis}
            </div>
            <div className="px-5 py-3.5 text-base text-text font-medium border-l border-line">
              {r.refinement}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
