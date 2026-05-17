// Source: lectures/S8/captures/lecture.md L35-53 (자동 매핑, concept with warning flow)
// Type: ConceptSlide

export default function S8TheoryC1BeNeed() {
  return (
    <div className="flex flex-col gap-8 h-full justify-center">
      {/* Header marker + label */}
      <div className="flex items-baseline gap-3">
        <span className="h-1 w-12 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          이론 1 · BE의 존재 이유
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-text">본 학습에서 BE가 필요한 이유</h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub max-w-3xl leading-relaxed">
        시드 6개 모두 LLM API 호출 핵심 기능 보유 — 핵심 위험
      </p>

      {/* Warning flow steps (vertical) */}
      <div className="flex flex-col gap-3 max-w-3xl">
        {[
          'FE에서 직접 LLM API 호출',
          'API 키가 브라우저 코드에 노출',
          '누구나 개발자 도구로 코드 조회 가능',
          '봇이 키 발견 → 무한 호출',
          '다음 달 청구서 폭발',
        ].map((step, index) => (
          <div
            key={index}
            className="border-l-4 border-warning bg-warning-soft rounded-r-2xl px-5 py-3 flex items-center gap-3"
          >
            <span className="w-8 h-8 rounded-full bg-warning text-bg flex items-center justify-center font-bold shrink-0 text-sm">
              {index + 1}
            </span>
            <span className="text-base text-text leading-relaxed">{step}</span>
          </div>
        ))}
      </div>

      {/* Aside note */}
      <div className="border-l-4 border-divider bg-bg-soft rounded-r-2xl px-6 py-3 max-w-4xl mt-2">
        <p className="text-sm text-text leading-relaxed">
          시드 6번 시나리오: 셀러 1명이 카피 1회 생성하면 토큰 수천 개. 봇이 1초당 100번 호출하면 시간당 36만 회 + API 비용 폭발.
        </p>
      </div>
    </div>
  );
}
