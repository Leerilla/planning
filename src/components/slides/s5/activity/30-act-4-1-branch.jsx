// Source: lectures/S5/lecture.md lines 783-791 (4-1 첫 Task 브랜치 생성)
// Type: activity (code)

export default function S5Activity_4_1_Branch() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-1 · 산출물: 브랜치 생성
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        첫 Task 브랜치 생성
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        브랜치 이름 형식: <span className="highlight-mark">feat/{`{task-id}-{설명}`}</span>. CLAUDE.md 커밋 메시지 type 그대로.
      </p>

      <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-5 max-w-3xl">
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-3">
          명령
        </div>
        <p className="text-base font-medium text-text leading-relaxed tracking-tight">
{`git checkout -b feat/task-1-1-input-form`}
        </p>
      </div>
    </>
  );
}
