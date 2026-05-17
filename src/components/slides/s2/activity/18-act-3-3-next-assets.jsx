// Source: lectures/S2/lecture.md L357-365
// Type: example (활동 3-3 다음 단계 진입 자산 3개)

export default function S2Activity_3_3_NextAssets() {
  const assets = [
    {
      title: '발송 직전 상태의 메일/DM 카피 1건',
      detail: '본인 톤으로 다듬어진 발송 가능 상태 (활동 1-3 산출물)',
      seed6: '시드 6 예: 셀러스쿨 카페 1인 셀러 대상 "상품 카피 자동 생성 도구를 같이 검증해보시겠어요?" DM',
    },
    {
      title: '첫 스크래핑 CSV (30건 이상)',
      detail: 'Playwright MCP로 수집한 페르소나 커뮤니티 글 (활동 2-2 산출물)',
      seed6: '시드 6 예: 셀러스쿨·아이러브셀러 카페에서 "카피 작성" 키워드 글 30건 (제목·본문·날짜·URL)',
    },
    {
      title: '페인포인트 신호 메모 1-2개',
      detail: '키워드 패턴 + 가장 강한 글 + 가설 일치도 (활동 2-3 산출물)',
      seed6: '시드 6 예: "한 상품당 1-2시간 소요" / "차별화 카피 어려움" 키워드 빈도 + 가설 일치 신호',
    },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-3 · 산출물: 진입 자산 3개 점검 완료
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        다음 단계 진입 자산 3개
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        세 자산이 모두 손에 있으면 <span className="highlight-mark">능동 응답을 기다리는 동안 수동 데이터를 추가로 모으는 흐름</span>으로 진입할 수 있다.
      </p>

      {/* 3 자산 카드 */}
      <ul className="flex flex-col gap-3 max-w-5xl">
        {assets.map((a, i) => (
          <li
            key={i}
            className="grid grid-cols-[44px_32px_1fr] gap-4 items-start p-4 rounded-2xl border-l-4 border-success bg-success-soft hover:bg-bg-soft transition-colors group"
          >
            <span className="text-success text-xl font-bold tabular-nums tracking-wider mt-0.5">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="flex items-center justify-center w-7 h-7 rounded-xl border-2 border-success bg-bg-soft mt-0.5">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-success" />
            </span>
            <div>
              <div className="text-base font-bold text-text leading-snug tracking-tight">
                {a.title}
              </div>
              <div className="text-sm text-text-sub leading-relaxed tracking-tight mt-1">
                {a.detail}
              </div>
              <div className="text-xs text-text-muted leading-relaxed tracking-tight mt-2 border-l-2 border-accent pl-2 italic">
                {a.seed6}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* 안전망 결론 */}
      <div className="border-l-4 border-warning pl-5 mt-5 max-w-5xl">
        <p className="text-base font-bold text-text leading-relaxed">
          응답 0건이어도 수동 데이터로 분석 가능하다는 <span className="highlight-mark">두 축 안전망</span>을 항상 의식한다.
        </p>
      </div>
    </>
  );
}
