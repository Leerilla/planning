// Source: lectures/S8/captures/lecture.md L369-382 (#### 두 플랫폼의 역할)
// Type: comparison
// D-050: lecture.md 표 보존 (2-row 3-col) + D-053/D-054: Vercel/Railway 설명 + aside

export default function S8TheoryC3Platforms() {
  return (
    <div className="flex flex-col gap-6 justify-center h-full max-w-5xl">
      {/* Header marker + label */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-lg">3</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 3 · 플랫폼 역할
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text mb-2">
        두 플랫폼의 역할
      </h2>

      {/* Comparison table: 2 rows x 3 cols */}
      <div className="overflow-hidden rounded-xl border border-divider mb-4 max-w-5xl">
        {/* Header row */}
        <div className="grid grid-cols-[140px_1fr_180px] gap-0 bg-bg-soft border-b-2 border-divider">
          <div className="px-5 py-3 border-r border-divider">
            <p className="text-sm font-bold text-text-muted uppercase tracking-wide">
              플랫폼
            </p>
          </div>
          <div className="px-5 py-3 border-r border-divider">
            <p className="text-sm font-bold text-text-muted uppercase tracking-wide">
              역할
            </p>
          </div>
          <div className="px-5 py-3">
            <p className="text-sm font-bold text-text-muted uppercase tracking-wide">
              무료 티어
            </p>
          </div>
        </div>

        {/* Row 1: Vercel */}
        <div className="grid grid-cols-[140px_1fr_180px] gap-0 border-b border-divider">
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <p className="text-sm font-bold text-accent">
              Vercel
            </p>
          </div>
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <p className="text-sm text-text">
              FE 배포
            </p>
          </div>
          <div className="px-5 py-4 bg-bg">
            <p className="text-sm text-text-sub">
              본 학습에 충분
            </p>
          </div>
        </div>

        {/* Row 2: Railway */}
        <div className="grid grid-cols-[140px_1fr_180px] gap-0">
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <p className="text-sm font-bold text-accent">
              Railway
            </p>
          </div>
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <p className="text-sm text-text">
              BE 배포 (Node.js, Python, DB 모두)
            </p>
          </div>
          <div className="px-5 py-4 bg-bg">
            <p className="text-sm text-text-sub">
              월 5달러 크레딧
            </p>
          </div>
        </div>
      </div>

      {/* Common points section */}
      <div className="mt-2">
        <p className="text-base font-semibold text-text-sub mb-3">
          두 플랫폼 공통점:
        </p>
        <div className="flex flex-col gap-2 max-w-4xl">
          {/* Item 1 */}
          <div className="flex items-start gap-3 p-3 border border-divider bg-bg-soft rounded-xl">
            <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
            <p className="text-sm text-text">
              GitHub 연동 자동 배포
            </p>
          </div>
          {/* Item 2 */}
          <div className="flex items-start gap-3 p-3 border border-divider bg-bg-soft rounded-xl">
            <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
            <p className="text-sm text-text">
              코드 push → 빌드 → URL 발급 자동
            </p>
          </div>
        </div>
      </div>

      {/* Aside: Railway 무료 티어 한계 */}
      <aside className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-6 py-3 max-w-4xl">
        <p className="text-sm text-text leading-relaxed">
          Railway 무료 티어 한계: 본 학습 후 본격 운영 시 크레딧 소진 가능. 결제 필요할 수 있다. 사전 인지가 다음 단계의 비용 통제 결정에 도움.
        </p>
      </aside>
    </div>
  );
}
