// Source: lectures/S4/lecture.md lines 905-926 (4-4b 초기 셋업 커밋 + 시드 6 메시지)
// Type: activity (inline 2-area — 프롬프트 + 시드 6 커밋 메시지)
// 2026-05-22 신규: 기존 30-act-4-4-commit.jsx 콘텐츠를 분리·보존하여 mcp 슬라이드와 분리

export default function S4Activity_4_4b_CommitMessage() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-4b · 산출물: 초기 셋업 첫 커밋
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        초기 셋업 커밋 — 자연어 요청 + 시드 6 메시지
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        github mcp 연결 후, 커밋 메시지는 <span className="highlight-mark">/project/claude.md 3영역</span> 형식([type] description)을 따른다.
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            자연어 커밋 요청
          </div>
          <pre className="text-sm text-text bg-bg-soft rounded p-4 leading-relaxed whitespace-pre-wrap border border-divider">{`"현재까지의 초기 셋업을
 GitHub에 커밋해줘.
 커밋 메시지는 /project/claude.md
 3영역의 형식을 따라줘.
 단, 변경 파일을 먼저 보여주고
 내 확인을 받은 뒤 진행."`}</pre>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            시드 6번 예상 커밋 메시지
          </div>
          <pre className="text-sm text-text bg-bg-soft rounded p-4 leading-relaxed whitespace-pre-wrap border border-divider">{`[chore] 초기 셋업: claude.md, docs/, rules/, settings.json

- /project/claude.md 4영역 + 시스템 설계 참조 지침
- docs/prd.md, persona.md, painpoints.md
- rules/coding-style.md, commit-convention.md, architecture.md
- .claude/settings.json (Permissions 3단계)
- .gitignore`}</pre>
        </div>
      </div>
    </>
  );
}
