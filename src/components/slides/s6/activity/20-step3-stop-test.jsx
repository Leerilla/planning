// Source: lectures/S6/lecture.md lines 966-981
// Type: process, § 2.20.1 3-3 Stop hook 테스트 (4-step diagram)
// Profile: hierarchical logic / process visual / balanced tone

export default function S6ActivityStep3StopTest() {
  const steps = [
    {
      step: 1,
      label: "Stop hook 자동 트리거",
      description: "Step 3-2 응답 종료 신호 감지"
    },
    {
      step: 2,
      label: "git-committer 자동 호출",
      description: "@git-committer 프롬프트 실행 (hook 정의)"
    },
    {
      step: 3,
      label: "README.md 변경 자동 커밋",
      description: "git status 분석 → 커밋 메시지 작성 → push"
    },
    {
      step: 4,
      label: "GitHub에 커밋 도착",
      description: "커밋 해시 확인 (완료)"
    }
  ];

  return (
    <div className="flex flex-col gap-8 h-full">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-text mb-2">
          3-3. Stop hook 테스트
        </h2>
        <p className="text-text-sub leading-relaxed">
          응답 종료 시 자동 커밋 흐름
        </p>
      </div>

      <div className="space-y-6 flex-1">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-start gap-6">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                {step.step}
              </div>
              {idx < steps.length - 1 && (
                <div className="w-1 h-8 bg-text-sub rounded-full opacity-30" />
              )}
            </div>

            <div className="flex-1 pt-2">
              <h3 className="text-lg font-semibold tracking-tight text-text leading-snug mb-1">
                {step.label}
              </h3>
              <p className="text-sm text-text-sub leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-3 rounded-xl bg-highlight-soft p-4">
        <span className="inline-block w-1 h-5 bg-accent mt-1 rounded-full flex-shrink-0" />
        <p className="text-sm text-text-sub leading-relaxed">
          <span className="font-semibold text-text">완성: </span>
          두 hook이 한 번의 명령으로 모두 동작. 작업자는 "README에 코멘트 추가" 한 줄만 입력.
        </p>
      </div>
    </div>
  );
}
