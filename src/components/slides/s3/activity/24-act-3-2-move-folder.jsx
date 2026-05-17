// Source: lectures/S3/lecture.md lines 1053-1065 (3-2 작업 폴더로 이동)
// Type: activity (2-col code)
// D-043 + D-044 §3.3: prd.md는 planning_project/docs/prd.md로 이동

export default function S3Activity_3_2_MoveFolder() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-2 · 산출물: planning_project/docs/prd.md
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        작업 폴더로 이동
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        현재 위치: planning_project/ — Step 0에서 만든 작업 폴더. <span className="highlight-mark">docs/</span>는 Step 4-1에서 만든다 (지금은 임시로 루트에 둠).
      </p>

      <div className="grid grid-cols-2 gap-3 max-w-5xl">
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            macOS / Linux
          </div>
          <p className="text-base font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`mv ~/Downloads/prd.md ./`}
          </p>
        </div>
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            Windows PowerShell
          </div>
          <p className="text-base font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`Move-Item -Path "$env:USERPROFILE\\Downloads\\prd.md" -Destination .`}
          </p>
        </div>
      </div>
    </>
  );
}
