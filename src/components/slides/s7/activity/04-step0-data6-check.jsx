// Source: lectures/S7/lecture.md L537-549 (0-2 자료 6 산출물 점검)
// Type: comparison (5-row 2-col 표 + aside)

export default function S7Activity_0_2_Data6Check() {
  const items = [
    { num: '1', output: '화면 2개 동작', check: '카피 입력 + 카피 결과' },
    { num: '2', output: '.claude/agents/prd-reviewer.md', check: '있는가' },
    { num: '3', output: '.claude/agents/git-committer.md', check: '있는가' },
    { num: '4', output: 'settings.json의 hooks (PostToolUse + Stop)', check: '등록됐는가' },
    { num: '5', output: 'Issue #2-#10 PR 병합', check: '됐는가' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 0-2 · 점검
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        0-2. 자료 6 산출물 점검
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        비어 있는 항목 있으면 자료 6 해당 Step으로 돌아가 보강
      </p>

      <div className="max-w-4xl overflow-hidden rounded-xl border border-divider">
        <div className="grid grid-cols-[60px_1fr_1fr] bg-bg-soft px-5 py-3 border-b border-divider">
          <div className="text-text-muted font-semibold text-xs uppercase tracking-wider">#</div>
          <div className="text-text-muted font-semibold text-xs uppercase tracking-wider">산출물</div>
          <div className="text-text-muted font-semibold text-xs uppercase tracking-wider">점검</div>
        </div>

        {items.map((item, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-[60px_1fr_1fr] px-5 py-3 ${
              idx < items.length - 1 ? 'border-b border-divider' : ''
            }`}
          >
            <div className="text-text text-sm font-medium">{item.num}</div>
            <div className="text-text text-sm">
              {item.output.includes('.claude/agents/') || item.output.includes('settings.json') ? (
                <>
                  <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded-xl text-xs">
                    {item.output}
                  </code>
                </>
              ) : (
                item.output
              )}
            </div>
            <div className="text-text text-sm">{item.check}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 border-l-4 border-warning bg-bg-soft px-6 py-3 rounded-r-xl max-w-4xl">
        <p className="text-sm text-text">
          비어 있는 항목 있으면 자료 6의 해당 Step으로 돌아가 보강 후 본 단계 진입.
        </p>
      </div>
    </>
  );
}
