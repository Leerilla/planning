// Source: lectures/S4/lecture.md lines 832-846 (3-2 권장 템플릿 입력)
// Type: activity (json code block)

export default function S4Activity_3_2_Template() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-2 · 산출물: settings.json 권장 템플릿 적용
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        권장 템플릿 입력 (그대로)
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        그대로 적용하면 <span className="highlight-mark">안전과 속도의 균형</span>이 자동으로 갖춰진다.
      </p>

      <div className="inline-flex items-center gap-2 mb-3 border-l-2 border-accent pl-3">
        <span className="text-xs uppercase tracking-wider text-accent font-semibold">파일 경로</span>
        <span className="text-base text-text font-semibold">.claude/settings.json</span>
      </div>

      <pre className="text-sm text-text bg-bg-soft rounded p-5 leading-relaxed whitespace-pre-wrap border border-line max-w-4xl">{`{
  "permissions": {
    "allow": ["Read", "Grep", "Glob", "Edit"],
    "ask": ["Bash", "Write", "WebFetch"],
    "deny": ["BashWithSudo"]
  }
}`}</pre>
    </>
  );
}
