export default function Warning({
  level,
  tone = 'bad', // 'bad' (안티패턴, 빨간 border) | 'good' (올바름, 초록 border)
  title,
  description,
  problem, // S2 호환 — problem을 description으로 사용
  reason, // 이유 (선택)
  personaContext, // 페르소나 (선택)
  avoidance,
  solution, // S2 호환
}) {
  const desc = description ?? problem;
  const avoid = avoidance ?? solution;

  const isBad = tone === 'bad';
  const borderColor = isBad ? 'border-danger' : 'border-success';
  const levelColor = isBad ? 'text-danger' : 'text-success';

  return (
    <div className={`flex flex-col gap-5 border-l-4 ${borderColor} pl-6 py-2`}>
      {/* Level eyebrow */}
      <span className={`${levelColor} text-sm font-semibold tracking-wider uppercase`}>
        {level ?? '주의'}
      </span>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-[1.15]">
        {title}
      </h2>

      {/* Description */}
      {desc ? (
        <p className="text-lg font-medium text-text-sub tracking-tight leading-relaxed">
          {Array.isArray(desc)
            ? desc.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))
            : desc}
        </p>
      ) : null}

      {/* Label rows — grid 고정 정렬로 라벨/텍스트 라인 통일 */}
      <div className="flex flex-col gap-3">
        {reason ? (
          <div className="rounded-2xl border border-warning bg-bg-soft p-5 grid grid-cols-[64px_1fr] gap-3 items-start">
            <span className="text-warning text-xs font-semibold tracking-wider uppercase mt-1">
              이유
            </span>
            <span className="text-base font-medium text-text tracking-tight leading-relaxed">
              {reason}
            </span>
          </div>
        ) : null}

        {personaContext ? (
          <div className="rounded-2xl border border-accent bg-bg-soft p-5 grid grid-cols-[64px_1fr] gap-3 items-start">
            <span className="text-accent text-xs font-semibold tracking-wider uppercase mt-1">
              페르소나
            </span>
            <span className="text-base font-medium text-text tracking-tight leading-relaxed">
              {personaContext}
            </span>
          </div>
        ) : null}

        {avoid ? (
          <div className={`rounded-2xl border ${isBad ? 'border-success bg-success-soft' : 'border-success bg-success-soft'} p-5 grid grid-cols-[64px_1fr] gap-3 items-start`}>
            <span className="text-success text-xs font-semibold tracking-wider uppercase mt-1">
              {isBad ? '회피' : '결과'}
            </span>
            <span className="text-base font-medium text-text tracking-tight leading-relaxed">
              {Array.isArray(avoid)
                ? avoid.map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))
                : avoid}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
