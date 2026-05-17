// Source: lectures/S6/lecture.md lines 905-946
// Type: example (CodeBlock json), § 2.20.1, D-042 파일 경로 라벨
// Profile: hierarchical logic / example visual / balanced tone

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
    <div className="flex flex-col gap-6 h-full">
      <div className="flex items-center gap-3">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          3-1. settings.json에 hooks 추가
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug">
        두 hook 등록
      </h2>

      <div className="flex-1 overflow-hidden flex flex-col rounded-2xl border border-divider">
        <div className="bg-bg-soft px-4 py-2 border-b border-divider sticky top-0">
          <p className="text-xs font-medium text-text-sub tracking-wider">
            .claude/settings.json
          </p>
        </div>

        <pre className="flex-1 overflow-auto p-4 text-xs leading-relaxed text-text-sub bg-bg-soft">
{jsonContent}
        </pre>
      </div>

      <div className="flex items-start gap-3 rounded-xl border-l-4 border-accent bg-bg-soft p-4">
        <p className="text-sm text-text leading-relaxed">
          <span className="font-semibold text-accent">핵심: </span>
          기존 <code className="text-accent">mcpServers</code> 필드는 제거하고 <code className="text-accent">hooks</code> 필드 추가. PostToolUse matcher <code className="text-accent">"Edit|Write"</code>는 공백 없음. Stop은 matcher 필드 없음.
        </p>
      </div>
    </div>
  );
}
