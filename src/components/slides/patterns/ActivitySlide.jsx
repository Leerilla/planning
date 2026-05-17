// ActivitySlide — 신규 활동 슬라이드 패턴 (Phase 3 실습용)
// Props 슬롯 7개: activity_number / title / goal / procedure / checklist / duration / deliverable
// D-036 시각 마커 / D-037 prop 활용률 ≥80% / D-040 활동 콘텐츠 적합

export default function ActivitySlide({
  activity_number,   // "1-1"
  title,             // "아이디어 선택 — 시드 6번"
  goal,              // "6개 시드 중 1개를 선택한다"
  procedure = [],    // ["1단계 …", "2단계 …", …]
  checklist = [],    // ["체크 1", "체크 2", …]
  duration,          // "10분"
  deliverable,       // "선택한 시드 번호"
}) {
  // Eyebrow 조립 — "활동 N · 10분 · 산출물: …"
  const eyebrowParts = [
    activity_number ? `활동 ${activity_number}` : null,
    duration ? duration : null,
    deliverable ? `산출물: ${deliverable}` : null,
  ].filter(Boolean);

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          {eyebrowParts.join(' · ')}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-5xl font-bold tracking-tight text-text leading-[1.1] mb-6 max-w-5xl">
        {title}
      </h2>

      {/* Goal — 강조 */}
      {goal ? (
        <div className="border-l-4 border-accent pl-5 mb-6 max-w-5xl">
          <div className="text-accent text-xs font-semibold tracking-wider uppercase mb-1">
            목표
          </div>
          <p className="text-lg font-semibold text-text tracking-tight leading-relaxed">
            {goal}
          </p>
        </div>
      ) : null}

      {/* 2-col grid: 좌 진행 순서 / 우 체크리스트 */}
      <div className="grid grid-cols-2 gap-6 max-w-5xl">
        {/* 좌: 진행 순서 (numbered) */}
        {procedure.length > 0 ? (
          <div>
            <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-3">
              진행 순서
            </div>
            <ul className="flex flex-col gap-2">
              {procedure.map((step, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[28px_1fr] gap-3 items-start p-2 rounded-xl border border-divider hover:border-accent hover:bg-bg-soft transition-colors"
                >
                  <span className="text-accent text-sm font-bold tabular-nums tracking-wider mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-medium text-text tracking-tight leading-relaxed">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* 우: 체크리스트 (체크박스 dot) */}
        {checklist.length > 0 ? (
          <div>
            <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-3">
              점검 항목
            </div>
            <ul className="flex flex-col gap-2">
              {checklist.map((item, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[28px_1fr] gap-3 items-start p-2 rounded-xl border border-divider hover:border-accent hover:bg-bg-soft transition-colors"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-xl border-2 border-accent bg-bg-soft mt-0.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-accent" />
                  </span>
                  <span className="text-sm font-medium text-text tracking-tight leading-relaxed pt-1">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}
