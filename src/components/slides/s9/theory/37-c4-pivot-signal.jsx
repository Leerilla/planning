// Source: lectures/S9/lecture.md L410-423 (#### Pivot의 신호 + 예시)
// Type: Example (inline, warning + application boxes)
// Pattern: Header marker + title + subtitle + signal_box + application_box
// Profile: hierarchical + comparison visual + balanced tone

export default function S9TheoryC4PivotSignal() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 4 · Pivot 신호
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-2">
          Pivot의 신호
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-text-sub mb-6 max-w-4xl">
          같은 시드 유지, 누구를 위한 무엇의 정의가 바뀜
        </p>

        {/* Signal box — warning tone */}
        <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-6 py-5 max-w-5xl mb-4">
          <div className="text-warning font-bold text-xs uppercase tracking-widest mb-3">
            Pivot 신호
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-base text-text leading-relaxed">
              이벤트 추적 완료율 30% 미만
            </li>
            <li className="text-base text-text leading-relaxed">
              Clarity에서 다른 페르소나가 들어옴
            </li>
            <li className="text-base text-text leading-relaxed">
              응답에서 다른 문제가 더 강조됨
            </li>
          </ul>
        </div>

        {/* Application box — 높이 축소 (py-2 + leading-tight + gap-0.5) */}
        <div className="mt-auto pt-10 max-w-3xl border-l-4 border-accent bg-accent-soft px-5 py-2 rounded-r-xl">
          <div className="text-accent font-bold text-xs uppercase tracking-widest mb-1">
            시드 6번 Pivot 예시
          </div>
          <ul className="flex flex-col gap-0.5">
            <li className="text-text-sub text-sm font-medium leading-tight">
              1인 셀러 → 주 매출 100만원 미만 부업 셀러
            </li>
            <li className="text-text-sub text-sm font-medium leading-tight">
              카피 생성 → 키워드 추천
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
