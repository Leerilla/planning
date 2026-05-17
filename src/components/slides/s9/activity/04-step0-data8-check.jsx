// Source: lectures/S9/lecture.md L556-570 (#### 0-2 산출물 점검, comparison 2-col grid D-052)
// Type: ComparisonSlide

export default function S9ActivityStep0Data8Check() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 0-2 · 산출물 점검
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          0-2. 자료 8 산출물 점검
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-6xl">
          7개 산출물 — 비어 있는 항목은 자료 8 해당 Step으로 복귀 후 진입
        </p>

        {/* 2-col grid with tables */}
        <div className="grid grid-cols-2 gap-4 max-w-6xl">
          {/* Left column: 4 items */}
          <div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-divider">
                  <th className="w-12 text-center text-xs font-bold uppercase tracking-widest text-text-sub py-2 px-2">#</th>
                  <th className="text-left text-xs font-bold uppercase tracking-widest text-text-sub py-2 px-3">산출물</th>
                  <th className="w-32 text-center text-xs font-bold uppercase tracking-widest text-text-sub py-2 px-2">점검</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-divider">
                  <td className="text-center text-sm text-text py-3 px-2">1</td>
                  <td className="text-sm text-text py-3 px-3">공개 FE URL (Vercel)</td>
                  <td className="text-center text-sm text-text-sub py-3 px-2">있는가</td>
                </tr>
                <tr className="border-b border-divider">
                  <td className="text-center text-sm text-text py-3 px-2">2</td>
                  <td className="text-sm text-text py-3 px-3">공개 BE URL (Railway)</td>
                  <td className="text-center text-sm text-text-sub py-3 px-2">CORS 해결됐는가</td>
                </tr>
                <tr className="border-b border-divider">
                  <td className="text-center text-sm text-text py-3 px-2">3</td>
                  <td className="text-sm text-text py-3 px-3">Microsoft Clarity</td>
                  <td className="text-center text-sm text-text-sub py-3 px-2">본인 세션 1건 이상</td>
                </tr>
                <tr>
                  <td className="text-center text-sm text-text py-3 px-2">4</td>
                  <td className="text-sm text-text py-3 px-3">Sentry SDK</td>
                  <td className="text-center text-sm text-text-sub py-3 px-2">FE/BE 초기화됨</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right column: 3 items */}
          <div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-divider">
                  <th className="w-12 text-center text-xs font-bold uppercase tracking-widest text-text-sub py-2 px-2">#</th>
                  <th className="text-left text-xs font-bold uppercase tracking-widest text-text-sub py-2 px-3">산출물</th>
                  <th className="w-32 text-center text-xs font-bold uppercase tracking-widest text-text-sub py-2 px-2">점검</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-divider">
                  <td className="text-center text-sm text-text py-3 px-2">5</td>
                  <td className="text-sm text-text py-3 px-3">이벤트 추적 코드 3개</td>
                  <td className="text-center text-sm text-text-sub py-3 px-2">적절한 위치</td>
                </tr>
                <tr className="border-b border-divider">
                  <td className="text-center text-sm text-text py-3 px-2">6</td>
                  <td className="text-sm text-text py-3 px-3">재피드백 메일 카피</td>
                  <td className="text-center text-sm text-text-sub py-3 px-2">자료 8 과제 산출물</td>
                </tr>
                <tr>
                  <td className="text-center text-sm text-text py-3 px-2">7</td>
                  <td className="text-sm text-text py-3 px-3">컨택 리스트 10명+</td>
                  <td className="text-center text-sm text-text-sub py-3 px-2">자료 1·2 누적</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Aside note — request.md 양식 적용 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-5xl mt-5">
          <p className="text-sm text-text-muted leading-relaxed">
            비어 있는 항목이 있으면 자료 8의 해당 Step으로 돌아가 보강 후 본 단계 진입.
          </p>
        </div>
      </div>
    </>
  );
}
