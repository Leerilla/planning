// Source: lectures/S2/lecture.md line 111
// Type: example (inline 2-area — 두 축 신뢰도 효과)

export default function S2TheoryC2CrossValidation() {
  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          두 축 신뢰도 효과
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        능동 답변과 수동 데이터의 일치 여부가 신호다
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        두 축이 가리키는 페인포인트가 같으면 <span className="highlight-mark">시장의 신호</span>, 다르면 <span className="highlight-mark">페르소나가 모호</span>하다는 신호.
      </p>

      {/* 2-area: 일치 / 불일치 */}
      <div className="grid grid-cols-2 gap-4 max-w-5xl">
        {/* 일치 — 신호 */}
        <div className="rounded-2xl border-l-4 border-success bg-success-soft p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-success" />
            <span className="text-success text-xs font-semibold tracking-wider uppercase">
              일치 — 시장의 신호
            </span>
          </div>
          <p className="text-base font-bold text-text leading-relaxed mb-2">
            능동 답변자가 말한 페인포인트가 수동 데이터에서도 같은 패턴으로 등장
          </p>
          <p className="text-sm text-text-sub leading-relaxed">
            한 명의 의견이 아니라 시장의 신호로 확정. 다음 단계 분석에서 신뢰도 ↑↑
          </p>
        </div>

        {/* 불일치 — 모호 */}
        <div className="rounded-2xl border-l-4 border-warning bg-warning-soft p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-warning" />
            <span className="text-warning text-xs font-semibold tracking-wider uppercase">
              불일치 — 페르소나 모호
            </span>
          </div>
          <p className="text-base font-bold text-text leading-relaxed mb-2">
            능동 답변과 수동 데이터가 일치하지 않음
          </p>
          <p className="text-sm text-text-sub leading-relaxed">
            페르소나가 모호하거나 가설이 한쪽으로 기울었다는 신호. 1차 가설 재검토 권고.
          </p>
        </div>
      </div>
    </>
  );
}
