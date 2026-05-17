// Source: lectures/S9/lecture.md L439-456 (#### Kill의 신호 + 해석)
// Type: Example (inline, warning + interpretation boxes)
// Pattern: Header marker + title + subtitle + signal_box + interpretation_box + aside
// Profile: hierarchical + comparison visual + balanced tone

export default function S9TheoryC4KillSignal() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 4 · Kill 신호
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-2">
          Kill의 신호
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-text-sub mb-6 max-w-4xl">
          본 시드 폐기, 다음 시드로 이동
        </p>

        {/* Signal box — warning tone (border-warning bg-warning-soft) */}
        <div className="border-l-4 border-warning bg-warning-soft rounded-xl px-6 py-5 max-w-5xl">
          <div className="text-warning font-bold text-xs uppercase tracking-widest mb-3">
            Kill 신호
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-base text-text leading-relaxed">
              응답률 0%
            </li>
            <li className="text-base text-text leading-relaxed">
              사용 세션 매우 적음 (5건 미만)
            </li>
            <li className="text-base text-text leading-relaxed">
              완료율 매우 낮음
            </li>
            <li className="text-base text-text leading-relaxed">
              페르소나 실재 미확인
            </li>
          </ul>
        </div>

        {/* Interpretation box — 높이 축소 (py-2 + leading-tight) */}
        <div className="mt-auto pt-10 max-w-3xl border-l-4 border-accent bg-accent-soft px-5 py-2 rounded-r-xl">
          <div className="text-accent font-bold text-xs uppercase tracking-widest mb-1">
            데이터 해석
          </div>
          <p className="text-text-sub text-sm font-medium leading-tight italic">
            "이 페르소나는 이 솔루션을 원하지 않는다"
          </p>
        </div>
      </div>
    </>
  );
}
