// Source: lectures/S8/captures/lecture.md L1009-1022 (#### 0-5. .gitignore 점검)
// Type: Example (명령 + 추가 항목 pre)

export default function S8ActivityStep0Gitignore() {
  return (
    <div className="flex flex-col gap-8 h-full justify-center">
      {/* Header */}
      <div className="flex items-baseline gap-3">
        <span className="h-1 w-12 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          활동 0-5 · .gitignore 점검
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-text">0-5. .gitignore 점검</h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub max-w-4xl leading-relaxed">
        <code className="text-accent font-semibold bg-bg-soft px-1 py-0.5 rounded text-sm">.env*</code> 파일 Git 추적 차단
      </p>

      {/* Grep command */}
      <div>
        <p className="text-sm text-text-sub mb-2">점검 명령:</p>
        <pre className="bg-bg-soft border border-divider rounded-xl p-3 text-sm whitespace-pre-line max-w-3xl text-text mb-3">
{`cat .gitignore | grep ".env"`}
        </pre>
      </div>

      {/* 없으면 추가 섹션 */}
      <div>
        <p className="text-base text-text-sub mb-2">없으면 추가:</p>
        <pre className="bg-accent-soft border-l-4 border-accent rounded-r-xl px-5 py-4 text-sm whitespace-pre-line max-w-3xl text-text">
{`.env
.env.local
.env.production
node_modules/
.next/`}
        </pre>
      </div>
    </div>
  );
}
