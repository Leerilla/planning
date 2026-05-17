// Source: lectures/S9/lecture.md L79-91 (자동 매핑, comparison 3-col × 3-row table)
// Type: ComparisonSlide

export default function S9TheoryC1ToneDifference() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 1 · 톤 차이
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          노출 카피의 톤 차이
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-4xl">
          자료 8 과제로 준비된 재피드백 메일 카피는 <span className="font-semibold">"드디어 만들었습니다"</span> 톤이다.
        </p>

        {/* Table */}
        <div className="max-w-5xl overflow-hidden rounded-2xl border border-divider">
          {/* Table header */}
          <div className="grid grid-cols-[140px_1fr_1fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
            <span className="text-sm font-bold text-text-muted uppercase tracking-wide">비교</span>
            <span className="text-sm font-bold text-text-muted uppercase tracking-wide">자료 2 콜드 메일</span>
            <span className="text-sm font-bold text-text-muted uppercase tracking-wide">본 단계 재피드백 메일</span>
          </div>

          {/* Row 1: 목적 */}
          <div className="grid grid-cols-[140px_1fr_1fr] px-5 py-4 border-b border-divider">
            <span className="font-bold text-text">목적</span>
            <span className="text-text-sub">페인포인트 확인</span>
            <span className="text-text-sub">솔루션 검증</span>
          </div>

          {/* Row 2: 질문 */}
          <div className="grid grid-cols-[140px_1fr_1fr] px-5 py-4 border-b border-divider">
            <span className="font-bold text-text">질문</span>
            <span className="text-text-sub">"이런 문제를 겪고 계신가요?"</span>
            <span className="text-text-sub">"이런 문제를 풀어봤는데 진짜 풀렸나요?"</span>
          </div>

          {/* Row 3: 응답률 */}
          <div className="grid grid-cols-[140px_1fr_1fr] px-5 py-4">
            <span className="font-bold text-text">응답률</span>
            <span className="text-text-sub">5-15%</span>
            <span className="text-text-sub">자료 2 응답자에게 보내면 더 높음</span>
          </div>
        </div>

        {/* Aside note */}
        <div className="border-l-4 border-divider bg-bg-soft rounded-r-2xl px-6 py-3 max-w-4xl mt-4">
          <p className="text-sm text-text-muted leading-relaxed">
            자료 2에서 인터뷰에 응답한 1-3명이 본 단계의 1차 발송 대상이 된다. 한 번 답해준 사람에게 결과물을 보여주는 것이 응답률이 가장 높다.
          </p>
        </div>
      </div>
    </>
  );
}
