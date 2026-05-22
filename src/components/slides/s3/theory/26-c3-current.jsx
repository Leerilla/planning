// Source: lectures/S3/lecture.md lines 366-379 (현재: 두 도구의 역할 분담 4-row 표)
// Type: comparison (사고 작업 × 분석/정제 비교 표)

export default function S3TheoryC3Current() {
  const rows = [
    { axis: '본질', analysis: '흩어진 데이터에서 패턴 추출', refinement: '패턴을 합의 문서로 정형화' },
    { axis: '입력', analysis: '1차 자료', refinement: '페인포인트 + 페르소나' },
    { axis: '출력', analysis: '페인포인트 5개 + 출처', refinement: '5요소 갖춘 PRD' },
    { axis: '필요 능력', analysis: '자료 안에서 답하기, 출처 인용', refinement: '양식 일관성, 누락 검출' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          현재 — 두 도구의 역할 분담
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        분석과 정제는 사고 작업의 종류가 다르다
      </h2>

      <p className="text-base text-text-sub mb-6 max-w-3xl">
        한 도구로 두 작업을 모두 처리하면 둘 다 흐려진다.
      </p>

      <div className="rounded border border-divider overflow-hidden max-w-6xl">
        <div className="grid grid-cols-[1fr_2fr_2fr] bg-bg-soft border-b border-divider">
          <div className="px-5 py-3 text-base font-semibold text-text-sub">
            사고 작업
          </div>
          <div className="px-5 py-3 text-base font-semibold text-text-sub border-l border-divider">
            분석 (NotebookLM)
          </div>
          <div className="px-5 py-3 text-base font-semibold text-accent border-l border-divider">
            정제 (Manyfast)
          </div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_2fr_2fr] ${i < rows.length - 1 ? 'border-b border-divider' : ''}`}
          >
            <div className="px-5 py-4 text-base font-semibold text-text">
              {r.axis}
            </div>
            <div className="px-5 py-4 text-base text-text-sub border-l border-divider">
              {r.analysis}
            </div>
            <div className="px-5 py-4 text-base text-text font-medium border-l border-divider">
              {r.refinement}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
