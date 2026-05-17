// Source: lectures/S6/lecture.md lines 149-155 (#### sub-agent의 정체)
// Type: concept / definition

export default function S6TheoryC2SubagentEssence() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          sub-agent의 정체
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        특정 역할을 가진 별도 에이전트
      </h2>

      <div className="max-w-4xl space-y-5">
        <p className="text-lg text-text leading-relaxed">
          sub-agent는 메인과 다른 컨텍스트로 일하고 요약만 메인에 반환.
        </p>

        <div className="border-l-2 border-accent pl-5 py-3 bg-bg-soft">
          <p className="text-2xl font-bold text-text leading-snug">
            메인은 PM, sub-agent는 PM이 부르는 전문가
          </p>
          <p className="text-sm text-text-sub mt-2 italic">
            (코드 리뷰어, 커밋 작성자)
          </p>
        </div>

        <p className="text-base text-text-sub leading-relaxed italic">
          독립적인 컨텍스트 안에서 전문성을 발휘하고, 메인은 그 결과를 받아 다음 단계로 진행.
        </p>
      </div>
    </>
  );
}
