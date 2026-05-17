// Source: lectures/S8/captures/lecture.md L522-534 (자동 매핑, comparison 2-col)
// Type: ComparisonSlide
// D-050: lecture.md 원문 100% 보존

export default function S8TheoryC4WhyCORS() {
  return (
    <div className="flex flex-col gap-8 h-full justify-center">
      {/* Header marker + label */}
      <div className="flex items-baseline gap-3">
        <span className="h-1 w-12 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          이론 4 · 보안 기획
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text">CORS가 왜 존재하는가</h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-6 max-w-4xl leading-relaxed">
        CORS는 불편한 제약이 아니라 필요한 보호 장치.
      </p>

      {/* Table */}
      <div className="max-w-5xl overflow-hidden rounded-xl border border-divider">
        {/* Table header */}
        <div className="grid grid-cols-[300px_1fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
          <span className="text-sm font-bold text-text-muted uppercase tracking-wide">CORS가 없으면</span>
          <span className="text-sm font-bold text-text-muted uppercase tracking-wide">일어나는 일</span>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-[300px_1fr] px-5 py-4 border-b border-divider">
          <span className="font-semibold text-warning text-sm">악성 사이트가 본인 BE 호출 가능</span>
          <span className="text-text-sub text-sm">사용자가 본인 사이트 로그인 상태에서 다른 탭의 악성 페이지가 본인 BE를 마음대로 호출</span>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-[300px_1fr] px-5 py-4 border-b border-divider">
          <span className="font-semibold text-warning text-sm">본인 API 무단 사용</span>
          <span className="text-text-sub text-sm">다른 사이트가 본인 BE를 자기 서비스에 무료로 활용</span>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-[300px_1fr] px-5 py-4">
          <span className="font-semibold text-warning text-sm">청구서 폭발</span>
          <span className="text-text-sub text-sm">누가 호출하는지 통제 불가</span>
        </div>
      </div>

      {/* Aside note */}
      <aside className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-4xl mt-4">
        <p className="text-sm text-text leading-relaxed">
          브라우저가 기본으로 차단하는 이유: 사용자 보호. 본인 사이트가 신뢰할 도메인을 명시해야 통신 허용.
        </p>
      </aside>
    </div>
  );
}
