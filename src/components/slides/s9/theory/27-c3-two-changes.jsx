// Source: lectures/S9/lecture.md L292-303 (#### 페르소나 갱신의 두 종류 변화, comparison 2-row table)
// Type: ComparisonSlide

export default function S9TheoryC3TwoChanges() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 3 · 두 종류 변화
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          페르소나 갱신의 두 종류 변화
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-4xl">
          페르소나 갱신은 두 종류의 변화를 만든다.
        </p>

        {/* Table */}
        <div className="max-w-5xl overflow-hidden rounded-2xl border border-divider">
          {/* Table header */}
          <div className="grid grid-cols-[140px_1fr_1.2fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
            <span className="text-sm font-bold text-text-muted uppercase tracking-wide">변화</span>
            <span className="text-sm font-bold text-text-muted uppercase tracking-wide">의미</span>
            <span className="text-sm font-bold text-text-muted uppercase tracking-wide">시드 6번 예시</span>
          </div>

          {/* Row 1: 추가 (accent) */}
          <div className="grid grid-cols-[140px_1fr_1.2fr] px-5 py-4 border-b border-divider">
            <span className="font-bold text-accent">추가</span>
            <span className="text-text-sub">본인이 몰랐던 특성이 데이터로 드러남</span>
            <span className="text-text-sub font-semibold">키워드 5개 중 평균 3개만 입력 (Clarity에서 발견)</span>
          </div>

          {/* Row 2: 제거 (warning) */}
          <div className="grid grid-cols-[140px_1fr_1.2fr] px-5 py-4">
            <span className="font-bold text-warning">제거</span>
            <span className="text-text-sub">가설에 적었지만 데이터에서 안 보임</span>
            <span className="text-text-sub font-semibold">광고비 의존도 (응답에서 시간 절약만 강조됨)</span>
          </div>
        </div>

        {/* Aside note */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-2xl px-6 py-3 max-w-4xl mt-4">
          <p className="text-sm text-text-sub leading-relaxed">
            두 변화가 동시에 일어나면 페르소나가 살아있는 상태가 된다. 살아있다는 것은 실제 사용 데이터로 계속 갱신될 수 있는 상태이다.
          </p>
        </div>
      </div>
    </>
  );
}
