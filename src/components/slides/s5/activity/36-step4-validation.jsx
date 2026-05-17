// Source: lectures/S5/lecture.md lines 891-898 (Step 4 검증 기준 6 항목)
// Type: activity (checklist 6)

export default function S5ActivityStep4Validation() {
  const items = [
    '브랜치가 생성됐는가 (feat/task-1-1-input-form)',
    '위임 3원칙이 명령에 적용됐는가',
    '첫 화면 컴포넌트가 동작하는가',
    'PR이 생성됐는가 (1개 파일 수정)',
    '본인 리뷰 후 병합됐는가',
    'Issue #1이 자동 닫힘 상태인가',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-success rounded-full" />
        <span className="text-success text-sm font-semibold tracking-wider uppercase">
          Step 4 · 검증 / 성공 기준
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        Step 5 진입 가능한가
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        6개 항목 모두 통과 시 Step 5 (셀프 코드 리뷰)로 진입.
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
