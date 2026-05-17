// Source: lectures/S4/lecture.md lines 487-503 (0-2 작업 폴더 + git 초기화)
// Type: activity (2-col code)
// D-043: planning_project 고정 — S3에서 만들었으면 cd만, 새로 시작이면 mkdir + cd + git init

export default function S4Activity_0_2_FolderGit() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 0-2 · 산출물: planning_project + git 저장소 초기화
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        작업 폴더 + git 초기화
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        <span className="highlight-mark">planning_project</span> 고정 — S3에서 누적된 폴더 위에 git을 초기화한다.
      </p>

      <div className="grid grid-cols-2 gap-3 max-w-5xl">
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            macOS / Linux
          </div>
          <p className="text-base font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`mkdir planning_project
cd planning_project
git init`}
          </p>
        </div>
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            Windows PowerShell
          </div>
          <p className="text-base font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`New-Item -ItemType Directory -Path planning_project
Set-Location planning_project
git init`}
          </p>
        </div>
      </div>
    </>
  );
}
