// Source: lectures/S3/lecture.md lines 57-64
// Type: comparison (모호한 PRD vs 명확한 PRD 4-row 비교 표, inline)

export default function S3TheoryC1Effects() {
  const rows = [
    { axis: '이해관계자 해석', vague: '각자 다르게', clear: '모두 같은 그림' },
    { axis: '빌드 사이클', vague: '재작업 반복', clear: '한 번에 의도대로' },
    { axis: '검증 가능성', vague: '무엇이 성공인지 불명', clear: '측정 가능한 기준' },
    { axis: '변경 추적', vague: '무엇이 바뀌었는지 모름', clear: '변경점이 명확' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          명확한 PRD의 효과
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-8">
        모호한 PRD vs 명확한 PRD
      </h2>

      <div className="rounded border border-divider overflow-hidden max-w-5xl">
        <div className="grid grid-cols-[1fr_2fr_2fr] bg-bg-soft border-b border-divider">
          <div className="px-5 py-3 text-base font-semibold text-text-sub">
            측면
          </div>
          <div className="px-5 py-3 text-base font-semibold text-text-sub border-l border-divider">
            모호한 PRD
          </div>
          <div className="px-5 py-3 text-base font-semibold text-accent border-l border-divider">
            명확한 PRD
          </div>
        </div>
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_2fr_2fr] ${i < rows.length - 1 ? 'border-b border-divider' : ''}`}
          >
            <div className="px-5 py-4 text-base font-semibold text-text">
              {row.axis}
            </div>
            <div className="px-5 py-4 text-base text-text-sub border-l border-divider">
              {row.vague}
            </div>
            <div className="px-5 py-4 text-base text-text font-medium border-l border-divider">
              {row.clear}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
