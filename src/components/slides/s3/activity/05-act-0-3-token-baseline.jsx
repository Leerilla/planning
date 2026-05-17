// Source: lectures/S3/lecture.md lines 727-735 (0-3 토큰 베이스라인)
// Type: activity (code block + 설명)

export default function S3Activity_0_3_TokenBaseline() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 0-3 · 산출물: 베이스라인 토큰 메모
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        토큰 베이스라인 측정
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        Claude Code 세션을 시작한 뒤 <span className="highlight-mark">/cost</span>로 시작 토큰을 메모한다. 마지막 Step에서 같은 명령으로 비교한다.
      </p>

      <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-5 max-w-3xl mb-4">
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
          Claude Code 세션 안에서
        </div>
        <p className="text-2xl font-bold text-text leading-tight tracking-wider">
          /cost
        </p>
      </div>

      <p className="text-sm text-text-sub leading-relaxed max-w-3xl">
        측정 항목: 시작 시간, 누적 토큰 수, 누적 비용. 본 세션 종료 시 차이가 PRD 정제의 실비용이다.
      </p>
    </>
  );
}
