// Source: lectures/S3/lecture.md lines 118-144 (요소 1 정의·양식·예시 통합)
// Type: concept (inline 2-area — 좌 정의·목적 / 우 양식+시드 6 예시)

export default function S3TheoryC2E1Problem() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          5요소 · 1 — 문제
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        문제 — PRD의 출발점
      </h2>

      <div className="grid grid-cols-2 gap-6 max-w-6xl">
        <div className="border border-divider rounded p-6 bg-bg-soft">
          <div className="text-xs font-semibold tracking-wider uppercase text-accent mb-3">
            정의와 목적
          </div>
          <p className="text-lg text-text font-semibold mb-5 leading-relaxed border-l-2 border-accent pl-4">
            문제는 PRD의 출발점이다.
            <br />
            무엇을 위해 이 제품이 존재하는지의 핵심 질문에 답한다.
          </p>
          <ul className="space-y-2 text-base text-text-sub leading-relaxed">
            <li>· 모든 후속 결정의 기준점 제공</li>
            <li>· 빌드 중간 "이 기능이 필요한가" 판단 기준</li>
            <li>· 검증 단계 "문제가 해결됐는가" 측정 기반</li>
          </ul>
        </div>

        <div className="border border-divider rounded p-6">
          <div className="text-xs font-semibold tracking-wider uppercase text-text-sub mb-3">
            양식 + 시드 6 예시
          </div>
          <pre className="text-sm text-text-sub bg-bg-soft rounded p-3 mb-3 leading-relaxed whitespace-pre-wrap">{`[누가] {페르소나}가
[어떤 상황에서] {상황}
[어떤 어려움]을 겪는다`}</pre>
          <pre className="text-sm text-text bg-bg-soft border-l-2 border-accent rounded p-3 leading-relaxed whitespace-pre-wrap">{`[누가] 월 매출 100-500만원 1인 스마트스토어 셀러가
[어떤 상황에서] 신규 상품 등록 시
[어떤 어려움] 카피 차별화 부족으로 검색 노출 순위가 하락한다`}</pre>
        </div>
      </div>
    </>
  );
}
