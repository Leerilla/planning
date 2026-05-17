// Source: lectures/S9/lecture.md L677-694 (#### 2-1 추가 스크래핑, example pre)
// Type: ExampleSlide

export default function S9ActivityStep2Scraping() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 2-1 · 추가 스크래핑
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          2-1. 추가 커뮤니티 스크래핑
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          자료 2에서 스크래핑한 커뮤니티 외 새 페르소나 채널 1-2곳 추가 — Playwright MCP 재활용
        </p>

        {/* Seed 6 channels card */}
        <div className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-5 py-4 max-w-5xl mb-4">
          <p className="text-text-sub font-bold text-xs uppercase tracking-widest mb-2">
            시드 6번 후보 채널
          </p>
          <div className="flex flex-col gap-1.5 text-sm text-text">
            <p>셀러허브</p>
            <p>셀러스쿨 외 다른 카페</p>
            <p>유튜브 셀러 채널의 댓글</p>
          </div>
        </div>

        {/* Pre block - D-051 text-sm, D-053 Playwright MCP 자료 2 회상 */}
        <pre className="bg-bg-soft border border-divider rounded-xl p-5 text-sm whitespace-pre-line max-w-5xl text-text-sub font-normal leading-relaxed">
{`Playwright MCP로 [새 커뮤니티 URL]에서
"카피 작성" 또는 "상세페이지" 관련 글 30개를 수집해줘.
제목과 본문을 CSV로 저장.`}
        </pre>
      </div>
    </>
  );
}
