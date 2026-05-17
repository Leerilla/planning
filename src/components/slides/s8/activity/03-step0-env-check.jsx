// Source: lectures/S8/captures/lecture.md L930-944 (#### 0-1. 환경 확인 명령)
// Type: Example (2-col macOS/Windows code)

export default function S8ActivityStep0EnvCheck() {
  return (
    <div className="flex flex-col gap-8 h-full justify-center">
      {/* Header */}
      <div className="flex items-baseline gap-3">
        <span className="h-1 w-12 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          활동 0-1 · 환경 확인
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-text">0-1. 환경 확인 명령</h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub max-w-4xl leading-relaxed">
        운영체제별 명령 — node + git + planning_project 진입
      </p>

      {/* 2-col grid: macOS/Linux vs Windows */}
      <div className="grid grid-cols-2 gap-4 max-w-5xl">
        {/* Left: macOS / Linux */}
        <div className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-5 py-4">
          <span className="text-text-sub font-bold text-xs uppercase tracking-widest mb-2 block">
            macOS / Linux
          </span>
          <pre className="bg-bg border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text">
{`node --version
git --version
cd planning_project`}
          </pre>
        </div>

        {/* Right: Windows (PowerShell) */}
        <div className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-5 py-4">
          <span className="text-text-sub font-bold text-xs uppercase tracking-widest mb-2 block">
            Windows (PowerShell)
          </span>
          <pre className="bg-bg border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text">
{`node --version
git --version
Set-Location planning_project`}
          </pre>
        </div>
      </div>
    </div>
  );
}
