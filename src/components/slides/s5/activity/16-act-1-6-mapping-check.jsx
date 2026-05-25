// Source: lectures/S5/lecture.md lines 647-658 (1-6 화면-Task 매핑 검토)
// Type: activity (checklist 4 항목)
// T16i (2026-05-24): eyebrow "활동 1-6" → "활동 2-2" (S5 재기획: 화면-Task 매핑 검토가 Step 2 Task 설계로 이동)

export default function S5Activity_1_6_MappingCheck() {
  const items = [
    '화면 1만으로 동작 3요소 충족 가능한 구조인가',
    'Task 누락은 없는가',
    'Task가 너무 잘게 쪼개지거나 너무 크게 묶이지 않았는가',
    '의존성이 사이클을 만들지 않는가',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-2 · 산출물: 매핑 점검 완료
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        화면-Task 매핑 검토 (작업자 직접 점검)
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        4가지 기준으로 매핑 품질 점검. 화면 1 Task만으로 수직 슬라이스 첫 슬라이스 완성 여부 확인.
      </p>

      <ul className="grid grid-cols-2 gap-3 max-w-5xl">
        {items.map((item, i) => (
          <li
            key={i}
            className="grid grid-cols-[36px_28px_1fr] gap-2 items-start group p-3 rounded-xl border border-divider hover:border-accent hover:bg-bg-soft transition-colors"
          >
            <span className="text-accent text-base font-bold tabular-nums tracking-wider mt-0.5">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="flex items-center justify-center w-6 h-6 rounded-xl border-2 border-accent bg-bg-soft mt-0.5">
              <span className="inline-block w-2 h-2 rounded-full bg-accent" />
            </span>
            <span className="text-sm font-medium text-text tracking-tight leading-snug pt-0.5">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
