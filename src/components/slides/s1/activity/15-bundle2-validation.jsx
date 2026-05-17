// Source: lectures/S1/lecture.md lines 857-865
// Type: example (검증 기준 7 체크)

export default function S1ActivityBundle2Validation() {
  const items = [
    '문제 정의 5줄을 짧고 구체적으로 채웠는가',
    '"그 어려움이 만드는 결과" 칸이 채워졌는가',
    '페르소나 6줄을 채웠는가',
    '동기/목표 칸이 인구통계가 아닌 행동의 이유를 담고 있는가',
    '핵심 가설 3개가 검증 가능한 형식인가',
    '가설 3개가 1-4의 검증된 페인포인트와 매핑되는가',
    '검증 가능 채널이 명시됐는가',
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-success rounded-full" />
        <span className="text-success text-sm font-semibold tracking-wider uppercase">
          활동 묶음 2 · 검증 기준
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        다음 묶음 진입 가능한가
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        7개 항목 중 5개 이상 통과 시 활동 묶음 3으로 진입 가능.
      </p>

      <ul className="grid grid-cols-2 gap-2 max-w-5xl">
        {items.map((item, i) => (
          <li
            key={i}
            className="grid grid-cols-[36px_28px_1fr] gap-2 items-start group p-2.5 rounded-xl border border-divider hover:border-success hover:bg-success-soft transition-colors"
          >
            <span className="text-accent text-sm font-bold tabular-nums tracking-wider mt-0.5 transition-colors group-hover:text-success">
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
