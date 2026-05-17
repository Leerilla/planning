// Source: lectures/S5/lecture.md lines 863-889 (4-6 본인 리뷰와 병합 + PR 크기 원칙)
// Type: activity (inline 2-area - 6 step + 3축 원칙)

export default function S5Activity_4_6_ReviewMerge() {
  const steps = [
    'PR 페이지 진입',
    '"Files changed" 탭 클릭',
    '변경 사항 검토 (CLAUDE.md/rules/ 준수 + 다른 파일 영향)',
    '"Review changes" → "Approve"',
    '"Merge pull request" 클릭',
    '브랜치 삭제',
  ];
  const sizes = [
    { axis: '수정 파일 수', good: '1-2개', bad: '5개 이상' },
    { axis: '변경 라인 수', good: '100줄 이내', bad: '500줄 이상' },
    { axis: '한 PR의 기능', good: '1개 Task', bad: '여러 Task 묶기' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-6 · 산출물: 첫 PR 병합
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        본인 리뷰와 병합 + PR 크기 원칙
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        GitHub 웹 흐름 6 step + PR 크기 3축 점검.
      </p>

      <div className="grid grid-cols-[1.2fr_1fr] gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            본인 리뷰와 병합 (6 step)
          </div>
          <div className="space-y-2">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded border border-accent text-accent text-xs font-bold tabular-nums shrink-0">
                  {i + 1}
                </span>
                <p className="text-sm text-text leading-snug flex-1">{s}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            PR 크기 원칙
          </div>
          <div className="rounded border border-line overflow-hidden">
            <div className="grid grid-cols-[1fr_0.8fr_0.8fr] bg-bg-soft border-b border-line">
              <div className="px-3 py-2 text-[10px] uppercase tracking-wider text-text-sub">축</div>
              <div className="px-3 py-2 text-[10px] uppercase tracking-wider text-accent border-l border-line">권장</div>
              <div className="px-3 py-2 text-[10px] uppercase tracking-wider text-text-sub border-l border-line">피함</div>
            </div>
            {sizes.map((s, i) => (
              <div key={i} className={`grid grid-cols-[1fr_0.8fr_0.8fr] ${i < sizes.length - 1 ? 'border-b border-line' : ''}`}>
                <div className="px-3 py-2 text-xs font-semibold text-text">{s.axis}</div>
                <div className="px-3 py-2 text-xs text-accent border-l border-line">{s.good}</div>
                <div className="px-3 py-2 text-xs text-text-sub border-l border-line">{s.bad}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
