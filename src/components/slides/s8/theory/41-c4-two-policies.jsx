// Source: lectures/S8/captures/lecture.md L536-547 (자동 매핑, comparison 3-col 의사결정)
// Type: ComparisonSlide
// D-054: Access-Control-Allow-Origin: * inline code + text-warning 강조
// S8 T19c (2026-05-25): 강사 요구 — 다이어그램 형식으로 변경 + 높이 축소
//                       표 → FE 요청 → 정책 분기 (2 카드) → 결과 다이어그램

export default function S8TheoryC4TwoPolicies() {
  return (
    <div className="flex flex-col gap-3 h-full justify-center">
      <div className="flex items-baseline gap-3">
        <span className="h-1 w-12 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          이론 4 · 의사결정
        </span>
      </div>

      <h2 className="text-2xl font-bold text-text leading-snug">CORS의 두 가지 정책</h2>

      <p className="text-sm text-text-sub max-w-4xl leading-snug">
        본 학습의 핵심 기획 결정 — FE 요청에 BE가 어떻게 응답할지 선택
      </p>

      {/* 다이어그램: FE 요청 → 정책 분기 → 결과 */}
      <div className="flex flex-col items-center gap-2 max-w-5xl">
        {/* 출발: FE 요청 */}
        <div className="px-4 py-2 border border-divider bg-bg-soft rounded-xl text-center">
          <div className="text-xs font-bold text-text-muted uppercase tracking-wider mb-0.5">FE 요청</div>
          <div className="text-sm text-text">myapp.vercel.app → BE</div>
        </div>

        {/* 분기 화살표 */}
        <div className="flex items-center justify-around w-full max-w-3xl">
          <div className="flex flex-col items-center text-text-muted">
            <span className="text-xs font-semibold">정책 A</span>
            <span className="text-lg">↓</span>
          </div>
          <div className="flex flex-col items-center text-text-muted">
            <span className="text-xs font-semibold">정책 B</span>
            <span className="text-lg">↓</span>
          </div>
        </div>

        {/* 분기 결과: 2 카드 */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-5xl">
          {/* 정책 A — 모든 도메인 허용 (warning) */}
          <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-4 py-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-warning font-bold text-xs uppercase tracking-widest">정책 A</span>
              <span className="text-warning font-bold text-sm">모든 도메인 허용</span>
            </div>
            <div className="mb-2">
              <code className="text-warning font-semibold bg-bg-soft px-2 py-0.5 rounded text-xs">
                Access-Control-Allow-Origin: *
              </code>
            </div>
            <div className="text-xs text-warning font-medium leading-snug">
              결과: 편리 / <span className="font-bold">누구나 호출 가능</span>
            </div>
          </div>

          {/* 정책 B — 화이트리스트 (accent) */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-4 py-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-accent font-bold text-xs uppercase tracking-widest">정책 B</span>
              <span className="text-accent font-bold text-sm">화이트리스트</span>
            </div>
            <div className="mb-2">
              <span className="text-accent font-semibold text-xs">
                특정 도메인만 허용
              </span>
            </div>
            <div className="text-xs text-accent font-medium leading-snug">
              결과: <span className="font-bold">본인 FE만 호출</span> / 신규 도메인마다 설정
            </div>
          </div>
        </div>
      </div>

      <aside className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-4 py-2.5 max-w-4xl">
        <p className="text-xs text-text leading-snug">
          본 학습은 <span className="font-bold text-accent">정책 B (화이트리스트)</span> 선택. 본인 Vercel URL + 로컬 개발용 localhost만 허용. 다른 사이트가 호출 시도하면 차단.
        </p>
      </aside>
    </div>
  );
}
