// Source: lectures/S8/captures/lecture.md L400-406 (#### 환경 변수 3종류)
// Type: comparison
// D-050: lecture.md 표 보존 (3-row 4-col) + D-054: .env.local/OPENAI_API_KEY/NEXT_PUBLIC_API_URL accent code

export default function S8TheoryC3EnvVar3Types() {
  return (
    <div className="flex flex-col gap-6 justify-center h-full max-w-6xl">
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
        환경 변수 3종류
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub leading-relaxed mb-2">
        비밀 / 공개 / 로컬 — 등록 위치도 다름
      </p>

      {/* Comparison table: 3 rows x 4 cols */}
      <div className="overflow-hidden rounded-xl border border-divider mb-4 max-w-6xl">
        {/* Header row */}
        <div className="grid grid-cols-[60px_180px_1fr_120px] gap-0 bg-bg-soft border-b-2 border-divider">
          <div className="px-5 py-3 border-r border-divider">
            <p className="text-sm font-bold text-text-muted uppercase tracking-wide">
              #
            </p>
          </div>
          <div className="px-5 py-3 border-r border-divider">
            <p className="text-sm font-bold text-text-muted uppercase tracking-wide">
              종류
            </p>
          </div>
          <div className="px-5 py-3 border-r border-divider">
            <p className="text-sm font-bold text-text-muted uppercase tracking-wide">
              예시 + 등록 위치
            </p>
          </div>
          <div className="px-5 py-3">
            <p className="text-sm font-bold text-text-muted uppercase tracking-wide">
              노출 여부
            </p>
          </div>
        </div>

        {/* Row 1: BE 비밀 */}
        <div className="grid grid-cols-[60px_180px_1fr_120px] gap-0 border-b border-divider">
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <p className="text-sm font-bold text-accent text-center">
              1
            </p>
          </div>
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <p className="text-sm font-bold text-text">
              BE 비밀
            </p>
          </div>
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <div className="flex flex-col gap-1">
              <div>
                <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
                  OPENAI_API_KEY
                </code>
              </div>
              <p className="text-text-sub text-xs">
                Railway Variables
              </p>
            </div>
          </div>
          <div className="px-5 py-4 bg-bg">
            <p className="text-sm font-bold text-warning text-center">
              비공개
            </p>
          </div>
        </div>

        {/* Row 2: FE 공개 */}
        <div className="grid grid-cols-[60px_180px_1fr_120px] gap-0 border-b border-divider">
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <p className="text-sm font-bold text-accent text-center">
              2
            </p>
          </div>
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <p className="text-sm font-bold text-text">
              FE 공개
            </p>
          </div>
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <div className="flex flex-col gap-1">
              <div>
                <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
                  NEXT_PUBLIC_API_URL
                </code>
              </div>
              <p className="text-text-sub text-xs">
                Vercel Environment Variables
              </p>
            </div>
          </div>
          <div className="px-5 py-4 bg-bg">
            <p className="text-sm text-text-sub text-center">
              공개
            </p>
          </div>
        </div>

        {/* Row 3: 로컬 개발 */}
        <div className="grid grid-cols-[60px_180px_1fr_120px] gap-0">
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <p className="text-sm font-bold text-accent text-center">
              3
            </p>
          </div>
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <p className="text-sm font-bold text-text">
              로컬 개발
            </p>
          </div>
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <div className="flex flex-col gap-1">
              <div>
                <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
                  .env.local
                </code>
              </div>
              <p className="text-text-sub text-xs">
                본인 노트북만
              </p>
            </div>
          </div>
          <div className="px-5 py-4 bg-bg">
            <p className="text-sm font-bold text-warning text-center">
              비공개
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
