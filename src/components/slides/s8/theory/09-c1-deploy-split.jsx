// Source: lectures/S8/captures/lecture.md lines 86-95 (#### 분리 배포의 정의)
// Type: concept, emphasis: definition
// D-050: lecture.md 원문 보존 + D-053: Vercel/Railway 첫 등장 설명

export default function S8TheoryC1DeploySplit() {
  return (
    <div className="flex flex-col gap-8 h-full justify-center max-w-5xl">
      {/* Header marker + label */}
      <div className="flex items-baseline gap-3">
        <span className="h-1 w-12 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          이론 1 · 분리 배포
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-text">분리 배포의 정의</h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub max-w-4xl leading-relaxed">
        FE와 BE를 다른 서버에 배포하는 방식
      </p>

      {/* Definition table (4-row 1-col grid) */}
      <div className="max-w-4xl overflow-hidden rounded-xl border border-divider">
        {/* Header row */}
        <div className="grid grid-cols-2 gap-0 bg-bg-soft border-b-2 border-divider">
          <div className="px-5 py-3 border-r border-divider">
            <p className="text-sm font-bold text-text-muted uppercase tracking-wide">
              항목
            </p>
          </div>
          <div className="px-5 py-3">
            <p className="text-sm font-bold text-text-muted uppercase tracking-wide">
              본 학습 선택
            </p>
          </div>
        </div>

        {/* Row 1: FE 플랫폼 */}
        <div className="grid grid-cols-2 gap-0 border-b border-divider">
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <p className="text-sm font-semibold text-text">
              FE 플랫폼
            </p>
          </div>
          <div className="px-5 py-4 bg-bg">
            <p className="text-sm text-text">
              <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
                Vercel
              </code>
            </p>
          </div>
        </div>

        {/* Row 2: BE 플랫폼 */}
        <div className="grid grid-cols-2 gap-0 border-b border-divider">
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <p className="text-sm font-semibold text-text">
              BE 플랫폼
            </p>
          </div>
          <div className="px-5 py-4 bg-bg">
            <p className="text-sm text-text">
              <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
                Railway
              </code>
            </p>
          </div>
        </div>

        {/* Row 3: 통신 방식 */}
        <div className="grid grid-cols-2 gap-0 border-b border-divider">
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <p className="text-sm font-semibold text-text">
              통신 방식
            </p>
          </div>
          <div className="px-5 py-4 bg-bg">
            <p className="text-sm text-text">
              HTTPS 요청
            </p>
          </div>
        </div>

        {/* Row 4: 도메인 */}
        <div className="grid grid-cols-2 gap-0">
          <div className="px-5 py-4 border-r border-divider bg-bg">
            <p className="text-sm font-semibold text-text">
              도메인
            </p>
          </div>
          <div className="px-5 py-4 bg-bg">
            <p className="text-sm text-text">
              서로 다름
            </p>
          </div>
        </div>
      </div>

      {/* D-053: Tool explanation aside */}
      <aside className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-4xl">
        <p className="text-sm text-text leading-relaxed">
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-xs">
            Vercel
          </code>은 FE 배포 플랫폼 (Next.js 통합 우수). <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-xs">
            Railway
          </code>는 BE 배포 플랫폼 (서버 + DB + 워커).
        </p>
      </aside>
    </div>
  );
}
