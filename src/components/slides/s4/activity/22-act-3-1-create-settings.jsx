// Source: lectures/S4/lecture.md lines 818-830 (3-1 .claude/settings.json 생성)
// Type: activity (2-col code)
// D-044 §3.7 확장 검토: .claude/settings.json SSOT 추가

export default function S4Activity_3_1_CreateSettings() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-1 · 산출물: .claude/settings.json 빈 파일
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        .claude/settings.json 생성
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        프로젝트별 Claude Code 설정 — Permissions 3단계가 들어갈 파일.
      </p>

      <div className="grid grid-cols-2 gap-3 max-w-5xl">
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            macOS / Linux
          </div>
          <p className="text-base font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`mkdir -p .claude
touch .claude/settings.json`}
          </p>
        </div>
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            Windows PowerShell
          </div>
          <p className="text-sm font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`New-Item -ItemType Directory -Path .claude -Force
New-Item -ItemType File -Path .claude/settings.json`}
          </p>
        </div>
      </div>
    </>
  );
}
