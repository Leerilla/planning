// Source: lectures/S4/lecture.md lines 538-548 (1-1 빈 CLAUDE.md 생성)
// Type: activity (2-col code)

export default function S4Activity_1_1_Touch() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-1 · 산출물: 빈 /project/claude.md
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        빈 /project/claude.md 생성
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        planning_project/ 루트에 /project/claude.md 파일을 만든다.
      </p>

      <div className="grid grid-cols-2 gap-3 max-w-5xl">
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            macOS / Linux
          </div>
          <p className="text-base font-medium text-text leading-relaxed tracking-tight">
            touch /project/claude.md
          </p>
        </div>
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            Windows PowerShell
          </div>
          <p className="text-base font-medium text-text leading-relaxed tracking-tight">
            New-Item -ItemType File -Path /project/claude.md
          </p>
        </div>
      </div>
    </>
  );
}
