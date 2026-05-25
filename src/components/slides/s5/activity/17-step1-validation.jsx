// Source: lectures/S5/lecture.md lines 660-666 + 재기획 (T16b 2026-05-24)
// Type: activity (checklist 5 항목 — 화면 설계 종합)
// T16b: Task 검증 → Step 2로 분리. Step 1은 화면 설계 5축(도출/첫 화면/prompt.md/Stitch 시안/docs 배치) 검증

export default function S5ActivityStep1Validation() {
  const items = [
    'PRD 핵심 기능 3개에서 화면 2-3개가 도출됐는가',
    '첫 화면이 결정됐는가',
    'docs/prompt.md에 화면별 Stitch 프롬프트가 작성됐는가',
    'Stitch 시안이 생성·검토되고 Export까지 완료됐는가',
    'docs/screen-*.png 배치 + claude.md 지침 강화까지 정리됐는가',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-success rounded-full" />
        <span className="text-success text-sm font-semibold tracking-wider uppercase">
          Step 1 · 검증 / 성공 기준
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        Step 2 진입 가능한가
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        5개 항목 모두 통과 시 Step 2 (Task 설계)로 진입.
      </p>

      <ul className="grid grid-cols-2 gap-3 max-w-5xl">
        {items.map((item, i) => (
          <li
            key={i}
            className="grid grid-cols-[36px_28px_1fr] gap-2 items-start group p-3 rounded-xl border border-divider hover:border-success hover:bg-success-soft transition-colors"
          >
            <span className="text-accent text-base font-bold tabular-nums tracking-wider mt-0.5 transition-colors group-hover:text-success">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="flex items-center justify-center w-6 h-6 rounded-xl border-2 border-accent bg-bg-soft group-hover:border-success mt-0.5 transition-colors">
              <span className="inline-block w-2 h-2 rounded-full bg-accent group-hover:bg-success transition-colors" />
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
