// Source: lectures/S3/lecture.md lines 711-725 (0-2 작업 폴더 생성)
// Type: activity (2-col code)
// D-043: "03_prd-refinement" → "planning_project" 변환 (실습 SSOT 통일)

export default function S3Activity_0_2_Folder() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 0-2 · 산출물: 작업 폴더 생성
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        작업 폴더 생성 — planning_project
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        S3~S9 실습은 한 폴더 <span className="highlight-mark">planning_project/</span>에 누적된다. 9세션 동안 같은 폴더에서 작업물이 진화한다.
      </p>

      <div className="grid grid-cols-2 gap-3 max-w-5xl">
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            macOS / Linux
          </div>
          <p className="text-base font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`mkdir planning_project
cd planning_project`}
          </p>
        </div>
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            Windows PowerShell
          </div>
          <p className="text-base font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`New-Item -ItemType Directory -Path planning_project
Set-Location planning_project`}
          </p>
        </div>
      </div>
    </>
  );
}
