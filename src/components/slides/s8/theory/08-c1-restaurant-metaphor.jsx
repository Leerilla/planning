// Source: lectures/S8/captures/lecture.md L70-84 (자동 매핑, example pre block)
// Type: ExampleSlide
// Phase 6 (2026-05-17): request.md #8 — 시각적 콘텐츠 비유 카드 배치 (pre → 2-col)

export default function S8TheoryC1RestaurantMetaphor() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 1 · 비유
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">식당 비유</h2>
      <p className="text-base text-text-sub mb-6 max-w-3xl">FE = 홀, BE = 주방</p>

      <div className="grid grid-cols-2 gap-4 max-w-5xl mt-auto">
        {/* FE = 홀 */}
        <div className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-5 py-5">
          <div className="text-text-sub font-bold text-xs uppercase tracking-widest mb-2">
            FE = 홀 (Hall)
          </div>
          <div className="text-base font-bold text-text mb-3">손님(사용자)</div>
          <ul className="flex flex-col gap-2">
            <li className="flex items-start gap-2 text-sm text-text">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span>홀에서 주문 <span className="text-text-sub">(FE에서 입력)</span></span>
            </li>
            <li className="flex items-start gap-2 text-sm text-text">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span>홀에서 음식 받음 <span className="text-text-sub">(FE에서 결과 표시)</span></span>
            </li>
            <li className="flex items-start gap-2 text-sm text-text">
              <span className="w-1.5 h-1.5 rounded-full bg-warning mt-2 shrink-0" />
              <span>주방 못 들어감 <span className="text-text-sub">(BE 직접 접근 불가)</span></span>
            </li>
          </ul>
        </div>

        {/* BE = 주방 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-5">
          <div className="text-accent font-bold text-xs uppercase tracking-widest mb-2">
            BE = 주방 (Kitchen)
          </div>
          <div className="text-base font-bold text-text mb-3">레시피와 재료 (API 키, 비밀)</div>
          <ul className="flex flex-col gap-2">
            <li className="flex items-start gap-2 text-sm text-text">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span>주방에만 있음 <span className="text-text-sub">(BE에만 보관)</span></span>
            </li>
            <li className="flex items-start gap-2 text-sm text-text">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span>손님에게 안 보임 <span className="text-text-sub">(브라우저 조회 불가)</span></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
