// Source: lectures/S8/captures/lecture.md L549-561 (자동 매핑, process ASCII flow)
// Type: ProcessSlide
// S8 T20 (2026-05-25): 강사 요구 — 다이어그램으로 수정
//                       ASCII pre → JSX 다이어그램 (허용 정의 → 분기 (통과/차단) → 보호 결과)

export default function S8TheoryC4WhitelistEffect() {
  return (
    <div className="flex flex-col gap-3 h-full justify-center">
      <div className="flex items-baseline gap-3">
        <span className="h-1 w-12 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          이론 4 · 화이트리스트 효과
        </span>
      </div>

      <h2 className="text-2xl font-bold text-text leading-snug">
        화이트리스트 정책의 효과
      </h2>

      <p className="text-sm text-text-sub max-w-4xl leading-snug">
        허용 도메인 명시 → 다른 도메인 자동 차단 → BE 자원 보호
      </p>

      {/* JSX 다이어그램 */}
      <div className="flex flex-col items-center gap-2 max-w-4xl mx-auto w-full">
        {/* 1) 허용 도메인 정의 */}
        <div className="w-full max-w-2xl border-l-4 border-accent bg-accent-soft rounded-r-xl px-4 py-2.5">
          <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">
            허용 도메인 정의
          </div>
          <ul className="flex flex-col gap-0.5 text-xs text-text leading-snug">
            <li>· <code className="text-accent font-semibold">https://myapp.vercel.app</code> (배포된 FE)</li>
            <li>· <code className="text-accent font-semibold">http://localhost:3000</code> (로컬 개발)</li>
          </ul>
        </div>

        {/* 화살표 */}
        <div className="text-text-muted text-lg leading-none">↓</div>

        {/* 분기 라벨 */}
        <div className="text-xs text-text-muted font-semibold">호출 시도</div>

        {/* 분기 ↓↓ */}
        <div className="grid grid-cols-2 w-full max-w-3xl text-center text-text-muted">
          <div className="text-lg leading-none">↓</div>
          <div className="text-lg leading-none">↓</div>
        </div>

        {/* 2) 분기 결과 */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-3xl">
          {/* 허용 도메인 → 통과 */}
          <div className="border-l-4 border-success bg-success-soft rounded-r-xl px-4 py-2.5 text-center">
            <div className="text-xs font-bold text-success uppercase tracking-widest mb-1">허용 도메인</div>
            <div className="text-xs text-text leading-snug">
              myapp.vercel.app
              <br />
              <span className="text-success font-bold">→ 통과</span>
            </div>
          </div>
          {/* 다른 도메인 → 차단 */}
          <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-4 py-2.5 text-center">
            <div className="text-xs font-bold text-warning uppercase tracking-widest mb-1">다른 도메인</div>
            <div className="text-xs text-text leading-snug">
              evil-site.com
              <br />
              <span className="text-warning font-bold">→ 차단</span>
            </div>
          </div>
        </div>

        {/* 화살표 */}
        <div className="text-text-muted text-lg leading-none">↓</div>

        {/* 3) 보호 결과 */}
        <div className="w-full max-w-2xl border border-divider bg-bg-soft rounded-xl px-4 py-2.5 text-center">
          <div className="text-sm font-bold text-text">본인 BE 자원 보호</div>
        </div>
      </div>
    </div>
  );
}
