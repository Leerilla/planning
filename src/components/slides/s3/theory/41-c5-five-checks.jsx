// Source: lectures/S3/lecture.md lines 609-617 (PRD 검토 5개 점검 checklist)
// Type: process (numbered checklist)

export default function S3TheoryC5FiveChecks() {
  const checks = [
    '페르소나 6줄이 짧고 구체적인가',
    '핵심 기능이 3개 이하인가',
    '각 기능에 검증 가능한 성공 지표가 있는가',
    '사용자 스토리가 명시됐는가',
    '모호한 표현이 0건인가',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          PRD 검토 5개 점검
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        5개 점검을 통과한 PRD만 prd.md로 export한다
      </h2>

      <p className="text-base text-text-sub mb-6 max-w-3xl">
        5개 중 하나라도 비면 export 직전 작업자가 직접 보강한다.
      </p>

      <div className="space-y-3 max-w-3xl">
        {checks.map((c, i) => (
          <div
            key={i}
            className="flex items-start gap-4 border border-divider rounded px-5 py-4"
          >
            <span className="text-2xl font-bold text-accent leading-none mt-0.5 w-7 shrink-0">
              {i + 1}
            </span>
            <span className="text-base text-text leading-relaxed">{c}</span>
          </div>
        ))}
      </div>
    </>
  );
}
