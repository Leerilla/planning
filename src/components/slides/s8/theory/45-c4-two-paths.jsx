// Source: lectures/S8/captures/lecture.md line 585-592 (#### CORS 해결의 두 갈래)
// Type: comparison
// Pattern: ComparisonSlide with 2-row 3-col table
// Profile: logic=hierarchical / visual=comparison / tone=strong

export default function S8TheoryC4TwoPaths() {
  return (
    <>
      {/* Header */}
      <div className="text-sm uppercase tracking-wider text-text-sub font-semibold">
        이론 4 · 해결 두 갈래
      </div>

      {/* Title & Subtitle */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        CORS 해결의 두 갈래
      </h2>
      <p className="text-base text-text-sub mb-6 max-w-4xl">
        BE에 "이 FE 도메인은 허용한다"를 명시
      </p>

      {/* Table */}
      <div className="w-full overflow-hidden rounded-xl border border-divider">
        {/* Header Row */}
        <div className="grid grid-cols-[140px_1fr_160px] bg-bg-soft px-5 py-3 border-b-2 border-divider">
          <div className="font-bold text-text">갈래</div>
          <div className="font-bold text-text">방법</div>
          <div className="font-bold text-text text-center">본 학습 선택</div>
        </div>

        {/* Row 1: FE 변경 (Warning) */}
        <div className="grid grid-cols-[140px_1fr_160px] px-5 py-4 border-b border-divider bg-warning-soft">
          <div className="font-bold text-warning">FE 변경</div>
          <div className="text-warning">
            같은 도메인에 BE 배포 (역방향 프록시 등)
          </div>
          <div className="text-warning font-bold text-center text-sm">
            복잡
          </div>
        </div>

        {/* Row 2: BE 변경 (Accent) */}
        <div className="grid grid-cols-[140px_1fr_160px] px-5 py-4 bg-accent-soft">
          <div className="font-bold text-accent">BE 변경</div>
          <div className="text-accent font-semibold">
            BE에 CORS 헤더 추가
          </div>
          <div className="text-accent font-bold text-center text-sm">
            선택
          </div>
        </div>
      </div>
    </>
  );
}
