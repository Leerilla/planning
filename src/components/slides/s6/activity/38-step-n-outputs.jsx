// Source: lectures/S6/lecture.md lines 1153-1160 (#### N-1. 산출물 정리)
// Type: comparison (3-column table, 9 rows)
// Profile: hierarchical / comparison / medium-high / balanced
// Emphasis: default (정보 그리드)
// S6 T11 (2026-05-24): 강사 요구 — S5~S6 실제 산출물 누락 보강 + 파일 경로 명시
//                      2열 → 3열 (산출물 / 파일 경로 / 활용), 누락된 sub-agent/settings 파일 추가

export default function S6ActivityStepNOutputs() {
  const rows = [
    {
      artifact: 'prd-reviewer 명세',
      path: '.claude/agents/prd-reviewer.md',
      usage: '자동 PRD 검증 도구 (S7+ 재사용)',
    },
    {
      artifact: 'git-committer 명세',
      path: '.claude/agents/git-committer.md',
      usage: '자동 커밋 도구 (S7+ 재사용)',
    },
    {
      artifact: 'hooks 설정',
      path: '.claude/settings.json (hooks 필드)',
      usage: '자동화 인프라 (PostToolUse + Stop)',
    },
    {
      artifact: '화면 시안 (S5)',
      path: 'docs/screen-1.png, docs/screen-2.png',
      usage: 'UI 빌드 기준 + 자동 검증 인용',
    },
    {
      artifact: 'Task 정의 (S5)',
      path: 'docs/tasks.md',
      usage: 'Issue 분할 근거 + 진행 추적',
    },
    {
      artifact: '동작하는 화면 코드',
      path: 'src/app/, src/components/, src/lib/',
      usage: 'E2E 테스트 대상 (화면 1 + 화면 2)',
    },
    {
      artifact: '자동 검증 보고서',
      path: '메인 세션 로그 (누적)',
      usage: '패턴 분석 + 다음 세션 회고',
    },
    {
      artifact: '자동 커밋 히스토리',
      path: 'git log (9+ 커밋)',
      usage: '진행 추적',
    },
    {
      artifact: '병합된 PR',
      path: 'GitHub (9개)',
      usage: '작업 완료 증거',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 N-1 · 산출물 정리
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        N-1. 산출물 정리
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        9개 산출물의 파일 경로와 다음 단계 활용처
      </p>

      <div className="max-w-6xl overflow-hidden rounded border border-divider">
        <div className="grid grid-cols-[1.2fr_1.6fr_1.6fr] bg-bg-soft px-5 py-2.5 border-b border-divider gap-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-text-sub">산출물</span>
          <span className="text-xs font-semibold uppercase tracking-wider text-text-sub">파일 경로</span>
          <span className="text-xs font-semibold uppercase tracking-wider text-text-sub">다음 단계 활용</span>
        </div>
        {rows.map((row, idx) => (
          <div
            key={row.artifact}
            className={`grid grid-cols-[1.2fr_1.6fr_1.6fr] px-5 py-2 items-center gap-4 ${
              idx === rows.length - 1 ? '' : 'border-b border-divider'
            }`}
          >
            <span className="text-sm font-semibold text-text leading-snug">{row.artifact}</span>
            <code className="text-xs font-semibold text-accent leading-snug">{row.path}</code>
            <span className="text-xs font-medium text-text-sub leading-snug">{row.usage}</span>
          </div>
        ))}
      </div>
    </>
  );
}
