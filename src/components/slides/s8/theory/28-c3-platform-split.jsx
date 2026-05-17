// Source: lectures/S8/captures/lecture.md L384-398 (#### 두 플랫폼의 분담)
// Type: process
// D-050: lecture.md 원문 보존 (ASCII flow diagram)

export default function S8TheoryC3PlatformSplit() {
  return (
    <div className="flex flex-col gap-6 justify-center h-full max-w-5xl">
      {/* Header marker + label */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-lg">3</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 3 · 분담 흐름
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text mb-2">
        두 플랫폼의 분담
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub leading-relaxed mb-2">
        GitHub push 한 번 → Vercel/Railway 자동 분담 배포
      </p>

      {/* ASCII flow diagram */}
      <pre className="bg-bg-soft border border-divider rounded-xl p-5 text-sm whitespace-pre-line max-w-4xl text-text overflow-x-auto">
{`[GitHub 리포 push]
       ↓
       ├──────────┬──────────┐
       ↓          ↓          ↓
[Vercel]      [Railway]   (분담 X)
  - FE 빌드    - BE 빌드
  - FE 배포    - BE 배포
       ↓          ↓
  vercel.app    railway.app
       ↓          ↓
  사용자 ←   브라우저   →  BE 호출`}
      </pre>
    </div>
  );
}
