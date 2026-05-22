// Source: lectures/S6/lecture.md lines 1106-1120 (#### 5-3. Issue #6-#10 동일 흐름)
// Type: comparison (5-row table)
// Profile: hierarchical / comparison / medium-high / balanced
// Emphasis: key-message (자동화 확장 메시지)

const ROWS = [
  { issue: 'Issue #6', work: '프롬프트 템플릿' },
  { issue: 'Issue #7', work: '카피 생성 API' },
  { issue: 'Issue #8', work: '결과 컴포넌트' },
  { issue: 'Issue #9', work: '복사 버튼' },
  { issue: 'Issue #10', work: '결과 라우팅' },
];

export default function S6ActivityStep5RepeatFlow() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 5-3 · 동일 흐름
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        5-3. Issue #6-#10 동일 흐름
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-6 max-w-4xl">
        같은 패턴으로 진행. 각 Task는 PostToolUse + Stop 자동화 적용.
      </p>

      <div className="max-w-4xl overflow-hidden rounded-xl border border-divider">
        <div className="grid grid-cols-[160px_1fr] bg-bg-soft px-6 py-3 border-b border-divider">
          <span className="text-xs font-semibold uppercase tracking-wider text-text-sub">Issue</span>
          <span className="text-xs font-semibold uppercase tracking-wider text-text-sub">작업</span>
        </div>
        {ROWS.map((row, idx) => (
          <div
            key={row.issue}
            className={`grid grid-cols-[160px_1fr] px-6 py-3 ${
              idx === ROWS.length - 1 ? '' : 'border-b border-divider'
            }`}
          >
            <span className="text-sm font-semibold text-text">{row.issue}</span>
            <span className="text-sm font-medium text-text-sub">{row.work}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 max-w-4xl border-l-4 border-accent bg-bg-soft px-7 py-5 rounded-r-md">
        <p className="text-xs font-medium text-text-sub leading-relaxed">
          <span className="font-semibold text-text">각 Task 자동화:</span> PostToolUse 후 prd-reviewer 보고서 / Stop 후 git-committer 자동 커밋.
        </p>
      </div>
    </>
  );
}
