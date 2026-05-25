// Source: lectures/S5/request.md (T15 신규 → T16j 재매핑, 2026-05-24)
// Type: activity (inline 2-area — 좌 gh auth login 흐름 / 우 scope 명시 + 검증)
// T16j: eyebrow "활동 2-0b" → "활동 3-3" (S5 재기획: GitHub 이슈 등록이 Step 3으로 분리)
// 새 흐름: a19a(gh CLI 3-2) 직후, a20(이슈 등록 3-4) 직전

export default function S5Activity_2_0b_GhTokenScope() {
  const scopes = [
    { name: 'repo', purpose: '저장소 읽기·쓰기' },
    { name: 'workflow', purpose: 'GitHub Actions 워크플로 수정' },
    { name: 'write:issue', purpose: '이슈 생성·코멘트 작성' },
    { name: 'read:org', purpose: '조직 정보 조회 (조직 저장소 시)' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-3 · 산출물: 이슈 등록 권한이 부여된 토큰
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        GitHub Token <span className="highlight-mark">이슈 등록 권한</span> 부여
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-5xl">
        직전 단계의 MCP 토큰 또는 신규 PAT에 이슈 관련 scope를 추가한다. 권한 없으면 다음 슬라이드의 <code className="text-accent font-semibold">gh issue create</code>가 401/403으로 실패.
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2 font-semibold">
            방법 A · gh CLI로 대화형 로그인 (권장)
          </div>
          <pre className="bg-bg-soft border border-divider rounded p-3 text-xs text-text leading-relaxed whitespace-pre-wrap mb-2">{`gh auth login

? Where do you use GitHub?
  > GitHub.com
? Preferred protocol?
  > HTTPS
? Authenticate Git with credentials?
  > Yes
? How would you like to authenticate?
  > Login with a web browser

# 브라우저에서 권한 동의 → 자동 토큰 발급`}</pre>
          <p className="text-xs text-text-sub leading-relaxed">
            웹 브라우저 인증이 자동으로 `repo`, `gist`, `workflow` 등 표준 scope를 포함해 토큰을 발급.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2 font-semibold">
            방법 B · 기존 PAT에 scope 수동 추가
          </div>
          <div className="space-y-2 mb-3">
            {scopes.map((s) => (
              <div key={s.name} className="flex items-baseline gap-3 border-l-2 border-accent pl-3 py-1">
                <code className="text-accent text-sm font-bold shrink-0">{s.name}</code>
                <p className="text-xs text-text-sub leading-relaxed">{s.purpose}</p>
              </div>
            ))}
          </div>
          <pre className="bg-bg-soft border border-divider rounded p-2 text-xs text-text leading-relaxed whitespace-pre-wrap">{`# 검증
gh auth status
# Logged in to github.com as <user>
# Token scopes: 'repo', 'workflow', ...

gh issue list --limit 1
# 출력 보이면 권한 부여 완료`}</pre>
        </div>
      </div>
    </>
  );
}
