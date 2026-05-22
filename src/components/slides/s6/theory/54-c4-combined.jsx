// Source: lectures/S6/lecture.md lines 598-616
// Type: process (6-step combined Task cycle)
// D-041: SVG-like connector arrows (CSS), natural language labels
// D-046: No in content text
// D11: Natural language labels only (no regex/special chars in text)
// Interactive: step-reveal sequential (6-step flow)
// Sprint core diagram: Pattern 1 + Pattern 2 combined workflow

export default function S6TheoryC4Combined() {
  const steps = [
    {
      step: 1,
      label: '작업자 명령',
      detail: '"이미지 업로드 처리 추가해줘"',
    },
    {
      step: 2,
      label: '메인: 코드 작성',
      detail: 'src/lib/upload.ts 작성 (Write 사용)',
    },
    {
      step: 3,
      label: 'PostToolUse hook 자동 트리거',
      detail: 'prd-reviewer 자동 호출',
    },
    {
      step: 4,
      label: 'prd-reviewer 보고서',
      detail: 'PRD 일치 여부 검증 완료',
    },
    {
      step: 5,
      label: '메인: 응답 작성',
      detail: 'prd-reviewer 보고서 포함',
    },
    {
      step: 6,
      label: 'Stop hook 자동 트리거',
      detail: 'git-committer 자동 커밋',
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          두 패턴 결합 메타 다이어그램
        </span>
      </div>

      {/* Title + Subtitle */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-2">
        두 패턴 결합: 한 Task 사이클
      </h2>
      <p className="text-base text-text-sub mb-8">
        명령 한 줄 입력, 코드, 검증, 커밋이 모두 자동화된 완전 자동화 사이클
      </p>

      {/* 6-step vertical flow with accent border and arrows */}
      <ul className="flex flex-col gap-0 max-w-3xl">
        {steps.map((s, i) => (
          <li key={i} className="flex flex-col items-stretch">
            {/* Step item with left accent border */}
            <div className="border-l-4 border-accent bg-bg-soft rounded-r-2xl px-7 py-5 flex gap-6 items-start">
              {/* Step number */}
              <span className="text-2xl font-bold tabular-nums tracking-wider text-accent shrink-0 w-8 text-center">
                {s.step}
              </span>

              {/* Label + Detail */}
              <div className="flex flex-col gap-2 flex-1">
                <span className="text-base font-bold tracking-tight text-text leading-snug">
                  {s.label}
                </span>
                <span className="text-sm font-medium text-text-sub tracking-tight leading-snug">
                  {s.detail}
                </span>
              </div>
            </div>

            {/* Arrow between steps (CSS arrow-down, not text) */}
            {i < steps.length - 1 ? (
              <div className="flex justify-center py-1">
                <div
                  className="w-0.5 h-3 bg-accent"
                  aria-hidden="true"
                />
              </div>
            ) : null}
          </li>
        ))}
      </ul>

      {/* Context note */}
      <p className="text-xs text-text-muted mt-8 max-w-3xl leading-relaxed">
        작업자가 명령 한 줄 입력하면 코드, PRD 검증, 커밋이 모두 도구의 일. 본 학습 자동화의 본질.
      </p>
    </>
  );
}
