// Source: lectures/S4/lecture.md lines 405-419 (#### 권장 settings.json)
// Type: example (json code block)

export default function S4TheoryC3RecommendedSettings() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          권장 settings.json
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        본 학습은 이 템플릿을 그대로 사용
      </h2>

      <p className="text-base text-text-sub mb-3 max-w-3xl">
        자유 변형은 자가 학습 영역. 그대로 적용하면 안전과 속도의 균형이 자동.
      </p>

      <div className="inline-flex items-center gap-2 mb-3 border-l-2 border-accent pl-3">
        <span className="text-xs uppercase tracking-wider text-accent font-semibold">파일 경로</span>
        <span className="text-base text-text font-semibold">.claude/settings.json</span>
      </div>

      <pre className="text-sm text-text bg-bg-soft rounded p-5 leading-relaxed whitespace-pre-wrap border border-divider max-w-4xl">{`{
  "permissions": {
    "allow": ["Read", "Grep", "Glob", "Edit"],
    "ask": ["Bash", "Write", "WebFetch"],
    "deny": ["BashWithSudo"]
  }
}`}</pre>
    </>
  );
}
