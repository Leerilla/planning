// Source: lectures/S5/lecture.md lines 441-453 (0-2 planning_project 폴더 진입, D-043)
// Type: activity (2-col code)

export default function S5Activity_0_2_Folder() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 0-2 · 산출물: 작업 폴더 진입
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        planning_project 폴더 진입 (D-043)
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        자료 4에서 만든 폴더 그대로. <span className="highlight-mark">새 폴더 생성 안 함</span>.
      </p>

      <div className="grid grid-cols-2 gap-3 max-w-5xl">
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            macOS / Linux
          </div>
          <p className="text-base font-medium text-text leading-relaxed tracking-tight">
{`cd planning_project`}
          </p>
        </div>
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            Windows PowerShell
          </div>
          <p className="text-base font-medium text-text leading-relaxed tracking-tight">
{`Set-Location planning_project`}
          </p>
        </div>
      </div>
    </>
  );
}
