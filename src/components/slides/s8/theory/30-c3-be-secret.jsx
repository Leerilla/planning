// Source: lectures/S8/captures/lecture.md L408-416 (#### 1종류: BE 비밀 정보)
// Type: concept
// D-050: lecture.md 원문 보존 + D-054: OPENAI_API_KEY accent code

export default function S8TheoryC3BeSecret() {
  return (
    <div className="flex flex-col gap-6 justify-center h-full max-w-4xl">
      {/* Header marker + label */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-lg">3</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 3 · 환경 변수 1종
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text mb-2">
        1종류: BE 비밀 정보
      </h2>

      {/* Subtitle with code */}
      <p className="text-base text-text-sub leading-relaxed">
        <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
          OPENAI_API_KEY
        </code> 같은 비밀
      </p>

      {/* Content pre-block */}
      <pre className="bg-bg-soft border border-divider rounded-xl p-4 text-sm whitespace-pre-line max-w-3xl text-text">
{`- Railway 대시보드 Variables 탭에 등록
- 절대 GitHub에 올리지 않음
- BE 코드만 process.env로 접근`}
      </pre>
    </div>
  );
}
