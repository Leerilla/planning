// Source: lectures/S8/captures/lecture.md Step N-3 회고 (L1600-1606)
// Type: Comparison (3-row 3-col table)
// D-050: 원문 100% + lecture_range [1600, 1606]
// D-054: 도구 이름 inline code + accent (PORT, CORS, NEXT_PUBLIC_, Clarity, Sentry, 이벤트)

export default function S8ActivityStepNRetro() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 N-3 · 회고
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          N-3. 회고: 좋은 답 vs 나쁜 답
        </h1>
        <p className="text-base text-text-sub mb-6 max-w-4xl">
          구체적·근거 있는 답이 좋은 답
        </p>

        {/* Table */}
        <div className="max-w-6xl overflow-hidden rounded-xl border border-divider">
          {/* Header row */}
          <div className="grid grid-cols-[1fr_2fr_1fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
            <div className="text-sm font-bold text-text-muted uppercase tracking-wide">질문</div>
            <div className="text-sm font-bold text-text-muted uppercase tracking-wide">좋은 답</div>
            <div className="text-sm font-bold text-text-muted uppercase tracking-wide">나쁜 답</div>
          </div>

          {/* Row 1: 개발 어휘 */}
          <div className="grid grid-cols-[1fr_2fr_1fr] px-5 py-4 border-b border-divider">
            <div className="font-bold text-text text-sm">개발 어휘 효과</div>
            <div className="text-sm text-text leading-relaxed">
              <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-xs">PORT</code>, <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-xs">CORS</code>, <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-xs">NEXT_PUBLIC_</code> 어휘 알고 나니 막힐 때 정확한 명령
            </div>
            <div className="text-sm text-warning">"어렵지 않았다"</div>
          </div>

          {/* Row 2: CORS 자율 디버깅 */}
          <div className="grid grid-cols-[1fr_2fr_1fr] px-5 py-4 border-b border-divider">
            <div className="font-bold text-text text-sm">CORS 자율 디버깅 효과</div>
            <div className="text-sm text-text leading-relaxed">
              풀 메시지 그대로 → 화이트리스트 설정 명령 → 1회 해결
            </div>
            <div className="text-sm text-warning">"디버깅 됐다"</div>
          </div>

          {/* Row 3: 분석 도구 가치 */}
          <div className="grid grid-cols-[1fr_2fr_1fr] px-5 py-4">
            <div className="font-bold text-text text-sm">분석 도구 가치</div>
            <div className="text-sm text-text leading-relaxed">
              <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-xs">Clarity</code>는 UX 막힘, <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-xs">Sentry</code>는 모르는 에러, 이벤트는 PRD 검증. 셋이 서로 다른 질문에 답함
            </div>
            <div className="text-sm text-warning">"다 깔았다"</div>
          </div>
        </div>
    </>
  );
}
