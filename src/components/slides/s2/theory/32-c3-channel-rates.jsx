// Source: lectures/S2/lecture.md lines 153-158
// Type: example (inline 4-row — 채널별 응답률)

export default function S2TheoryC3ChannelRates() {
  const channels = [
    {
      name: '이메일',
      rate: '5-10%',
      color: 'warning',
      note: '회사 메일은 더 낮고, 개인 메일은 더 높다',
    },
    {
      name: '링크드인 DM',
      rate: '10-15%',
      color: 'accent',
      note: '공통 관심사가 있으면 더 높다',
    },
    {
      name: '네이버 카페 쪽지',
      rate: '5-15%',
      color: 'accent',
      note: '카페 활성도와 카피의 자연스러움에 따라 변동',
    },
    {
      name: '디스콰이엇·인디핵커',
      rate: '15-25%',
      color: 'success',
      note: '작업자 커뮤니티 특성상 응답이 호의적',
    },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          채널별 응답률 4가지
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-5">
        채널 선택에 따라 응답률이 갈린다
      </h2>

      {/* Header */}
      <div className="grid grid-cols-[1.5fr_120px_2fr] gap-4 px-4 py-2 border-b border-divider max-w-5xl">
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase">
          채널
        </div>
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase">
          응답률
        </div>
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase">
          특징
        </div>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-2 mt-3 max-w-5xl">
        {channels.map((c, i) => {
          const colorMap = {
            success: { border: 'border-success', text: 'text-success', dot: 'bg-success' },
            accent: { border: 'border-accent', text: 'text-accent', dot: 'bg-accent' },
            warning: { border: 'border-warning', text: 'text-warning', dot: 'bg-warning' },
          }[c.color];
          return (
            <div
              key={i}
              className={`grid grid-cols-[1.5fr_120px_2fr] gap-4 items-center px-4 py-3 rounded-2xl border-l-4 ${colorMap.border} bg-bg-soft`}
            >
              <div className="text-base font-bold text-text tracking-tight leading-snug">
                {c.name}
              </div>
              <div className="flex items-center gap-2">
                <span className={`inline-block w-2.5 h-2.5 rounded-full ${colorMap.dot}`} />
                <span className={`${colorMap.text} text-base font-bold tracking-wider`}>
                  {c.rate}
                </span>
              </div>
              <div className="text-sm text-text-sub leading-relaxed tracking-tight">
                {c.note}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
