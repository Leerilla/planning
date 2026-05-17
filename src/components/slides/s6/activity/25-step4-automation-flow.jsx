// Source: lectures/S6/lecture.md lines 1022-1036 (#### 4-2. 자동화 흐름)
// Type: process (6-step sequential flow diagram)
// Profile: hierarchical / comparison / medium-high / balanced

export default function S6ActivityStep4AutomationFlow() {
  const steps = [
    {
      num: 1,
      label: '작업자 명령',
      detail: '명령 한 줄 입력',
    },
    {
      num: 2,
      label: '메인: 파일 작성',
      detail: 'upload.ts + ImageUploader.tsx 작성 (Write 사용)',
    },
    {
      num: 3,
      label: 'PostToolUse 훅 자동 트리거',
      detail: 'Edit|Write matcher 매칭',
    },
    {
      num: 4,
      label: 'prd-reviewer 자동 호출',
      detail: 'sub-agent 실행 (3-category 보고서)',
    },
    {
      num: 5,
      label: '응답 작성 완료',
      detail: '메인이 prd-reviewer 보고서 포함해 회신',
    },
    {
      num: 6,
      label: 'Stop 훅 + git-committer 자동화',
      detail: '자동 커밋 + 푸시, GitHub 도착',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-2 · 자동화 흐름
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        4-2. 자동화 흐름
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-6 max-w-4xl">
        한 명령으로 시작된 작업이 도구의 자동화 파이프라인 완주
      </p>

      <div className="flex flex-col gap-1 max-w-3xl">
        {steps.map((step) => (
          <div
            key={step.num}
            className="flex gap-4 border-l-4 border-accent bg-bg-soft px-6 py-2.5 rounded-r-md"
          >
            <div className="text-lg font-bold text-accent w-6 text-center shrink-0">
              {step.num}
            </div>
            <div className="flex flex-col gap-0">
              <div className="text-sm font-bold text-text leading-snug">
                {step.label}
              </div>
              <div className="text-xs font-medium text-text-sub leading-snug">
                {step.detail}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 max-w-4xl">
        <p className="text-xs font-medium text-text-sub leading-relaxed">
          작업자가 한 일은 명령 한 줄과 보고서 확인. Issue #1보다 손이 절반 이상 줄어듦.
        </p>
      </div>
    </>
  );
}
