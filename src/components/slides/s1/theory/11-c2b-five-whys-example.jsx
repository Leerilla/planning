// Source: lectures/S1/lecture.md lines 105-121
// Type: example (사례: 5 Whys 회의록)
// Profile: hierarchical / comparison / medium / balanced
// Curator decision: StepGuide 폐기 → 세로 인과 흐름 (5 Whys는 sequential cause-effect)
// D-040: 패턴 적합성 — StepGuide(가로 평면) ≠ 5 Whys(세로 인과)

export default function S1TheoryC2bFiveWhysExample() {
  const steps = [
    "회의록 정리에 시간이 많이 든다",
    "발언을 다 받아쓰지 못해 영상을 다시 본다",
    "회의 중 다음 안건을 진행하느라 받아쓸 여유가 없다",
    "액션아이템과 결정사항을 그 자리에서 분류해야 한다",
    "액션아이템 누락이 다음 주 진행을 막는다",
    "누락된 아이템 재합의에 별도 회의가 필요하다",
  ];

  return (
    <>
      {/* 1. Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          사례 — 5 Whys
        </span>
      </div>

      {/* 2. Title */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-6">
        회의록 문제 깊이 파기
      </h2>

      {/* 3. Sequential flow — 세로 인과 */}
      <ul className="flex flex-col gap-2 max-w-4xl">
        {steps.map((text, i) => {
          const isFirst = i === 0;
          const isLast = i === steps.length - 1;
          return (
            <li key={i} className="flex flex-col gap-2">
              {/* Step card */}
              <div
                className={`grid grid-cols-[48px_1fr] gap-4 items-center rounded-2xl border ${
                  isFirst
                    ? 'border-warning bg-bg-soft'
                    : isLast
                      ? 'border-accent bg-success-soft'
                      : 'border-divider bg-bg-soft'
                } px-5 py-4`}
              >
                <span
                  className={`text-sm font-bold tabular-nums tracking-wider text-center ${
                    isFirst ? 'text-warning' : isLast ? 'text-accent' : 'text-text-muted'
                  }`}
                >
                  {isFirst ? '증상' : isLast ? '결론' : String(i).padStart(2, '0')}
                </span>
                <span className="text-base font-medium text-text tracking-tight leading-snug">
                  {text}
                </span>
              </div>

              {/* Connector arrow (last 제외) */}
              {!isLast ? (
                <div className="grid grid-cols-[48px_1fr] gap-4 items-center pl-0">
                  <span className="text-text-sub text-xs font-semibold tracking-wider text-center">
                     왜?
                  </span>
                  <span />
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>

      {/* 4. Conclusion */}
      <div className="border-l-4 border-accent pl-5 mt-6">
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
          진짜 문제
        </div>
        <p className="text-xl font-bold text-text tracking-tight leading-snug">
          "정리 시간"이 아니라{' '}
          <span className="text-accent">"액션아이템 누락이 만드는 재합의 비용"</span>
        </p>
      </div>
    </>
  );
}
