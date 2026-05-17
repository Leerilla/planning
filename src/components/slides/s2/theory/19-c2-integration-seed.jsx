// Source: lectures/S2/lecture.md lines 91-93, 109
// Type: example (inline 2-area — 두 축 통합 이유 + 시드 1 운영)

export default function S2TheoryC2IntegrationSeed() {
  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          두 축 통합 — 시드 1 운영 사례
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        능동의 깊이와 수동의 폭은 서로를 보완한다
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        능동만 → 응답한 1-3명을 시장 전체로 착각. 수동만 → 글로 표현되지 않은 미묘한 페인포인트 누락.
      </p>

      {/* 2-area: 능동 / 수동 — 시드 1 적용 */}
      <div className="grid grid-cols-2 gap-4 max-w-5xl mb-5">
        {/* 능동 축 */}
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="text-accent text-xs font-semibold tracking-wider uppercase">
              능동 축 — 깊이
            </span>
          </div>
          <p className="text-base font-bold text-text leading-relaxed mb-3">
            링크드인 PM 20명에게 카피 발송
          </p>
          <ul className="flex flex-col gap-2 text-sm text-text-sub leading-relaxed">
            <li className="grid grid-cols-[20px_1fr] gap-2">
              <span className="text-accent font-bold">→</span>
              <span>응답 1-3명 기대 (응답률 5-15%)</span>
            </li>
            <li className="grid grid-cols-[20px_1fr] gap-2">
              <span className="text-accent font-bold">→</span>
              <span>응답자에게 회의록 시간 + 어려운 부분 후속 질문</span>
            </li>
            <li className="grid grid-cols-[20px_1fr] gap-2">
              <span className="text-accent font-bold">→</span>
              <span>결과: 깊은 답 <span className="font-bold text-text">1-3개</span></span>
            </li>
          </ul>
        </div>

        {/* 수동 축 */}
        <div className="rounded-2xl border-l-4 border-success bg-success-soft p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-success" />
            <span className="text-success text-xs font-semibold tracking-wider uppercase">
              수동 축 — 폭
            </span>
          </div>
          <p className="text-base font-bold text-text leading-relaxed mb-3">
            네이버 카페 "스타트업 PM 모임" 회의록 글 100건 스크래핑
          </p>
          <ul className="flex flex-col gap-2 text-sm text-text-sub leading-relaxed">
            <li className="grid grid-cols-[20px_1fr] gap-2">
              <span className="text-success font-bold">→</span>
              <span>키워드 "회의록 정리"로 검색</span>
            </li>
            <li className="grid grid-cols-[20px_1fr] gap-2">
              <span className="text-success font-bold">→</span>
              <span>공통 페인포인트 패턴 추출</span>
            </li>
            <li className="grid grid-cols-[20px_1fr] gap-2">
              <span className="text-success font-bold">→</span>
              <span>결과: 광범위한 패턴 <span className="font-bold text-text">100개</span></span>
            </li>
          </ul>
        </div>
      </div>

      {/* 통합 결과 */}
      <div className="border-l-4 border-warning pl-5 max-w-5xl">
        <p className="text-base font-bold text-text leading-relaxed">
          두 축이 합쳐지면 <span className="highlight-mark">깊은 답 1-3개 + 광범위한 패턴 100개</span>가 동시에 손에 있다.
        </p>
      </div>
    </>
  );
}
