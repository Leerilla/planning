// Source: lectures/S6/lecture.md lines 598-616
// Type: process (6-step combined Task cycle)
// D-041: SVG-like connector arrows (CSS), natural language labels
// D-046: No in content text
// D11: Natural language labels only (no regex/special chars in text)
// S6 T14a (2026-05-24): 강사 요구 — 화면 겹침 → 한 줄 grid 컴팩트화 (#48/#53 패턴)
//                       .ts → .js (S3+ JS 프로젝트 일관성)

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
      detail: 'src/lib/upload.js 작성 (Write 사용)',
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
      <div className="flex items-center gap-3 mb-2">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          두 패턴 결합 메타 다이어그램
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        두 패턴 결합: 한 Task 사이클
      </h2>
      <p className="text-sm text-text-sub mb-3">
        명령 한 줄 입력, 코드, 검증, 커밋이 모두 자동화된 완전 자동화 사이클
      </p>

      <ul className="flex flex-col gap-1 max-w-5xl">
        {steps.map((s) => (
          <li
            key={s.step}
            className="border-l-4 border-accent bg-bg-soft rounded-r grid grid-cols-[28px_220px_1fr] gap-3 items-center px-4 py-1.5"
          >
            <span className="text-sm font-bold tabular-nums text-accent text-center">
              {s.step}
            </span>
            <span className="text-sm font-bold text-text leading-snug">
              {s.label}
            </span>
            <span className="text-xs font-medium text-text-sub leading-snug">
              {s.detail}
            </span>
          </li>
        ))}
      </ul>

      <p className="text-xs text-text-muted mt-3 max-w-4xl leading-relaxed">
        작업자가 명령 한 줄 입력하면 코드, PRD 검증, 커밋이 모두 도구의 일. 본 학습 자동화의 본질.
      </p>
    </>
  );
}
