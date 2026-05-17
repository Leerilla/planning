// Source: lectures/S8/captures/lecture.md L536-547 (자동 매핑, comparison 3-col 의사결정)
// Type: ComparisonSlide
// D-054: Access-Control-Allow-Origin: * inline code + text-warning 강조

export default function S8TheoryC4TwoPolicies() {
  return (
    <div className="flex flex-col gap-8 h-full justify-center">
      {/* Header marker + label */}
      <div className="flex items-baseline gap-3">
        <span className="h-1 w-12 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          이론 4 · 의사결정
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text">CORS의 두 가지 정책</h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-6 max-w-4xl leading-relaxed">
        본 학습의 핵심 기획 결정
      </p>

      {/* Table */}
      <div className="max-w-5xl overflow-hidden rounded-xl border border-divider">
        {/* Table header */}
        <div className="grid grid-cols-[200px_1fr_1fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
          <span className="text-sm font-bold text-text-muted uppercase tracking-wide">정책</span>
          <span className="text-sm font-bold text-text-muted uppercase tracking-wide">설정</span>
          <span className="text-sm font-bold text-text-muted uppercase tracking-wide">트레이드오프</span>
        </div>

        {/* Row 1: 모든 도메인 허용 (warning tone) */}
        <div className="grid grid-cols-[200px_1fr_1fr] px-5 py-4 border-b border-divider">
          <span className="font-bold text-warning">모든 도메인 허용</span>
          <div className="flex items-center">
            <code className="text-warning font-semibold bg-warning-soft px-2 py-1 rounded text-sm">
              Access-Control-Allow-Origin: *
            </code>
          </div>
          <span className="text-warning text-sm font-medium">편리 / 누구나 호출 가능</span>
        </div>

        {/* Row 2: 화이트리스트 (accent tone, bg-accent-soft) */}
        <div className="grid grid-cols-[200px_1fr_1fr] px-5 py-4 bg-accent-soft">
          <span className="font-bold text-accent">화이트리스트</span>
          <span className="text-accent font-semibold">특정 도메인만 허용</span>
          <span className="text-accent text-sm font-medium">본인 FE만 호출 / 신규 도메인마다 설정</span>
        </div>
      </div>

      {/* Aside note */}
      <aside className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-4xl mt-4">
        <p className="text-sm text-text leading-relaxed">
          본 학습은 화이트리스트 선택. 본인 Vercel URL + 로컬 개발용 localhost만 허용. 다른 사이트가 호출 시도하면 차단.
        </p>
      </aside>
    </div>
  );
}
