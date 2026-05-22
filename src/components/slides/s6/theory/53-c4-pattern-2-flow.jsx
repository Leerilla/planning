// Source: lectures/S6/lecture.md lines 574-596
// Type: process (11-step Stop → git-committer automation flow)
// D-041: SVG-like connector arrows (CSS), natural language labels
// D-046: No in content text
// D11: Natural language labels only (no regex/special chars in text)
// Interactive: step-reveal sequential (11-step flow)
// Sprint core diagram: Pattern 2 complete workflow with accent border

export default function S6TheoryC4Pattern2Flow() {
  const steps = [
    {
      step: 1,
      label: '작업자 명령',
      detail: '"Issue #2 진행해줘"',
    },
    {
      step: 2,
      label: '메인: 파일 작성',
      detail: 'upload.ts + ImageUploader.tsx 작성',
    },
    {
      step: 3,
      label: 'PostToolUse 훅 자동 트리거',
      detail: 'Edit/Write matcher 매칭',
    },
    {
      step: 4,
      label: 'prd-reviewer 자동 호출',
      detail: 'sub-agent 실행 (보고서)',
    },
    {
      step: 5,
      label: '메인: 응답 작성 완료',
      detail: 'prd-reviewer 보고서 포함',
    },
    {
      step: 6,
      label: 'Stop 훅 자동 트리거',
      detail: '응답 종료 신호 감지',
    },
    {
      step: 7,
      label: 'git-committer 자동 호출',
      detail: 'sub-agent 실행 (자동 커밋)',
    },
    {
      step: 8,
      label: 'git status 실행',
      detail: '변경 파일 2개 감지',
    },
    {
      step: 9,
      label: 'CLAUDE.md 읽기',
      detail: '커밋 메시지 형식 확인',
    },
    {
      step: 10,
      label: '커밋 메시지 작성',
      detail: '"feat: Issue #2 이미지 업로드 처리"',
    },
    {
      step: 11,
      label: '자동 커밋 및 푸시',
      detail: 'git add → commit → push 완료',
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          핵심 패턴 2 흐름
        </span>
      </div>

      {/* Title + Subtitle */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        핵심 패턴 2: Stop → git-committer
      </h2>
      <p className="text-sm text-text-sub mb-3">
        응답 종료 시 변경 파일 자동 커밋으로 완전 자동화된 작업 사이클
      </p>

      {/* 11-step 2-column flow (좌 1-6 / 우 7-11) — 콘텐츠 크기 ↑ */}
      <div className="grid grid-cols-2 gap-4 max-w-6xl">
        {[steps.slice(0, 6), steps.slice(6, 11)].map((col, colIdx) => (
          <ul key={colIdx} className="flex flex-col gap-2">
            {col.map((s) => (
              <li
                key={s.step}
                className="border-l-4 border-accent bg-bg-soft rounded-r-md px-5 py-3 flex gap-4 items-start"
              >
                <span className="text-lg font-bold tabular-nums text-accent shrink-0 w-8 text-center">
                  {String(s.step).padStart(2, '0')}
                </span>
                <div className="flex flex-col flex-1 gap-0.5">
                  <span className="text-base font-bold text-text leading-snug">
                    {s.label}
                  </span>
                  <span className="text-sm font-medium text-text-sub leading-snug">
                    {s.detail}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div>

      <p className="text-sm text-text-sub mt-4 max-w-5xl leading-relaxed">
        작업자는 한 줄 명령만 입력. 코드 작성, PRD 검증, 자동 커밋이 모두 도구의 일.
      </p>
    </>
  );
}
