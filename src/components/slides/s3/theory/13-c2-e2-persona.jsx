// Source: lectures/S3/lecture.md lines 146-178 (요소 2 정의·양식·예시 통합)
// Type: concept (inline 2-area)

export default function S3TheoryC2E2Persona() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          5요소 · 2 — 페르소나
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        페르소나 — 문제를 겪는 사용자의 구체적 윤곽
      </h2>

      <div className="grid grid-cols-2 gap-6 max-w-6xl">
        <div className="border border-line rounded p-6 bg-bg-soft">
          <div className="text-xs font-semibold tracking-wider uppercase text-accent mb-3">
            정의와 목적
          </div>
          <p className="text-lg text-text font-semibold mb-5 leading-relaxed border-l-2 border-accent pl-4">
            이전 단계 가설 페르소나 6줄이 그대로 들어간다.
          </p>
          <ul className="space-y-2 text-base text-text-sub leading-relaxed">
            <li>· 기능 우선순위 결정 시 "이 페르소나가 쓸까" 기준</li>
            <li>· UI/UX 결정 시 페르소나 환경 점검</li>
            <li>· 검증 인터뷰 대상 선정 기준</li>
          </ul>
        </div>

        <div className="border border-line rounded p-6">
          <div className="text-xs font-semibold tracking-wider uppercase text-text-sub mb-3">
            6줄 양식 + 시드 6 예시
          </div>
          <pre className="text-sm text-text bg-bg-soft border-l-2 border-accent rounded p-3 leading-relaxed whitespace-pre-wrap">{`- 직군/역할: 월 매출 100-500만원 1인 스마트스토어 셀러
- 환경 조건: 한 달 신규 상품 5-20개 등록, 본업 병행
- 도구 사용: 스마트스토어 센터, 포토샵/캔바, 데이터랩
- 동기/목표: 광고비 의존도 낮추고 매출 다각화
- 페인포인트 빈도: 주 3-5건 등록 → 주 5-10시간 소요
- 검증 가능 채널: 네이버 카페 셀러스쿨, 셀러허브`}</pre>
        </div>
      </div>
    </>
  );
}
