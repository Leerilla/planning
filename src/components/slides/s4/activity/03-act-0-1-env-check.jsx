// Source: lectures/S4/lecture.md lines 467-485 (0-1 환경 확인 명령)
// Type: activity (2-col code — 4 명령)

export default function S4Activity_0_1_EnvCheck() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 0-1 · 산출물: 4 도구 확인 완료
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        환경 확인 명령 — node·claude·git·gh
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        통과 조건: <span className="highlight-mark">node 18.0 이상</span>, claude·git·gh 모두 동작.
      </p>

      <div className="grid grid-cols-2 gap-3 max-w-5xl">
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            macOS / Linux
          </div>
          <p className="text-base font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`node --version
claude --version
git --version
gh --version`}
          </p>
        </div>
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            Windows PowerShell
          </div>
          <p className="text-base font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`node --version
claude --version
git --version
gh --version`}
          </p>
        </div>
      </div>
    </>
  );
}
