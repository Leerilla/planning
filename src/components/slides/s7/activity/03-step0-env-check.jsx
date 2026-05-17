// Source: lectures/S7/lecture.md L519-535 (0-1 환경 확인 명령)
// Type: activity (2-col code — macOS/Linux + Windows)

export default function S7Activity_0_1_EnvCheck() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 0-1 · 환경 확인
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        0-1. 환경 확인 명령
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        운영체제별 도구 버전 + <span className="highlight-mark">planning_project</span> 진입
      </p>

      <div className="grid grid-cols-2 gap-4 max-w-5xl">
        <div className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-5 py-4">
          <div className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-2">
            macOS / Linux
          </div>
          <pre className="bg-bg border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text">
{`node --version
claude --version
npx playwright --version
cd planning_project`}
          </pre>
        </div>
        <div className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-5 py-4">
          <div className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-2">
            Windows (PowerShell)
          </div>
          <pre className="bg-bg border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text">
{`node --version
claude --version
npx playwright --version
Set-Location planning_project`}
          </pre>
        </div>
      </div>

      <p className="mt-4 text-xs text-text-muted max-w-4xl">
        <code className="bg-bg-soft px-1.5 py-0.5 rounded-xl text-xs text-accent font-semibold">planning_project</code> 폴더에서 작업해야 자료 6 산출물이 그대로 보입니다.
      </p>
    </>
  );
}
