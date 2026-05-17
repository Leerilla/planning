// Source: lectures/S7/lecture.md L862-866 (Step N 회고 좋은 답 vs 나쁜 답)
// Type: comparison (inline JSX — 3-row 3-col table)

export default function S7Activity_N_3_Retro() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 N-3 · 회고
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text mb-2">
        N-3. 회고: 좋은 답 vs 나쁜 답
      </h2>

      <p className="text-base text-text-sub mb-4">
        구체적·근거 있는 답이 좋은 답
      </p>

      <div className="max-w-6xl overflow-hidden rounded-xl border border-divider">
        {/* Header */}
        <div className="grid grid-cols-[1fr_2fr_1fr] bg-bg-soft px-5 py-3 border-b border-divider">
          <div className="text-xs font-bold text-text-muted uppercase tracking-wide">질문</div>
          <div className="text-xs font-bold text-text-muted uppercase tracking-wide">좋은 답</div>
          <div className="text-xs font-bold text-text-muted uppercase tracking-wide">나쁜 답</div>
        </div>

        {/* Rows */}
        {[
          {
            question: '자율 디버깅 3원칙 중 가장 효과적',
            good: '"분석 먼저. 추측 수정 차단됨"',
            bad: '"다 좋았다"',
          },
          {
            question: 'E2E 통과 시점 안도감',
            good: '"라우팅 문제로 3번 막혔다가 통과 시 시나리오가 한 흐름으로 작동"',
            bad: '"기뻤다"',
          },
          {
            question: '배포 진입 자신감',
            good: '"scenario-verifier가 통과 보고 + E2E 통과 → 두 증거로 진입"',
            bad: '"준비됐다"',
          },
        ].map((row, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[1fr_2fr_1fr] px-5 py-3 border-b border-divider last:border-b-0"
          >
            <div className="text-sm font-bold text-text">{row.question}</div>
            <div className="text-sm text-success">{row.good}</div>
            <div className="text-sm text-warning">{row.bad}</div>
          </div>
        ))}
      </div>
    </>
  );
}
