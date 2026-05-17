// Source: lectures/S2/lecture.md L313-326
// Type: example (활동 2-4 시드 5 적용 예시 — 두 축 운영 패턴)

export default function S2Activity_2_4_Seed5Example() {
  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-4 · 시드 5 적용 — 다른 시드는 어떻게 다른가
        </span>
      </div>

      {/* 흐름 도입 */}
      <div className="rounded-2xl border border-divider bg-bg-soft p-3 mb-4 max-w-5xl">
        <p className="text-sm text-text-sub leading-relaxed tracking-tight">
          <span className="font-bold text-text">2-1 ~ 2-3까지는 시드 1·6 PM/셀러 흐름을 가정했다.</span> 본인이 선택한 시드가 다르다면 채널과 키워드도 달라진다. 시드 5(동호회 총무·소모임 리더)를 비교 예로 본다.
        </p>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        시드별로 두 축 운영의 모양이 바뀐다
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        같은 두 축 — <span className="highlight-mark">페르소나 채널이 다르면 능동 통로·수동 키워드·CSV 결과가 모두 바뀐다.</span>
      </p>

      {/* 2-area: 능동 / 수동 (시드 5) */}
      <div className="grid grid-cols-2 gap-4 max-w-5xl items-stretch">
        {/* 능동 축 */}
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-5 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="text-accent text-xs font-semibold tracking-wider uppercase">
              능동 축 — 깊이
            </span>
          </div>
          <p className="text-base font-bold text-text leading-relaxed mb-3">
            네이버 카페 "동호회" 총무 글에 댓글로 짧은 인터뷰 요청
          </p>
          <ul className="flex flex-col gap-2 text-sm text-text-sub leading-relaxed flex-1">
            <li className="grid grid-cols-[20px_1fr] gap-2">
              <span className="text-accent font-bold">·</span>
              <span>인적 네트워크 모임 운영자 1-2명 — 카카오톡 직접 인터뷰</span>
            </li>
            <li className="grid grid-cols-[20px_1fr] gap-2">
              <span className="text-accent font-bold">·</span>
              <span>응답 1-3명 기대 (응답률 5-15%)</span>
            </li>
          </ul>
        </div>

        {/* 수동 축 */}
        <div className="rounded-2xl border-l-4 border-success bg-success-soft p-5 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-success" />
            <span className="text-success text-xs font-semibold tracking-wider uppercase">
              수동 축 — 폭
            </span>
          </div>
          <p className="text-base font-bold text-text leading-relaxed mb-3">
            카페 공지 글 50건 스크래핑 + 카피 패턴 분석
          </p>
          <p className="text-xs text-text-sub leading-relaxed tracking-tight whitespace-pre-line bg-bg-soft p-3 rounded-xl flex-1">
{`Playwright MCP로 네이버 카페 "동호회 총무" 게시판
최근 50개 글의 제목과 본문을 수집해 CSV로 저장해줘.`}
          </p>
        </div>
      </div>

      {/* 통합 결론 */}
      <div className="border-l-4 border-warning pl-5 mt-5 max-w-5xl">
        <p className="text-base font-bold text-text leading-relaxed">
          수집 데이터에 "공지 매번 작성 어려움" / "미참석자 follow-up 멘트 고민" 키워드가 페르소나 5줄 가설의 도구 사용(카카오톡·카페)과 <span className="highlight-mark">일치하면 페르소나가 시장의 신호와 정렬</span>된 것이다.
        </p>
      </div>
    </>
  );
}
