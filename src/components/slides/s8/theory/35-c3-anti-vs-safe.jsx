// Source: lectures/S8/captures/lecture.md L457-471 (#### 안티패턴 vs 안전한 배포)
// Type: example
// D-050: 원문 보존 / D-054: OPENAI_API_KEY, .env.local inline code accent

export default function S8TheoryC3AntiVsSafe() {
  return (
    <div className="flex flex-col gap-6 justify-center h-full max-w-4xl">
      {/* Header marker + label */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-lg">3</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 3 · 안티패턴 비교
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text mb-2">
        안티패턴 vs 안전한 배포
      </h2>

      {/* Content: Two-block example */}
      <div className="flex flex-col gap-4 max-w-4xl">
        {/* Anti-pattern section */}
        <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-5 py-4">
          <div className="text-warning font-bold text-sm uppercase tracking-widest mb-2">
            안티패턴
          </div>
          <pre className="bg-bg border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text">
{`"OpenAI API 키를 코드에 직접 넣고
 GitHub에 푸시했다"
→ 봇이 즉시 발견. 무한 호출.
→ 청구서 폭발`}
          </pre>
        </div>

        {/* Safe deployment section */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-sm uppercase tracking-widest mb-2">
            안전한 배포
          </div>
          <pre className="bg-bg border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text">
{`"API 키는 환경 변수에 두고
 .gitignore에 .env.local 명시"
→ 코드는 GitHub 공개, 키는 비공개
→ 안전`}
          </pre>
        </div>
      </div>
    </div>
  );
}
