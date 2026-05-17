// Source: lectures/S4/lecture.md lines 1027-1035 (### AI 검증 루프 팁)
// Type: activity (2-card)

export default function S4Tip3Verify() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          Tips 3 · AI 검증 루프 팁
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        AI 답변이 모호 신호를 알려준다
      </h2>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div className="border border-line rounded p-5">
          <div className="text-xs uppercase tracking-wider text-accent mb-2">
            AI 답변이 매번 다르면 모호 신호
          </div>
          <p className="text-base text-text leading-relaxed">
            AI가 일관된 답을 못 한다는 건 컨텍스트가 흐릿하다는 뜻. "어느 영역이 가장 모호한가"를 AI에 직접 질문.
          </p>
        </div>

        <div className="border border-line rounded p-5">
          <div className="text-xs uppercase tracking-wider text-accent mb-2">
            답변이 의도와 다르면 못 짚은 부분이 모호
          </div>
          <p className="text-base text-text leading-relaxed">
            AI가 페르소나를 못 짚으면 1영역 모호. 핵심 기능 못 짚으면 핵심 기능 영역 모호.
          </p>
        </div>
      </div>
    </>
  );
}
