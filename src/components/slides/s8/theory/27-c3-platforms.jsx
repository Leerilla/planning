// Source: lectures/S8/captures/lecture.md L369-382 (#### 두 플랫폼의 역할)
// Type: comparison
// D-050: lecture.md 표 보존 (2-row 3-col) + D-053/D-054: Vercel/Railway 설명 + aside
// S8 T21 (2026-05-25): 강사 요구 — 높이 축소 / 밀집도 향상

export default function S8TheoryC3Platforms() {
  return (
    <div className="flex flex-col gap-3 justify-center h-full max-w-5xl">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-base">3</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 3 · 플랫폼 역할
        </span>
      </div>

      <h2 className="text-2xl font-bold text-text leading-snug">
        두 플랫폼의 역할
      </h2>

      <div className="overflow-hidden rounded-xl border border-divider max-w-5xl">
        <div className="grid grid-cols-[140px_1fr_180px] gap-0 bg-bg-soft border-b-2 border-divider">
          <div className="px-4 py-2 border-r border-divider">
            <p className="text-xs font-bold text-text-muted uppercase tracking-wide">플랫폼</p>
          </div>
          <div className="px-4 py-2 border-r border-divider">
            <p className="text-xs font-bold text-text-muted uppercase tracking-wide">역할</p>
          </div>
          <div className="px-4 py-2">
            <p className="text-xs font-bold text-text-muted uppercase tracking-wide">무료 티어</p>
          </div>
        </div>

        <div className="grid grid-cols-[140px_1fr_180px] gap-0 border-b border-divider">
          <div className="px-4 py-2 border-r border-divider bg-bg">
            <p className="text-xs font-bold text-accent">Vercel</p>
          </div>
          <div className="px-4 py-2 border-r border-divider bg-bg">
            <p className="text-xs text-text">FE 배포</p>
          </div>
          <div className="px-4 py-2 bg-bg">
            <p className="text-xs text-text-sub">본 학습에 충분</p>
          </div>
        </div>

        <div className="grid grid-cols-[140px_1fr_180px] gap-0">
          <div className="px-4 py-2 border-r border-divider bg-bg">
            <p className="text-xs font-bold text-accent">Railway</p>
          </div>
          <div className="px-4 py-2 border-r border-divider bg-bg">
            <p className="text-xs text-text">BE 배포 (Node.js, Python, DB 모두)</p>
          </div>
          <div className="px-4 py-2 bg-bg">
            <p className="text-xs text-text-sub">월 5달러 크레딧</p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-text-sub mb-2">두 플랫폼 공통점:</p>
        <div className="flex flex-col gap-1.5 max-w-4xl">
          <div className="flex items-start gap-2 px-3 py-2 border border-divider bg-bg-soft rounded-xl">
            <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
            <p className="text-xs text-text leading-snug">GitHub 연동 자동 배포</p>
          </div>
          <div className="flex items-start gap-2 px-3 py-2 border border-divider bg-bg-soft rounded-xl">
            <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
            <p className="text-xs text-text leading-snug">코드 push → 빌드 → URL 발급 자동</p>
          </div>
        </div>
      </div>

      <aside className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-4 py-2.5 max-w-4xl">
        <p className="text-xs text-text leading-snug">
          Railway 무료 티어 한계: 본 학습 후 본격 운영 시 크레딧 소진 가능. 결제 필요할 수 있다. 사전 인지가 다음 단계의 비용 통제 결정에 도움.
        </p>
      </aside>
    </div>
  );
}
