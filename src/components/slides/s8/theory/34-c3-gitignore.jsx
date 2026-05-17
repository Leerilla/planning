// Source: lectures/S8/captures/lecture.md L447-455 (#### .gitignore 표준 항목)
// Type: concept
// D-050: 원문 보존 / D-054: .env*, *.pem, *.key inline code accent

export default function S8TheoryC3Gitignore() {
  return (
    <div className="flex flex-col gap-6 justify-center h-full max-w-4xl">
      {/* Header marker + label */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-lg">3</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 3 · .gitignore
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text mb-2">
        .gitignore 표준 항목
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-6 max-w-3xl leading-relaxed">
        Git이 추적하지 않을 파일 목록 — 비밀 노출 방지
      </p>

      {/* Pre-block */}
      <pre className="bg-bg-soft border border-divider rounded-xl p-5 text-sm whitespace-pre-line max-w-3xl text-text">
{`.env
.env.local
.env.production
*.pem
*.key`}
      </pre>

      {/* Aside */}
      <aside className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-3xl">
        <p className="text-sm text-text leading-relaxed">
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
            .env*
          </code> 모든 환경 변수 파일은 Git 추적 X.{' '}
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
            *.pem
          </code> /{' '}
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
            *.key
          </code> 인증서·키 파일도 동일.
        </p>
      </aside>
    </div>
  );
}
