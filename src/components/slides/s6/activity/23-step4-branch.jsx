// Source: lectures/S6/lecture.md lines 995-1001 (#### 4-1. Issue #2 브랜치)
// Type: example (bash code snippet)
// Profile: hierarchical / comparison / medium-high / balanced

export default function S6ActivityStep4Branch() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-1 · Issue #2 브랜치 생성
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        4-1. Issue #2 브랜치
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        새 feature 브랜치를 생성하고 최신 main에서 시작합니다.
      </p>

      <div className="rounded-xl border border-divider bg-bg-soft p-5 mb-4 max-w-4xl">
        <p className="text-xs text-text bg-transparent leading-relaxed whitespace-pre-wrap font-medium">{`git checkout main
git pull origin main
git checkout -b feat/task-1-2-image-upload`}</p>
      </div>

      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed max-w-4xl">
        main 브랜치 동기화 후 새 feature 브랜치 생성. 브랜치명 패턴: feat/&#123;task-number&#125;-&#123;설명&#125;.
      </p>
    </>
  );
}
