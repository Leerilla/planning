// Source: lectures/S6/lecture.md lines 948-965
// Type: process, § 2.20.1 3-2 PostToolUse hook 테스트 (4-step diagram)
// Profile: hierarchical logic / process visual / balanced tone

export default function S6ActivityStep3PostTest() {
  const steps = [
    {
      step: 1,
      label: "메인이 Edit 도구로 README.md 수정",
      description: "작은 코드 수정 명령 (파일 변경 감지)"
    },
    {
      step: 2,
      label: "PostToolUse hook 자동 트리거",
      description: "Edit 도구 종료 후 hook 감지 (수정 확인)"
    },
    {
      step: 3,
      label: "prd-reviewer 자동 호출",
      description: "@prd-reviewer 프롬프트 실행 (hook 정의)"
    },
    {
      step: 4,
      label: "보고서 메인 세션에 표시",
      description: "검증 완료 보고서 출력 (호출 완료)"
    }
  ];

  return (
    <div className="flex flex-col gap-8 h-full">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-text mb-2">
          3-2. PostToolUse hook 테스트
        </h2>
        <p className="text-text-sub leading-relaxed">
          Edit 도구 후 자동 검증 흐름
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

      <div className="flex items-start gap-3 rounded-xl bg-accent-soft p-4">
        <span className="inline-block w-1 h-5 bg-accent mt-1 rounded-full flex-shrink-0" />
        <p className="text-sm text-text-sub leading-relaxed">
          <span className="font-semibold text-text">결과: </span>
          한 번의 수정 명령이 자동 검증까지 완성. 검증 보고서 즉시 표시.
        </p>
      </div>
    </div>
  );
}
