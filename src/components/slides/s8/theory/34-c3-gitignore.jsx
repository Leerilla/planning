// Source: lectures/S8/captures/lecture.md L447-455 (#### .gitignore 표준 항목)
// Type: concept
// D-050: 원문 보존 / D-054: .env*, *.pem, *.key inline code accent
// S8 T20 (2026-05-25): 강사 요구 — 높이 축소 / 밀집도 향상

export default function S8TheoryC3Gitignore() {
  return (
    <div className="flex flex-col gap-3 justify-center h-full max-w-4xl">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-base">3</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 3 · .gitignore
        </span>
      </div>

      <h2 className="text-2xl font-bold text-text leading-snug">
        .gitignore 표준 항목
      </h2>

      <p className="text-sm text-text-sub max-w-3xl leading-snug">
        Git이 추적하지 않을 파일 목록 — 비밀 노출 방지
      </p>

      <pre className="bg-bg-soft border border-divider rounded-xl px-4 py-3 text-xs leading-snug whitespace-pre-line max-w-3xl text-text">
{`.env
.env.local
.env.production
*.pem
*.key`}
      </pre>

      <aside className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-4 py-2.5 max-w-3xl">
        <p className="text-xs text-text leading-snug">
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">
            .env*
          </code> 모든 환경 변수 파일은 Git 추적 X.{' '}
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">
            *.pem
          </code> /{' '}
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">
            *.key
          </code> 인증서·키 파일도 동일.
        </p>
      </aside>
    </div>
  );
}
