// Source: lectures/S6/lecture.md lines 498-517
// Type: process (7-step PostToolUse → prd-reviewer flow)
// D-041: Sequential flow arrow (CSS arrow, text natural language)
// D-046: No in content text
// D11: Natural language labels only (no regex/special chars in text)
// S6 T4 (2026-05-24): 강사 요구 — 높이 화면 초과 + 다이어그램 정확성 확인
//                     → 한 줄 grid 형태로 컴팩트화, upload.ts → upload.js (S3+ JS 프로젝트)

export default function S6TheoryC4Pattern1Flow() {
  const steps = [
    {
      step: 1,
      label: '작업자 명령',
      detail: '"이미지 업로드 처리 추가해줘"',
    },
    {
      step: 2,
      label: '메인: 파일 작성',
      detail: 'src/lib/upload.js 작성 (Write 사용)',
    },
    {
      step: 3,
      label: 'PostToolUse hook 자동 트리거',
      detail: 'Edit, Write matcher 매칭',
    },
    {
      step: 4,
      label: 'prd-reviewer 자동 호출',
      detail: 'sub-agent 실행 (3-category 보고서)',
    },
    {
      step: 5,
      label: 'PRD 일치 검증',
      detail: 'docs/prd.md 읽기 + upload.js 분석',
    },
    {
      step: 6,
      label: '일치/불일치 보고',
      detail: '보고서 메인 세션에 표시',
    },
    {
      step: 7,
      label: '작업자 결정',
      detail: '필요한 부분 수정 또는 승인',
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          핵심 패턴 1 흐름
        </span>
      </div>

      {/* Title + Subtitle */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        핵심 패턴 1: PostToolUse → prd-reviewer
      </h2>
      <p className="text-sm text-text-sub mb-3">
        코드 수정마다 PRD 일치 여부 자동 보고
      </p>

      {/* 7-step compact horizontal grid rows */}
      <ul className="flex flex-col gap-1 max-w-5xl">
        {steps.map((s, i) => (
          <li
            key={i}
            className="border-l-4 border-accent bg-bg-soft rounded-r grid grid-cols-[28px_180px_1fr] gap-3 items-center px-4 py-1.5"
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

      <p className="text-xs text-text-muted mt-2 max-w-3xl leading-relaxed">
        각 단계의 결과가 다음 단계의 입력. 작업자 개입 없이 자동 보고서 생성.
      </p>
    </>
  );
}
