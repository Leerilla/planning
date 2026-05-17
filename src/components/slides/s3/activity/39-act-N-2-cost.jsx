// Source: lectures/S3/lecture.md lines 1314-1322 (N-2 /cost 비교)
// Type: activity (code block + 설명)

export default function S3Activity_N_2_Cost() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 N-2 · 산출물: 토큰 차이 메모
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        /cost 비교 — 시작 vs 종료
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        Step 0의 베이스라인 토큰과 비교한다. <span className="highlight-mark">차이가 본 세션의 실비용</span>이다.
      </p>

      <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-5 max-w-3xl mb-4">
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
          Claude Code 세션 안에서
        </div>
        <p className="text-2xl font-bold text-text leading-tight tracking-wider">
          /cost
        </p>
      </div>

      <div className="border border-line rounded p-4 max-w-3xl">
        <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
          메모 항목
        </div>
        <ul className="space-y-1.5 text-sm text-text-sub">
          <li>· 시작 토큰 (Step 0 메모)</li>
          <li>· 종료 토큰 (현재)</li>
          <li>· 차이 — 본 세션 누적 비용 (USD)</li>
          <li>· 세션 시간 (시작 ~ 종료)</li>
        </ul>
      </div>
    </>
  );
}
