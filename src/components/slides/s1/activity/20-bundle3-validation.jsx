// Source: lectures/S1/lecture.md lines 948-953
// Type: example (검증 기준 4 체크)

export default function S1ActivityBundle3Validation() {
  const items = [
    '옆 작업자가 1차 가설을 한 줄로 다시 말할 수 있었는가',
    '회고 3개 질문에 모두 구체적으로 답했는가',
    '다음 단계로 가져갈 가설 1개를 결정했는가',
    '다음 단계 진입 자산 3개가 손에 있는가',
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-success rounded-full" />
        <span className="text-success text-sm font-semibold tracking-wider uppercase">
          활동 묶음 3 · 검증 기준
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        실습 완료 — 과제 진입 가능한가
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        4개 항목 모두 통과 시 과제 진입 가능. 한 항목이라도 미달이면 그 항목부터 다시 채운다.
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
