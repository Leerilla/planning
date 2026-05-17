// Source: lectures/S1/curation-spec.md Section 3 Visual Spec — Line 1023
// Used by: Slides 25, 26, 27 (Warning breakdown with bullet points)
// Purpose: 기존 Warning 패턴을 확장하여 긴 설명을 불릿 리스트로 분해 (강사 #4 피드백)

export default function WarningBreakdown({
  level,
  title,
  description,
  breakdownPoints,
  avoidance,
}) {
  return (
    <div className="flex flex-col gap-8 max-w-4xl border-l-4 border-danger pl-8">
      <span className="text-danger text-sm font-semibold tracking-wider uppercase">
        {level ?? '주의'}
      </span>

      <h2 className="text-5xl font-bold tracking-tight text-text leading-[1.1]">
        {title}
      </h2>

      {/* 도입 문장 (선택사항) */}
      {description ? (
        <p className="text-2xl font-medium text-text-sub tracking-tight leading-relaxed">
          {description}
        </p>
      ) : null}

      {/* 분해된 불릿 포인트 */}
      {breakdownPoints && breakdownPoints.length > 0 ? (
        <div className="flex flex-col gap-4 ml-4">
          {breakdownPoints.map((point, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              {/* 불릿 아이콘 */}
              <span className="text-danger font-bold text-lg mt-0.5 flex-shrink-0">
                •
              </span>
              {/* 불릿 텍스트 */}
              <span className="text-lg font-medium text-text tracking-tight leading-relaxed">
                {point}
              </span>
            </div>
          ))}
        </div>
      ) : null}

      {/* 회피 방법 박스 */}
      {avoidance ? (
        <div className="rounded-2xl border border-success bg-success-soft p-7 flex gap-4 items-start mt-4 transition-all duration-200 ease-out hover:shadow-xl hover:-translate-y-1">
          <span className="text-success text-sm font-semibold uppercase tracking-wider whitespace-nowrap mt-1">
            회피
          </span>
          <span className="text-xl font-medium text-text tracking-tight leading-relaxed">
            {avoidance}
          </span>
        </div>
      ) : null}
    </div>
  );
}
