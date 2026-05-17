// Source: lectures/S9/lecture.md L585-591 (#### 0-4 /cost 베이스라인, example pre + footer)
// Type: ExampleSlide

export default function S9ActivityStep0CostBaseline() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 0-4 · /cost 베이스라인
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          0-4. /cost 베이스라인
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-3xl">
          Claude Code 세션 시작 후 토큰 사용량 기준점 기록
        </p>

        {/* Pre block */}
        <pre className="bg-bg-soft border border-divider rounded-xl p-5 text-sm whitespace-pre-line max-w-3xl overflow-x-auto">
{`/cost`}
        </pre>

        {/* Aside note */}
        <div className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-6 py-3 max-w-5xl">
          <p className="text-sm text-text-muted leading-relaxed">
            출력된 토큰 사용량을 메모. Step 6에서 누적 비용 비교에 사용.
          </p>
        </div>

        {/* Footer */}
        <div className="text-text-sub text-xs mt-2 max-w-3xl">
          <code className="text-accent font-semibold">/cost</code> — Claude Code CLI 세션 토큰 사용량 조회 명령
        </div>
      </div>
    </>
  );
}
