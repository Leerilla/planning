// Source: lectures/S9/lecture.md L1047-1057 (#### N-1 결과 정리, comparison 7-row 2-col grid D-052)
// Type: ComparisonSlide

export default function S9ActivityStepNResults() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 N-1 · 결과 정리
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          N-1. 결과 정리
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-6xl">
          7종 산출물 = 다음 사이클의 출발점
        </p>

        {/* 2-col grid with tables */}
        <div className="grid grid-cols-2 gap-4 max-w-6xl">
          {/* Left column: 4 items */}
          <div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-divider">
                  <th className="w-10 text-center text-xs font-bold uppercase tracking-widest text-text-sub py-2 px-2">#</th>
                  <th className="text-left text-xs font-bold uppercase tracking-widest text-text-sub py-2 px-3">산출물</th>
                  <th className="text-left text-xs font-bold uppercase tracking-widest text-text-sub py-2 px-3">본 학습 후 활용</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-divider">
                  <td className="text-center text-sm text-text py-3 px-2">1</td>
                  <td className="text-sm text-text py-3 px-3">발송 메모</td>
                  <td className="text-sm text-text py-3 px-3">다음 사이클 컨택 관리</td>
                </tr>
                <tr className="border-b border-divider">
                  <td className="text-center text-sm text-text py-3 px-2">2</td>
                  <td className="text-sm text-text py-3 px-3">분석 메모 (3 도구)</td>
                  <td className="text-sm text-text py-3 px-3">다음 사이클 분석 기준</td>
                </tr>
                <tr className="border-b border-divider">
                  <td className="text-center text-sm text-text py-3 px-2">3</td>
                  <td className="text-sm text-text py-3 px-3">종합 분석 메모</td>
                  <td className="text-sm text-text py-3 px-3">다음 사이클 출발점</td>
                </tr>
                <tr>
                  <td className="text-center text-sm text-text py-3 px-2">4</td>
                  <td className="text-sm text-text py-3 px-3">갱신된 <code className="text-accent font-semibold">docs/persona.md</code></td>
                  <td className="text-sm text-text py-3 px-3">살아있는 페르소나</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right column: 3 items */}
          <div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-divider">
                  <th className="w-10 text-center text-xs font-bold uppercase tracking-widest text-text-sub py-2 px-2">#</th>
                  <th className="text-left text-xs font-bold uppercase tracking-widest text-text-sub py-2 px-3">산출물</th>
                  <th className="text-left text-xs font-bold uppercase tracking-widest text-text-sub py-2 px-3">본 학습 후 활용</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-divider">
                  <td className="text-center text-sm text-text py-3 px-2">5</td>
                  <td className="text-sm text-text py-3 px-3">갱신된 <code className="text-accent font-semibold">docs/prd.md</code></td>
                  <td className="text-sm text-text py-3 px-3">다음 사이클 PRD</td>
                </tr>
                <tr className="border-b border-divider">
                  <td className="text-center text-sm text-text py-3 px-2">6</td>
                  <td className="text-sm text-text py-3 px-3">다음 사이클 결정 메모</td>
                  <td className="text-sm text-text py-3 px-3">1주 안 행동 1개</td>
                </tr>
                <tr>
                  <td className="text-center text-sm text-text py-3 px-2">7</td>
                  <td className="text-sm text-text py-3 px-3">학습 회고</td>
                  <td className="text-sm text-text py-3 px-3">본인 약점과 강점</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
