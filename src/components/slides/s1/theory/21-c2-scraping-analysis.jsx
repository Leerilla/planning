// Source: lectures/S1/lecture.md lines 245-265
// Type: comparison (2개 영역: 스크래핑 + 분석)
// D-040: PastVsPresent 패턴 2개 인스턴스 (세로 누적)
// 폰트 축소 + 카드 compact 형식

export default function S1TheoryC2ScrapingAnalysis() {
  const areas = [
    {
      name: '데이터 스크래핑',
      past: '개발자가 며칠 동안 스크래퍼 작성 / 비개발자에게 닫힌 작업',
      present: 'Playwright MCP에 자연어 명령 / "네이버 카페 글 30개를 CSV로"  짧은 시간',
    },
    {
      name: '페인포인트 분석',
      past: '모은 글 100개를 직접 읽으며 패턴 추출 / 며칠 + 분석자 편향',
      present: 'NotebookLM에 자료 업로드 / 1-2시간 안에 공통 페인포인트 + 출처',
    },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          빨라진 것 — 스크래핑과 분석
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-6">
        며칠에서 1-2시간으로
      </h2>

      {/* 2 영역 누적 */}
      <div className="flex flex-col gap-4 max-w-5xl">
        {areas.map((a, i) => (
          <div key={i}>
            <div className="text-text font-bold text-lg mb-2">{a.name}</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-divider bg-bg-soft p-4 flex flex-col gap-2">
                <span className="text-text-muted text-xs font-semibold tracking-wider uppercase">
                  과거
                </span>
                <p className="text-sm text-text-sub leading-snug">{a.past}</p>
              </div>
              <div className="rounded-2xl border border-accent bg-success-soft p-4 flex flex-col gap-2">
                <span className="text-accent text-xs font-semibold tracking-wider uppercase">
                  현재
                </span>
                <p className="text-sm text-text leading-snug">{a.present}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 핵심 도구 */}
      <div className="border-l-4 border-accent pl-5 mt-6">
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-1">
          핵심 도구
        </div>
        <p className="text-base font-semibold text-text">Playwright MCP · NotebookLM</p>
      </div>
    </>
  );
}
