// Source: lectures/S5/request.md (T15 신규 → T16j 재매핑, 2026-05-24)
// Type: activity (3-col — OS별 설치 명령 + 검증)
// T16j: eyebrow "활동 2-0a" → "활동 3-2" (S5 재기획: GitHub 이슈 등록이 Step 3으로 분리)
// 새 흐름: a19(GitHub MCP 3-1) 직후, a19b(token 3-3) 직전

export default function S5Activity_2_0a_GhCliInstall() {
  const installs = [
    {
      os: 'Windows',
      cmd: 'winget install --id GitHub.cli\n\n# 또는 Chocolatey:\nchoco install gh',
    },
    {
      os: 'macOS',
      cmd: 'brew install gh\n\n# 또는 MacPorts:\nsudo port install gh',
    },
    {
      os: 'Linux',
      cmd: '# Debian / Ubuntu\nsudo apt install gh\n\n# Fedora / RHEL\nsudo dnf install gh',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-2 · 산출물: <code className="text-accent font-semibold">gh</code> CLI 설치 완료
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        GitHub CLI 설치 — <span className="highlight-mark">gh</span> 명령 환경 확보
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-5xl">
        MCP 등록과 별개로, Claude Code가 호출할 <code className="text-accent font-semibold">gh</code> 명령(이슈·PR·인증)을 로컬에서 실행 가능하게 만든다.
      </p>

      <div className="grid grid-cols-3 gap-4 max-w-6xl mb-4">
        {installs.map((i) => (
          <div key={i.os} className="border border-divider rounded p-4 bg-bg-soft">
            <div className="text-sm font-bold text-text mb-2">{i.os}</div>
            <pre className="text-xs text-text leading-relaxed whitespace-pre-wrap">{i.cmd}</pre>
          </div>
        ))}
      </div>

      <div className="border-l-2 border-accent pl-4 py-2 max-w-5xl">
        <div className="text-xs uppercase tracking-wider text-text-sub mb-1 font-semibold">검증</div>
        <pre className="text-sm text-text leading-relaxed whitespace-pre-wrap">{`gh --version
# gh version 2.x.x (2026-...)
# 출력 보이면 설치 성공 → 다음 단계(토큰 권한 부여)로`}</pre>
      </div>
    </>
  );
}
