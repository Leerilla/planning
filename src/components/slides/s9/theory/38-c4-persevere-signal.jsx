// Source: lectures/S9/lecture.md L425-437 (#### Persevere의 신호 + 해석)
// Type: Example (inline, success + interpretation boxes)
// Pattern: Header marker + title + subtitle + signal_box + interpretation_box
// Profile: hierarchical + comparison visual + balanced tone

export default function S9TheoryC4PersevereSignal() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 4 · Persevere 신호
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-2">
          Persevere의 신호
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-text-sub mb-6 max-w-4xl">
          페르소나 큰 윤곽 유지, UX 개선과 일부 기능 수정
        </p>

        {/* Signal box — success tone */}
        <div className="border-l-4 border-success bg-success-soft rounded-r-xl px-6 py-5 max-w-5xl mb-4">
          <div className="text-success font-bold text-xs uppercase tracking-widest mb-3">
            Persevere 신호
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-base text-text leading-relaxed">
              완료율 50-70%
            </li>
            <li className="text-base text-text leading-relaxed">
              Clarity가 명확한 UX 막힘 1-2개 보여줌
            </li>
            <li className="text-base text-text leading-relaxed">
              응답이 방향은 맞지만 개선점을 알려줌
            </li>
          </ul>
        </div>

        {/* Interpretation box — 높이 축소 (py-2 + leading-tight) */}
        <div className="mt-auto pt-10 max-w-3xl border-l-4 border-accent bg-accent-soft px-5 py-2 rounded-r-xl">
          <div className="text-accent font-bold text-xs uppercase tracking-widest mb-1">
            데이터 해석
          </div>
          <p className="text-text-sub text-sm font-medium leading-tight">
            방향은 맞지만 실행에 빈틈이 있음
          </p>
        </div>
      </div>
    </>
  );
}
