// Source: lectures/S2/lecture.md L282-289 + 자연어 리서치 흐름 보강
// Type: example (활동 2-2 자연어 리서치 명령 + Playwright 자동화 흐름)
// 2026-05-12 신규 — s10 셋업 다음 단계, 실제 리서치 흐름 명시

export default function S2Activity_2_2b_ResearchFlow() {
  const flow = [
    {
      num: '1',
      title: '자연어 명령 입력',
      desc: 'Claude Code 세션에 "Playwright MCP로 ~ 수집해줘"를 입력',
    },
    {
      num: '2',
      title: 'Playwright가 브라우저 실행',
      desc: 'Claude가 MCP를 호출 → 백그라운드에서 Chromium 띄움',
    },
    {
      num: '3',
      title: '페이지 자동 탐색 + 데이터 추출',
      desc: 'URL 이동 → 검색어 입력 → 글 목록 순회 → 제목·본문·URL 추출',
    },
    {
      num: '4',
      title: 'CSV 저장 + 결과 보고',
      desc: '작업 폴더에 CSV 생성 → Claude가 "30건 수집 완료" 보고',
    },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-2 · 리서치 · 산출물: 페르소나 글 30건 CSV
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        자연어 명령 → Playwright가 자동화한다
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        <span className="highlight-mark">테스트 코드를 직접 작성하지 않는다.</span> 셋업이 끝난 상태(s10)에서 자연어 한 줄이면 브라우저 자동화 + 데이터 추출 + 저장까지 완료된다.
      </p>

      {/* 자연어 명령 양식 + 시드 적용 — 2-col */}
      <div className="grid grid-cols-2 gap-3 mb-4 max-w-5xl">
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-accent text-xs font-semibold tracking-wider uppercase mb-3">
            빈 명령 양식
          </div>
          <p className="text-base font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`Playwright MCP를 사용해서 [커뮤니티 URL]
검색 결과 상위 30개 글의 제목·본문을
CSV로 저장해줘.`}
          </p>
        </div>
        <div className="rounded-2xl border-l-4 border-success bg-success-soft p-4">
          <div className="text-success text-xs font-semibold tracking-wider uppercase mb-3">
            시드 6 적용 · 1인 셀러 카피
          </div>
          <p className="text-base font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`Playwright MCP로 네이버 카페
"셀러스쿨" 카피 작성 키워드 상위
30개 글의 제목·본문을 CSV로 저장해줘.`}
          </p>
        </div>
      </div>

      {/* 자동화 흐름 4-step */}
      <div className="max-w-5xl">
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
          명령 입력 → Playwright 자동화 흐름
        </div>
        <ul className="grid grid-cols-4 gap-2">
          {flow.map((s, i) => (
            <li
              key={s.num}
              className="rounded-xl border-l-4 border-accent bg-bg-soft p-3 hover:bg-success-soft hover:border-success transition-colors group flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-accent text-base font-bold tabular-nums tracking-wider group-hover:text-success transition-colors">
                  {s.num}
                </span>
                <span className="text-sm font-bold text-text tracking-tight leading-tight">
                  {s.title}
                </span>
              </div>
              <p className="text-xs text-text-sub leading-relaxed tracking-tight">
                {s.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
