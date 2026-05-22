// Source: lectures/S4/request.md (실습 #8) — github mcp 등록·로그인 Step by Step (2026-05-22 전면 교체)
// Type: activity (process — 4 step 순차 가이드)

export default function S4Activity_4_4_GithubMcp() {
  const steps = [
    {
      n: '01',
      title: 'github mcp 패키지 등록',
      cmd: 'claude mcp add github\n  -- npx -y @modelcontextprotocol/server-github',
      note: 'Claude Code에 GitHub mcp 서버를 등록한다. npx로 매번 최신 버전을 받아 실행.',
    },
    {
      n: '02',
      title: 'GitHub 개인 액세스 토큰(PAT) 발급',
      cmd: 'github.com → Settings → Developer settings\n  → Personal access tokens (classic)\n  → Generate new token\n  → 권한: repo, workflow',
      note: '발급된 토큰은 한 번만 노출되니 즉시 복사해 두기.',
    },
    {
      n: '03',
      title: '환경 변수에 토큰 등록',
      cmd: '# Windows PowerShell\n$env:GITHUB_PERSONAL_ACCESS_TOKEN = "ghp_xxx..."\n\n# 또는 .env.local에 영구 저장\nGITHUB_PERSONAL_ACCESS_TOKEN=ghp_xxx...',
      note: '토큰이 등록되어야 mcp가 GitHub API 호출 권한을 갖는다.',
    },
    {
      n: '04',
      title: '연동 확인',
      cmd: 'claude mcp list\n\n# Claude Code 세션에서\n> github 저장소 목록 보여줘',
      note: 'mcp list에 github가 나오고, 저장소 조회가 성공하면 다음 단계(커밋)로 진입.',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-4 · 산출물: github mcp 연동 완료 환경
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        github mcp 등록·로그인 — <span className="highlight-mark">4 step</span>
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        다음 슬라이드(커밋·push) 작업을 위해 Claude Code와 GitHub를 mcp로 연결한다 — 1회 셋업 후 9세션 내내 재사용.
      </p>

      <div className="grid grid-cols-2 gap-4 max-w-6xl">
        {steps.map((s) => (
          <div key={s.n} className="border border-divider rounded p-4 bg-bg-soft">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-accent text-lg font-bold tabular-nums tracking-wider">
                {s.n}
              </span>
              <span className="text-base font-semibold text-text leading-snug">
                {s.title}
              </span>
            </div>
            <pre className="text-xs text-text bg-bg-soft rounded px-2 py-2 leading-relaxed whitespace-pre-wrap border border-divider mb-2">{s.cmd}</pre>
            <p className="text-xs text-text-sub leading-relaxed">
              {s.note}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
