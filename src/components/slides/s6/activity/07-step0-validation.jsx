// Source: lectures/S6/lecture.md lines 727-731 (Step 0 검증 기준 3 항목)
// Type: activity (checklist 3 항목)

export default function S6ActivityStep0Validation() {
  const items = [
    'planning_project 폴더에서 작업 중인가',
    '자료 5 산출물 5개가 모두 있는가',
    '/cost 베이스라인을 메모했는가',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-success rounded-full" />
        <span className="text-success text-sm font-semibold tracking-wider uppercase">
          Step 0 · 검증 / 성공 기준
        </span>
      </div>

      <h2 className="text-5xl font-bold tracking-tight text-text leading-snug mb-2">
        다음 Step 진입 가능한가
      </h2>
      <p className="text-lg font-medium text-text-sub tracking-tight leading-relaxed mb-8 max-w-4xl">
        3개 항목 모두 통과 시 Step 1 (prd-reviewer sub-agent 작성)로 진입.
      </p>

      <ul className="flex flex-col gap-4 max-w-4xl">
        {items.map((item, i) => (
          <li
            key={i}
            className="grid grid-cols-[48px_36px_1fr] gap-4 items-center group p-5 rounded-xl border border-divider hover:border-success hover:bg-success-soft transition-colors"
          >
            <span className="text-accent text-2xl font-bold tabular-nums tracking-wider transition-colors group-hover:text-success">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="flex items-center justify-center w-9 h-9 rounded-xl border-2 border-accent bg-bg-soft group-hover:border-success transition-colors">
              <span className="inline-block w-3 h-3 rounded-full bg-accent group-hover:bg-success transition-colors" />
            </span>
            <span className="text-lg font-semibold text-text tracking-tight leading-snug">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
