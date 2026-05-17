// Source: lectures/S8/captures/lecture.md L1154-1175
// Type: Process step 1-7 (헬스체크 2-col)

export default function S8ActivityStep1Health() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 1-7 · 헬스체크
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          1-7. 헬스체크
        </h1>
        <p className="text-base text-text-sub mb-5 max-w-5xl">
          발급된 URL이 실제 응답하는지 확인
        </p>

        {/* 2-col grid */}
        <div className="grid grid-cols-2 gap-4 max-w-5xl mb-5">
          {/* macOS / Linux */}
          <div className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-5 py-4">
            <p className="text-text-sub font-bold text-xs uppercase tracking-wider mb-2">
              macOS / Linux
            </p>
            <pre className="bg-bg border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text font-inherit">
{`curl https://{Railway URL}/health`}
            </pre>
          </div>

          {/* Windows */}
          <div className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-5 py-4">
            <p className="text-text-sub font-bold text-xs uppercase tracking-wider mb-2">
              Windows
            </p>
            <pre className="bg-bg border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text font-inherit">
{`Invoke-WebRequest https://{Railway URL}/health`}
            </pre>
          </div>
        </div>

        {/* Sub-title: 기대 응답 */}
        <p className="text-base font-semibold text-text-sub mb-2 max-w-5xl">
          기대 응답:
        </p>

        {/* Expected response pre — D-054: /health inline code + accent */}
        <pre className="bg-accent-soft border-l-4 border-accent rounded-r-xl px-5 py-3 text-sm whitespace-pre-line max-w-3xl text-text leading-relaxed font-inherit">
{`{"status": "ok"}`}
        </pre>

        {/* Aside warning — D-054: /health, planning_project, server/ inline code + accent */}
        <aside className="mt-4 border-l-4 border-warning bg-warning-soft rounded-r-xl px-6 py-3 max-w-5xl">
          <p className="text-sm text-text leading-relaxed">
            <code className="text-accent font-semibold">/health</code> 엔드포인트가 BE에 없으면 404 응답. 그러면 Claude Code 명령: "server/에 GET <code className="text-accent font-semibold">/health</code> 엔드포인트 추가해줘. status: ok JSON 응답만."
          </p>
        </aside>
    </>
  );
}
