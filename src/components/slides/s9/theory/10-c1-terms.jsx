// Source: lectures/S9/lecture.md L93-101 (자동 매핑, terms 4-row 2-col)
// Type: TermsSlide

export default function S9TheoryC1Terms() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-baseline gap-3">
          <span className="h-1 w-12 bg-accent rounded-full" />
          <span className="text-accent font-bold text-sm uppercase tracking-widest">
            이론 1 · 용어 해설
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-text">챕터 용어 해설</h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub max-w-4xl leading-relaxed mb-2">
          노출의 기획적 의미 섹션에서 반복되는 핵심 용어
        </p>

        {/* Terms grid */}
        <div className="max-w-5xl overflow-hidden rounded-2xl border border-divider">
          {/* Row 1: 노출 */}
          <div className="grid grid-cols-[200px_1fr] border-b border-divider">
            <div className="bg-bg-soft px-5 py-4 border-r border-divider">
              <span className="font-bold text-text text-sm">노출</span>
            </div>
            <div className="px-5 py-4">
              <span className="text-text-sub">검증된 MVP를 실제 사용자에게 공개하고 데이터를 수집하는 단계</span>
            </div>
          </div>

          {/* Row 2: 재피드백 */}
          <div className="grid grid-cols-[200px_1fr] border-b border-divider">
            <div className="bg-bg-soft px-5 py-4 border-r border-divider">
              <span className="font-bold text-text text-sm">재피드백</span>
            </div>
            <div className="px-5 py-4">
              <span className="text-text-sub">자료 2 첫 검증에 이어 솔루션 동작 후의 두 번째 검증</span>
            </div>
          </div>

          {/* Row 3: 거리 측정 */}
          <div className="grid grid-cols-[200px_1fr] border-b border-divider">
            <div className="bg-bg-soft px-5 py-4 border-r border-divider">
              <span className="font-bold text-text text-sm">거리 측정</span>
            </div>
            <div className="px-5 py-4">
              <span className="text-text-sub">작업자의 믿음과 시장 반응 사이의 차이를 데이터로 확인</span>
            </div>
          </div>

          {/* Row 4: 두 축 안전망 */}
          <div className="grid grid-cols-[200px_1fr]">
            <div className="bg-bg-soft px-5 py-4 border-r border-divider">
              <span className="font-bold text-text text-sm">두 축 안전망</span>
            </div>
            <div className="px-5 py-4">
              <span className="text-text-sub">능동(재피드백 메일) + 수동(분석 도구)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
