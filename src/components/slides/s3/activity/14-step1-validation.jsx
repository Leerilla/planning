// Source: lectures/S3/lecture.md lines 878-884 (Step 1 검증 기준 5 항목)
// Type: activity (checklist 5 항목)

export default function S3ActivityStep1Validation() {
  const items = [
    '페인포인트 5개 이상 추출했는가',
    '인용 1개 이상 클릭해 검증했는가',
    '거짓 인용 발견했는지 확인했는가',
    '현재 대안 1-3개를 파악했는가',
    '핵심 페인포인트 1개를 결정했는가',
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
        5개 항목 모두 통과 시 Step 2 (Manyfast PRD 초안 생성)로 진입.
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
