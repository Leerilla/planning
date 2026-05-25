// Source: lectures/S8/captures/lecture.md L59-68 (자동 매핑, comparison 2-col table)
// Type: ComparisonSlide
// S8 T17a (2026-05-25): 강사 요구 — 표 헤더/본문 텍스트 라인 정렬
//                       헤더 py-3 → py-4, 본문 셀 text-sm 명시 (헤더와 폰트 크기 통일)

export default function S8TheoryC1TrustBoundary() {
  return (
    <div className="flex flex-col gap-8 h-full justify-center">
      {/* Header marker + label */}
      <div className="flex items-baseline gap-3">
        <span className="h-1 w-12 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          이론 1 · 신뢰 경계
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-text">신뢰 경계 (Trust Boundary)</h2>

      {/* Table */}
      <div className="max-w-5xl overflow-hidden rounded-2xl border border-divider">
        {/* Table header */}
        <div className="grid grid-cols-[160px_180px_1fr] bg-bg-soft px-5 py-4 border-b-2 border-divider">
          <div className="flex items-center">
            <span className="text-sm font-bold text-text-muted uppercase tracking-wide">영역</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-sm font-bold text-text-muted uppercase tracking-wide">신뢰 가능성</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm font-bold text-text-muted uppercase tracking-wide">보관 가능한 것</span>
          </div>
        </div>

        {/* Row 1: FE (차단) */}
        <div className="grid grid-cols-[160px_180px_1fr] px-5 py-4 border-b border-divider">
          <div className="flex items-center">
            <span className="text-sm font-bold text-text">FE</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-sm text-warning font-bold">차단</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-text-sub">화면 코드, 공개 URL</span>
          </div>
        </div>

        {/* Row 2: BE (허용) */}
        <div className="grid grid-cols-[160px_180px_1fr] px-5 py-4 bg-accent-soft">
          <div className="flex items-center">
            <span className="text-sm font-bold text-accent">BE</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-sm text-success font-bold">허용</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-text font-semibold">API 키, DB 인증, 외부 서비스 인증</span>
          </div>
        </div>
      </div>

      {/* Aside note */}
      <div className="border-l-4 border-divider bg-bg-soft rounded-r-2xl px-6 py-3 max-w-4xl mt-2">
        <p className="text-sm text-text leading-relaxed">
          브라우저로 전달되는 모든 코드는 사용자가 볼 수 있다. FE에 둔 것은 공개된 것과 같다.
        </p>
      </div>
    </div>
  );
}
