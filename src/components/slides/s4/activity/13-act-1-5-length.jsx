// Source: lectures/S4/lecture.md lines 691-703 (1-5 분량 점검)
// Type: activity (2-col code)

export default function S4Activity_1_5_Length() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-5 · 산출물: 200줄 미만 확인
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        분량 점검 — 200줄 미만 균형
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        매 명령마다 자동 로드되는 토큰. <span className="highlight-mark">4영역 모두 채우면서 30-50줄</span>이 권장.
      </p>

      <div className="grid grid-cols-2 gap-3 max-w-5xl">
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            macOS / Linux
          </div>
          <p className="text-base font-medium text-text leading-relaxed tracking-tight">
            wc -l /project/claude.md
          </p>
        </div>
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            Windows PowerShell
          </div>
          <p className="text-sm font-medium text-text leading-relaxed tracking-tight">
            (Get-Content /project/claude.md | Measure-Object -Line).Lines
          </p>
        </div>
      </div>
    </>
  );
}
