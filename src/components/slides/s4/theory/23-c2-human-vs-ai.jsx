// Source: lectures/S4/lecture.md lines 229-236 (#### 사람 검증 vs AI 검증 4-row 표)
// Type: comparison

export default function S4TheoryC2HumanVsAi() {
  const rows = [
    { axis: '비용', human: '동료 시간 확보', ai: '즉시 가능' },
    { axis: '속도', human: '한 번에 시간 소요', ai: '반복 빠름' },
    { axis: '객관성', human: '동료의 사전 지식 영향', ai: '컨텍스트만으로 판단' },
    { axis: '본 학습 운영', human: '비현실적', ai: '권장' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          사람 검증 vs AI 검증
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        4축에서 비교한 결과 — AI 검증 권장
      </h2>

      <div className="rounded border border-line overflow-hidden max-w-6xl">
        <div className="grid grid-cols-[1fr_1.6fr_1.6fr] bg-bg-soft border-b border-line">
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub">항목</div>
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub border-l border-line">사람 검증 (기존)</div>
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-accent border-l border-line">AI 검증 루프 (현재)</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_1.6fr_1.6fr] ${i < rows.length - 1 ? 'border-b border-line' : ''}`}
          >
            <div className="px-5 py-3.5 text-base font-semibold text-text">{r.axis}</div>
            <div className="px-5 py-3.5 text-base text-text-sub border-l border-line">{r.human}</div>
            <div className="px-5 py-3.5 text-base text-text font-medium border-l border-line">{r.ai}</div>
          </div>
        ))}
      </div>
    </>
  );
}
