// Source: 강사 결함 보고 — Step 2 진입 전 GitHub MCP 설치/인증 (신규 슬라이드, 2026-05-13)
// Type: activity (2-col — 설치 + 인증)

export default function S5Activity_2_0_GithubMcp() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-0 · 산출물: GitHub MCP 설치 + 인증
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        GitHub MCP 설치와 인증 — Issue 등록 사전 준비
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-5xl">
        Claude Code가 GitHub API를 호출하려면 <span className="highlight-mark">MCP 서버 설치 + Personal Access Token 인증</span>이 필요.
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2 font-semibold">
            1단계 · MCP 설치 명령
          </div>
          <pre className="bg-bg-soft border-l-4 border-accent rounded p-4 text-sm text-text leading-relaxed whitespace-pre-wrap">
{`claude mcp add github \\
  -- npx -y @modelcontextprotocol/server-github

# 또는 .claude/settings.json에 직접 등록:
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"]
    }
  }
}`}
          </pre>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2 font-semibold">
            2단계 · Personal Access Token 인증
          </div>
          <div className="space-y-2 mb-3">
            {[
              'github.com → Settings → Developer settings',
              'Personal access tokens → Generate new token (classic)',
              '권한 선택: repo / workflow / write:packages',
              '생성된 토큰 복사',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3 border-l-2 border-accent pl-3 py-1">
                <span className="text-accent text-sm font-bold shrink-0">{i + 1}</span>
                <p className="text-sm text-text leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
          <pre className="bg-bg-soft rounded p-3 text-sm text-text leading-relaxed whitespace-pre-wrap border border-divider">
{`# 환경변수로 등록
export GITHUB_PERSONAL_ACCESS_TOKEN=ghp_...

# 또는 .env에 저장 후 .gitignore 등록`}
          </pre>
        </div>
      </div>

      <p className="text-sm text-text-sub mt-4 leading-relaxed max-w-5xl border-l-2 border-accent pl-3">
        검증: <code>claude</code> 재시작 후 "GitHub Issue 목록 보여줘"가 정상 응답하면 인증 완료.
      </p>
    </>
  );
}
