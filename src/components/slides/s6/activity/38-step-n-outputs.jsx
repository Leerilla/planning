// Source: lectures/S6/lecture.md lines 1153-1160 (#### N-1. 산출물 정리)
// Type: comparison (2-column table, 7 rows)
// Profile: hierarchical / comparison / medium-high / balanced
// Emphasis: default (정보 그리드)

export default function S6ActivityStepNOutputs() {
  const rows = [
    { artifact: '동작하는 화면 2개', usage: 'E2E 테스트 대상' },
    { artifact: 'prd-reviewer', usage: '다음 단계 검증 도구' },
    { artifact: 'git-committer', usage: '다음 단계 커밋 도구' },
    { artifact: 'PostToolUse + Stop hook', usage: '자동화 인프라' },
    { artifact: '자동 검증 보고서 누적', usage: '패턴 분석 가능' },
    { artifact: '자동 커밋 히스토리 9+', usage: '진행 추적' },
    { artifact: '병합된 PR 9개', usage: '작업 완료 증거' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 N-1 · 산출물 정리
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        N-1. 산출물 정리
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-6 max-w-4xl">
        7개 산출물의 다음 단계 활용처
      </p>

      <div className="max-w-4xl overflow-hidden rounded-md border border-divider">
        <div className="grid grid-cols-2 bg-bg-soft px-6 py-3 border-b border-divider">
          <span className="text-xs font-semibold uppercase tracking-wider text-text-sub">산출물</span>
          <span className="text-xs font-semibold uppercase tracking-wider text-text-sub">다음 단계 활용</span>
        </div>
        {rows.map((row, idx) => (
          <div
            key={row.artifact}
            className={`grid grid-cols-2 px-6 py-4 items-start gap-4 ${
              idx === rows.length - 1 ? '' : 'border-b border-divider'
            }`}
          >
            <span className="text-sm font-medium text-text">{row.artifact}</span>
            <span className="text-sm font-medium text-text-sub">{row.usage}</span>
          </div>
        ))}
      </div>
    </>
  );
}
