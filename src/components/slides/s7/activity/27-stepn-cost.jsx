// Source: lectures/S7/lecture.md L850-858 (Step N /cost 비교)
// Type: example (inline JSX — /cost command + aside)

export default function S7Activity_N_2_Cost() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 N-2 · 비용 비교
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text mb-2">
        N-2. <code className="text-accent font-semibold">/cost</code> 비교
      </h2>

      <p className="text-base text-text-sub mb-4">
        본 sprint 종료 시 토큰 사용량 비교
      </p>

      <pre className="bg-bg border border-divider rounded-xl p-4 text-sm whitespace-pre-line max-w-3xl text-text leading-relaxed">
{`/cost`}
      </pre>

      <aside className="mt-4 border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-3xl">
        <p className="text-sm text-text leading-relaxed">
          sub-agent 컨텍스트 격리 덕분에 토큰 효율. scenario-verifier 호출 1회당 보통 2,000-5,000 토큰.
        </p>
      </aside>
    </>
  );
}
