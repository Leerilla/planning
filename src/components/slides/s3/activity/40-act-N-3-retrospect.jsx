// Source: lectures/S3/lecture.md lines 1324-1330 (N-3 회고 좋은 답 vs 나쁜 답 3-row)
// Type: comparison (3 질문 × GOOD/BAD)

export default function S3Activity_N_3_Retrospect() {
  const rows = [
    {
      q: 'NotebookLM 좋았던 점',
      good: '"인용 클릭으로 페인포인트 5개 모두 원문 확인"',
      bad: '"더 정확한 것 같다"',
    },
    {
      q: 'Manyfast 가장 많이 수정한 부분',
      good: '"성공 지표를 \'만족도 향상\'에서 \'1-2시간→5분\'으로"',
      bad: '"전반적으로 수정"',
    },
    {
      q: 'prd.md 핵심 3줄',
      good: '"(1) 1인 셀러 (2) 차별화 카피 3개 생성 (3) 응답 5초 이내"',
      bad: '"PRD 전체"',
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
        같은 질문에 답이 <span className="highlight-mark">측정 가능·구체적</span>이면 좋은 답, 일반적·모호하면 나쁜 답.
      </p>

      <div className="rounded border border-line overflow-hidden max-w-6xl">
        <div className="grid grid-cols-[1.4fr_2.2fr_1.6fr] bg-bg-soft border-b border-line">
          <div className="px-4 py-3 text-base font-semibold text-text-sub">질문</div>
          <div className="px-4 py-3 text-base font-semibold text-accent border-l border-line">좋은 답</div>
          <div className="px-4 py-3 text-base font-semibold text-text-sub border-l border-line">나쁜 답</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1.4fr_2.2fr_1.6fr] ${i < rows.length - 1 ? 'border-b border-line' : ''}`}
          >
            <div className="px-4 py-4 text-sm text-text font-medium">{r.q}</div>
            <div className="px-4 py-4 text-sm text-text border-l border-line">{r.good}</div>
            <div className="px-4 py-4 text-sm text-text-sub border-l border-line">{r.bad}</div>
          </div>
        ))}
      </div>
    </>
  );
}
