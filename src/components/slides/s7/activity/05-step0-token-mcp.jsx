// Source: lectures/S7/lecture.md L551-566 (0-3 토큰 베이스라인 + 0-4 Playwright MCP)
// Type: activity (2-section example: token + MCP)

export default function S7Activity_0_3_0_4_TokenMcp() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 0-3 + 0-4 · 토큰 & MCP
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        0-3. 토큰 베이스라인 + 0-4. Playwright MCP 연결
      </h2>

      <div className="flex flex-col gap-4 max-w-4xl mt-5">
        {/* Section 1: Token Baseline */}
        <div className="border-l-4 border-accent bg-bg-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-semibold text-xs uppercase tracking-wider mb-2">
            0-3. 토큰 베이스라인
          </div>
          <pre className="bg-bg border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text">
{`/cost`}
          </pre>
          <p className="text-xs text-text-muted mt-2">
            현재 토큰 사용량 메모. 본 sprint 종료 시 비교 대상.
          </p>
        </div>

        {/* Section 2: Playwright MCP */}
        <div className="border-l-4 border-accent bg-bg-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-semibold text-xs uppercase tracking-wider mb-2">
            0-4. Playwright MCP 연결 확인
          </div>
          <pre className="bg-bg border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text mb-2">
{`Playwright MCP가 연결되어 있는지 확인해줘.`}
          </pre>
          <p className="text-xs text-text-muted mb-2">
            연결 안 되어 있으면 MCP 설정 추가:
          </p>
          <pre className="bg-bg border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text">
{`claude mcp add playwright`}
          </pre>
        </div>
      </div>
    </>
  );
}
