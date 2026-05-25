// Source: lectures/S8/captures/lecture.md L384-398 (#### 두 플랫폼의 분담)
// Type: process
// D-050: lecture.md 원문 보존
// S8 T19e (2026-05-25): 강사 요구 — 다이어그램 형식으로 변경 + 높이 축소
//                       ASCII pre → JSX 다이어그램 (push → 분기 → Vercel/Railway → 사용자)

export default function S8TheoryC3PlatformSplit() {
  return (
    <div className="flex flex-col gap-3 justify-center h-full max-w-5xl">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-base">3</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 3 · 분담 흐름
        </span>
      </div>

      <h2 className="text-2xl font-bold text-text leading-snug">
        두 플랫폼의 분담
      </h2>

      <p className="text-sm text-text-sub leading-snug">
        GitHub push 한 번 → Vercel/Railway 자동 분담 배포
      </p>

      {/* JSX 다이어그램 — push → 분기 → 두 플랫폼 → 사용자 */}
      <div className="flex flex-col items-center gap-2 max-w-4xl mx-auto w-full">
        {/* 1) GitHub push */}
        <div className="px-4 py-2 border border-divider bg-bg-soft rounded-xl text-center">
          <div className="text-xs font-bold text-text-muted uppercase tracking-wider mb-0.5">출발</div>
          <div className="text-sm text-text font-semibold">[GitHub 리포 push]</div>
        </div>

        {/* 화살표 (분기 전) */}
        <div className="text-text-muted text-lg leading-none">↓</div>

        {/* 분기 라벨 */}
        <div className="text-xs text-text-muted font-semibold">자동 분담</div>

        {/* 분기 화살표 2개 */}
        <div className="grid grid-cols-2 w-full max-w-2xl text-center text-text-muted">
          <div className="text-lg leading-none">↓</div>
          <div className="text-lg leading-none">↓</div>
        </div>

        {/* 2) 두 플랫폼 카드 */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-4xl">
          {/* Vercel */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-4 py-2.5 text-center">
            <div className="text-accent font-bold text-sm mb-1">[Vercel]</div>
            <div className="text-xs text-text leading-snug">
              FE 빌드 → FE 배포
              <br />
              <code className="text-accent font-semibold text-xs">vercel.app</code>
            </div>
          </div>

          {/* Railway */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-4 py-2.5 text-center">
            <div className="text-accent font-bold text-sm mb-1">[Railway]</div>
            <div className="text-xs text-text leading-snug">
              BE 빌드 → BE 배포
              <br />
              <code className="text-accent font-semibold text-xs">railway.app</code>
            </div>
          </div>
        </div>

        {/* 화살표 (수렴) */}
        <div className="grid grid-cols-2 w-full max-w-4xl text-center text-text-muted">
          <div className="text-lg leading-none">↓</div>
          <div className="text-lg leading-none">↓</div>
        </div>

        {/* 3) 사용자 (브라우저) */}
        <div className="px-4 py-2 border border-divider bg-bg-soft rounded-xl text-center w-full max-w-md">
          <div className="text-xs font-bold text-text-muted uppercase tracking-wider mb-0.5">최종 흐름</div>
          <div className="text-sm text-text">
            사용자 (브라우저) → <code className="text-accent font-semibold">Vercel</code>에서 화면 받고{' '}
            <code className="text-accent font-semibold">Railway</code> BE 호출
          </div>
        </div>
      </div>
    </div>
  );
}
