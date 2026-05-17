// Source: lectures/S6/lecture.md lines 346-350 (#### hooks의 정체)
// Type: concept / definition

export default function S6TheoryC3HooksEssence() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          hooks의 정체
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        특정 시점에 자동 실행되는 작업
      </h2>

      <div className="max-w-4xl space-y-5">
        <p className="text-lg text-text leading-relaxed">
          hook은 Claude Code 동작 흐름에 끼어드는 트리거.
        </p>

        <div className="border-l-2 border-accent pl-5 py-3 bg-bg-soft">
          <p className="text-2xl font-bold text-text leading-snug">
            가장 큰 장점: 결정적(deterministic)
          </p>
          <p className="text-sm text-text-sub mt-2 italic">
            AI 해석이 아닌 코드 직접 실행
          </p>
        </div>

        <p className="text-base text-text-sub leading-relaxed italic">
          잊어버림을 방지하고 일관성을 유지하는 핵심 메커니즘.
        </p>
      </div>
    </>
  );
}
