// Source: lectures/S4/lecture.md lines 807-812 (Step 2 검증 기준 4)
// Type: activity (checklist)

export default function S4ActivityStep2Validation() {
  const items = [
    'docs/ 폴더가 PRD 기반 문서 3개를 담고 있는가',
    'rules/ 폴더가 3개 파일로 구성됐는가',
    'CLAUDE.md에 시스템 설계 참조 지침이 명시됐는가',
    '디자인 가이드는 다음 단계로 미뤄졌는가',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-success rounded-full" />
        <span className="text-success text-sm font-semibold tracking-wider uppercase">
          Step 2 · 검증 / 성공 기준
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        Step 3 진입 가능한가
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        4개 항목 모두 통과 시 Step 3 (settings.json + Permissions)로 진입.
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
