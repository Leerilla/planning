// Source: lectures/S6/lecture.md lines 1078-1083 (#### 5-1. Issue #5 브랜치)
// Type: example (code scenario, bash)
// Profile: hierarchical / comparison / medium-high / balanced
// Emphasis: definition (git flow 복습 + feat 브랜치 패턴)

export default function S6ActivityStep5Branch() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 5-1 · Issue #5 브랜치
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        5-1. Issue #5 브랜치
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-6 max-w-4xl">
        화면 2의 첫 Task. main 동기화 후 feat 브랜치 생성.
      </p>

      <div className="max-w-4xl">
        <pre className="bg-bg-soft px-6 py-5 rounded-md border border-divider text-sm font-medium leading-6 text-text overflow-x-auto">
          <code>{`git checkout main && git pull origin main
git checkout -b feat/task-2-1-openai-client`}</code>
        </pre>
      </div>

      <div className="mt-6 max-w-4xl border-l-4 border-accent bg-bg-soft px-7 py-5 rounded-r-md">
        <p className="text-xs font-medium text-text-sub leading-relaxed">
          브랜치명 패턴: feat/task-{'{'}화면번호{'}'}-{'{'}설명{'}'}. 본 sprint는 화면 2의 첫 Task = task-2-1.
        </p>
      </div>
    </>
  );
}
