// Source: lectures/S9/lecture.md L110-119 (#### 1명의 행동은 신호가 아니다)
// Type: example (2-col anti/good pattern)

export default function S9TheoryC2OneUser() {
  return (
    <>
      <div className="flex flex-col h-full">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 2 · 1명 행동
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          1명의 행동은 신호가 아니다
        </h2>

        {/* Subtitle */}
        <p className="text-lg font-semibold text-text mb-6 max-w-3xl">
          데이터 해석에서 가장 흔한 실수는 1명의 행동을 시장의 신호로 착각하는 것
        </p>

        {/* 2-col cards */}
        <div className="grid grid-cols-2 gap-4 max-w-6xl mt-auto">
          {/* Left: Anti-pattern */}
          <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-5 py-5">
            <div className="text-warning font-bold text-xs uppercase tracking-widest mb-3">
              안티패턴
            </div>
            <div className="text-base font-semibold text-text mb-4">
              한 사용자가 키워드 입력에서 막힘
            </div>
            <div className="text-sm text-text-sub font-medium">
              → 입력 방식 즉시 변경
            </div>
          </div>

          {/* Right: Good pattern */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-5">
            <div className="text-accent font-bold text-xs uppercase tracking-widest mb-3">
              양호
            </div>
            <div className="text-base font-semibold text-text mb-4">
              10명 중 7명이 같은 자리에서 막힘
            </div>
            <div className="text-sm text-text-sub font-medium">
              → 신호 확인 후 변경
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
