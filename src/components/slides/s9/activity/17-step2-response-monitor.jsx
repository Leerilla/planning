// Source: lectures/S9/lecture.md L696-704 (#### 2-2 응답 도착 모니터링, comparison anti/good)
// Type: ComparisonSlide

export default function S9ActivityStep2ResponseMonitor() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 2-2 · 응답 모니터링
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          2-2. 응답 도착 모니터링
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          이메일/메신저 알림 설정 후 — 응답 즉시 분석 X (편향 위험 회피)
        </p>

        {/* 2-col anti/good cards */}
        <div className="grid grid-cols-2 gap-4 max-w-6xl">
          {/* Left - Antipattern */}
          <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-5 py-4">
            <p className="text-warning font-bold text-xs uppercase tracking-widest mb-3">
              안티패턴
            </p>
            <p className="text-base text-text">
              응답 즉시 본문 분석 시작
            </p>
            <p className="text-sm text-text-sub italic mt-2">
              → 편향 위험 (선입견에 영향)
            </p>
          </div>

          {/* Right - Good */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-3">
              양호
            </p>
            <div className="flex flex-col gap-2 text-base text-text">
              <p>누적해서 Step 3-4에서 함께 처리</p>
              <p>단, 24시간 안에 짧은 감사 답장으로 신뢰 유지</p>
            </div>
            <p className="text-sm text-text-sub italic mt-2">
              → 충분한 데이터 축적 후 패턴 발견
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
