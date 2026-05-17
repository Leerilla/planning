// Source: lectures/S9/lecture.md L538-554 (#### 0-1 환경 확인, example 2-col)
// Type: ExampleSlide

export default function S9ActivityStep0EnvCheck() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 0-1 · 환경 확인
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          0-1. 환경 확인 명령
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-6xl">
          <code className="text-accent font-semibold">planning_project</code> 폴더로 이동 + 버전 확인
        </p>

        {/* 2-col grid */}
        <div className="grid grid-cols-2 gap-4 max-w-6xl">
          {/* Left: macOS / Linux */}
          <div className="border border-divider bg-bg-soft rounded-xl p-5">
            <div className="text-text-sub font-bold text-xs uppercase tracking-widest mb-3">
              macOS / Linux
            </div>
            <pre className="bg-bg border border-divider rounded-xl p-4 text-sm whitespace-pre leading-relaxed overflow-x-auto">
{`node --version
claude --version
cd planning_project`}
            </pre>
          </div>

          {/* Right: Windows (PowerShell) */}
          <div className="border border-divider bg-bg-soft rounded-xl p-5">
            <div className="text-text-sub font-bold text-xs uppercase tracking-widest mb-3">
              Windows (PowerShell)
            </div>
            <pre className="bg-bg border border-divider rounded-xl p-4 text-sm whitespace-pre leading-relaxed overflow-x-auto">
{`node --version
claude --version
Set-Location planning_project`}
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}
