// Source: lectures/S1/lecture.md lines 306-319
// Type: example (AI 가능 vs 못함 비교)
// D-040: 좌우 비교  inline grid-cols-2 + 결론 메시지

export default function S1TheoryC2AiPersonaLimit() {
  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          AI 위임의 한계
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-2">
        AI는 평균을 만든다
      </h2>
      <p className="text-base text-text-sub mb-8">
        AI에게 페르소나 묘사를 맡기지 않는다.
      </p>

      {/* 좌우 비교 */}
      <div className="grid grid-cols-2 gap-6 max-w-5xl">
        <div className="rounded-2xl border border-divider bg-bg-soft p-6 flex flex-col gap-3">
          <span className="text-text-muted text-sm font-semibold tracking-wider uppercase">
            AI가 만들 수 있는 것
          </span>
          <p className="text-lg text-text leading-snug">
            "30대 직장인의 평균적인 하루"
          </p>
          <span className="text-sm text-text-muted">
             인구통계 평균, 사용자 1명 그려지지 않음
          </span>
        </div>

        <div className="rounded-2xl border border-accent bg-success-soft p-6 flex flex-col gap-3">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            AI가 못 만드는 것
          </span>
          <p className="text-lg text-text leading-snug">
            "한 주 5회 줌 미팅을 하는 5-30인 스타트업 PM이 회의 직후 어떤 동기로 어떤 행동을 하는가"
          </p>
          <span className="text-sm text-text-muted">
             행동 · 동기 · 맥락 세 축의 구체 페르소나
          </span>
        </div>
      </div>

      {/* Conclusion */}
      <div className="border-l-4 border-accent pl-5 mt-6 max-w-5xl">
        <p className="text-lg text-text leading-snug">
          페르소나는 <span className="text-accent font-bold">행동 · 동기 · 맥락 세 축</span>으로 묘사된다. 셋 중 <span className="text-accent font-bold">동기</span>가 가장 자주 빠진다.
        </p>
      </div>
    </>
  );
}
