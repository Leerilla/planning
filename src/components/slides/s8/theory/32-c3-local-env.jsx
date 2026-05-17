// Source: lectures/S8/captures/lecture.md L432-441 (#### 3종류: 로컬 개발용)
// Type: concept
// D-050: lecture.md 원문 보존 + D-054: .env.local accent code

export default function S8TheoryC3LocalEnv() {
  return (
    <div className="flex flex-col gap-6 justify-center h-full max-w-4xl">
      {/* Header marker + label */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-lg">3</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 3 · 환경 변수 3종
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text mb-2">
        3종류: 로컬 개발용
      </h2>

      {/* Subtitle with code */}
      <p className="text-base text-text-sub leading-relaxed">
        <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
          .env.local
        </code> 파일
      </p>

      {/* Content pre-block */}
      <pre className="bg-bg-soft border border-divider rounded-xl p-4 text-sm whitespace-pre-line max-w-3xl text-text">
{`- 본인 노트북에서만 사용
- .gitignore에 명시
- git이 추적하지 않음
- 실수로 git add . 해도 안전`}
      </pre>
    </div>
  );
}
