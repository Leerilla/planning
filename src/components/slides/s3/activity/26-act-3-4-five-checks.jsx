// Source: lectures/S3/lecture.md lines 1085-1093 (3-4 PRD 검토 5개 점검 checklist)
// Type: activity (checklist 5 항목)
// D-044 §3.3: prd.md 양식 SSOT 적용

export default function S3Activity_3_4_FiveChecks() {
  const checks = [
    '페르소나 6줄이 짧고 구체적인가',
    '핵심 기능이 3개 이하인가',
    '각 기능에 검증 가능한 성공 지표가 있는가',
    '사용자 스토리가 명시됐는가',
    '모호한 표현이 0건인가',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-4 · 산출물: 5개 점검 통과한 prd.md
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        PRD 검토 5개 점검
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        다시 읽으며 5개 점검 통과 확인. <span className="highlight-mark">하나라도 비면</span> 다시 Manyfast로 돌아가 보강.
      </p>

      <div className="space-y-3 max-w-3xl">
        {checks.map((c, i) => (
          <div
            key={i}
            className="flex items-start gap-4 border border-divider rounded px-5 py-3.5"
          >
            <span className="text-xl font-bold text-accent leading-none mt-0.5 w-7 shrink-0">
              {i + 1}
            </span>
            <span className="text-base text-text leading-relaxed">{c}</span>
          </div>
        ))}
      </div>
    </>
  );
}
