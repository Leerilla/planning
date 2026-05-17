// Source: lectures/S7/lecture.md L842-848 (Step N 산출물 정리)
// Type: comparison (inline JSX — 5-row 3-col table)

export default function S7Activity_N_1_Outputs() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 N-1 · 산출물 정리
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text mb-2">
        Step N: 정리와 비용 비교
      </h2>

      <p className="text-base text-text-sub mb-4">
        본 단계 목표는 산출물 확인과 토큰 비교, 회고
      </p>

      <h3 className="text-xl font-bold text-text mt-4 mb-3">
        N-1. 산출물 정리
      </h3>

      <div className="max-w-5xl overflow-hidden rounded-xl border border-divider">
        {/* Header */}
        <div className="grid grid-cols-[60px_1fr_1fr] bg-bg-soft px-5 py-3 border-b border-divider">
          <div className="text-xs font-bold text-text-muted uppercase tracking-wide">#</div>
          <div className="text-xs font-bold text-text-muted uppercase tracking-wide">산출물</div>
          <div className="text-xs font-bold text-text-muted uppercase tracking-wide">다음 단계 활용</div>
        </div>

        {/* Rows */}
        {[
          {
            num: '1',
            output: '통과되는 E2E 테스트 1개',
            usage: '회귀 테스트',
          },
          {
            num: '2',
            output: 'scenario-verifier sub-agent',
            usage: '시나리오 변경 시 재검증',
          },
          {
            num: '3',
            output: '자율 디버깅 경험 1회',
            usage: '다음 에러에 적용',
          },
          {
            num: '4',
            output: '시나리오 검증 보고서 누적',
            usage: '통과 증거',
          },
          {
            num: '5',
            output: '검증된 MVP 상태',
            usage: '배포 진입',
          },
        ].map((row, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[60px_1fr_1fr] px-5 py-3 border-b border-divider last:border-b-0"
          >
            <div className="text-sm font-bold text-text">{row.num}</div>
            <div className="text-sm text-text">{row.output}</div>
            <div className="text-sm text-text-sub">{row.usage}</div>
          </div>
        ))}
      </div>
    </>
  );
}
