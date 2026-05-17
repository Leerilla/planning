// Source: lectures/S8/captures/lecture.md L24-33 (자동 매핑, terms 2-col)
// Type: TermsSlide

export default function S8TheoryC1FullstackDefinition() {
  return (
    <div className="flex flex-col gap-8 h-full justify-center">
      {/* Header marker + label */}
      <div className="flex items-baseline gap-3">
        <span className="h-1 w-12 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          이론 1 · 정의
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-text">풀스택의 정체</h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub max-w-4xl leading-relaxed">
        사용자가 보는 화면과 실제 일을 처리하는 서버가 분리된 구조
      </p>

      {/* Table */}
      <div className="max-w-5xl overflow-hidden rounded-2xl border border-divider">
        {/* Table header */}
        <div className="grid grid-cols-[200px_1fr_1fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
          <span className="text-sm font-bold text-text-muted uppercase tracking-wide">영역</span>
          <span className="text-sm font-bold text-text-muted uppercase tracking-wide">위치</span>
          <span className="text-sm font-bold text-text-muted uppercase tracking-wide">역할</span>
        </div>

        {/* Row 1: FE */}
        <div className="grid grid-cols-[200px_1fr_1fr] px-5 py-4 border-b border-divider">
          <span className="font-bold text-text">FE (Frontend)</span>
          <span className="text-text-sub">사용자 브라우저</span>
          <span className="text-text-sub">화면 표시, 입력 받기</span>
        </div>

        {/* Row 2: BE — request.md #4 BE 배경 제거 (FE와 동등) */}
        <div className="grid grid-cols-[200px_1fr_1fr] px-5 py-4">
          <span className="font-bold text-text">BE (Backend)</span>
          <span className="text-text-sub">외부 서버</span>
          <span className="text-text-sub">비밀 보관, 로직 처리, LLM 호출</span>
        </div>
      </div>

      {/* Footer note */}
      <p className="text-sm text-text-muted max-w-4xl">
        두 영역이 HTTP로 통신.
      </p>
    </div>
  );
}
