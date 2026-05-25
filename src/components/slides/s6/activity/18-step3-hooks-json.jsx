// Source: lectures/S6/lecture.md lines 905-946
// Type: example (CodeBlock json), § 2.20.1, D-042 파일 경로 라벨
// Profile: hierarchical logic / example visual / balanced tone
// S6 T9 (2026-05-24): 강사 요구 — 높이 조절 + mcpServers 등장 맥락 명확화
//                     기존 footer "제거" → S5에서 추가한 mcpServers와 공존 (학생 흐름 일관)

export default function S6ActivityStep3HooksJson() {
  const jsonContent = `{
  "permissions": {
    "auto_allow": ["Read", "Grep", "Glob", "Edit"],
    "ask_before": ["Bash", "Write", "WebFetch"],
    "deny": ["BashWithSudo"]
  },
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "agent",
            "prompt": "@prd-reviewer 방금 수정된 파일을 검토해주세요.",
            "timeout": 90
          }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          {
            "type": "agent",
            "prompt": "@git-committer 변경된 파일이 있으면 커밋해주세요.",
            "timeout": 60
          }
        ]
      }
    ]
  }
}`;

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex items-center gap-3">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          3-1. settings.json에 hooks 추가
        </span>
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-text leading-snug">
        두 hook 등록
      </h2>

      <div className="flex-1 overflow-hidden flex flex-col rounded border border-divider min-h-0">
        <div className="bg-bg-soft px-4 py-1.5 border-b border-divider">
          <p className="text-xs font-semibold text-text-sub tracking-wider">
            <code className="text-accent">.claude/settings.json</code>
          </p>
        </div>

        <pre className="flex-1 overflow-auto px-4 py-3 text-xs leading-snug text-text bg-bg-soft min-h-0">
{jsonContent}
        </pre>
      </div>

      <div className="rounded border-l-4 border-accent bg-bg-soft px-3 py-2">
        <p className="text-xs text-text leading-snug">
          <span className="font-semibold text-accent">핵심: </span>
          <code className="text-accent">hooks</code> 추가. S5의 <code className="text-accent">mcpServers</code> 보존. matcher <code className="text-accent">"Edit|Write"</code> 공백 없음. Stop은 matcher 생략.
        </p>
      </div>
    </div>
  );
}
