// Source: lectures/S2/lecture.md L246-251
// Type: example (활동 묶음 1 검증/성공 기준)

export default function S2ActivityBundle1Validation() {
  const items = [
    '카피를 다시 읽었을 때 부끄럽지 않은가',
    '발송 채널이 페르소나가 실제 활동하는 곳인가',
    'AI 카피를 그대로 사용하지 않고 본인 톤으로 수정했는가',
    '메타 프롬프팅의 가이드라인 3개가 답변에 들어 있는가',
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-success rounded-full" />
        <span className="text-success text-sm font-semibold tracking-wider uppercase">
          활동 묶음 1 · 검증/성공 기준
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        다음 묶음 진입 가능한가
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        4개 항목 모두 통과 시 묶음 2(수동 검증)로 진입 가능.
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
