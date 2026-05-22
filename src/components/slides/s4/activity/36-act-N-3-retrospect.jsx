// Source: lectures/S4/lecture.md lines 971-977 (N-3 회고 좋은 답 vs 나쁜 답)
// Type: comparison (3 질문 × GOOD/BAD)

export default function S4Activity_N_3_Retrospect() {
  const rows = [
    {
      q: 'AI 검증 효과',
      good: '"1차 초안 페르소나 모호하다고 AI가 짚어줘 1인 셀러로 명확화"',
      bad: '"더 좋아진 것 같다"',
    },
    {
      q: '가장 모호했던 영역',
      good: '"1영역 성공 지표가 측정 단위 누락이었음"',
      bad: '"전반적으로 어려웠다"',
    },
    {
      q: '다음 단계 준비',
      good: '"화면 분석과 Task 재구성으로 진입 가능"',
      bad: '"준비됐다"',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 N-3 · 회고 — 구체성 검증
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        회고 좋은 답 vs 나쁜 답
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        같은 질문에 답이 <span className="highlight-mark">측정 가능·구체적</span>이면 좋은 답.
      </p>

      <div className="rounded border border-divider overflow-hidden max-w-6xl">
        <div className="grid grid-cols-[1.4fr_2.2fr_1.6fr] bg-bg-soft border-b border-divider">
          <div className="px-4 py-3 text-xs uppercase tracking-wider text-text-sub">질문</div>
          <div className="px-4 py-3 text-xs uppercase tracking-wider text-accent border-l border-divider">좋은 답</div>
          <div className="px-4 py-3 text-xs uppercase tracking-wider text-text-sub border-l border-divider">나쁜 답</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1.4fr_2.2fr_1.6fr] ${i < rows.length - 1 ? 'border-b border-divider' : ''}`}
          >
            <div className="px-4 py-4 text-sm text-text font-medium">{r.q}</div>
            <div className="px-4 py-4 text-sm text-text border-l border-divider">{r.good}</div>
            <div className="px-4 py-4 text-sm text-text-sub border-l border-divider">{r.bad}</div>
          </div>
        ))}
      </div>
    </>
  );
}
