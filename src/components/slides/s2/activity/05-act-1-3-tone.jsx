// Source: lectures/S2/lecture.md L225-233
// Type: example (활동 1-3 카피 선정 + 본인 톤 다듬기)

export default function S2Activity_1_3_Tone() {
  const steps = [
    {
      num: '1',
      title: '후보 3개 중 1개 선정',
      desc: '페르소나에 가장 잘 맞는 카피 1개 선택',
    },
    {
      num: '2',
      title: '첫 줄 후크 점검',
      desc: '본인이 보낼 때 부끄럽지 않은 표현인지 확인',
    },
    {
      num: '3',
      title: '본인 어조로 1-2줄 수정',
      desc: '핵심 후크는 보존, 어조만 본인 화법으로',
    },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-3 · 산출물: 발송 직전 카피 1건
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        AI 카피 → 본인 톤으로 다듬기
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        <span className="highlight-mark">AI가 만든 카피를 그대로 발송하지 않는다.</span> 본인 톤이 들어가지 않으면 응답자가 발신자를 신뢰하지 않는다.
      </p>

      {/* 3단계 sequential */}
      <ul className="flex flex-col gap-3 max-w-5xl">
        {steps.map((s) => (
          <li
            key={s.num}
            className="grid grid-cols-[48px_1fr] gap-4 items-center p-4 rounded-2xl border-l-4 border-accent bg-bg-soft hover:bg-success-soft hover:border-success transition-colors group"
          >
            <span className="text-accent text-2xl font-bold tabular-nums tracking-wider group-hover:text-success transition-colors">
              {s.num}
            </span>
            <div>
              <div className="text-lg font-bold text-text tracking-tight leading-snug">
                {s.title}
              </div>
              <div className="text-sm text-text-sub leading-relaxed tracking-tight mt-1">
                {s.desc}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* 결론 */}
      <div className="border-l-4 border-warning pl-5 mt-5 max-w-5xl">
        <p className="text-base font-bold text-text leading-relaxed">
          수정 후 <span className="highlight-mark">발송 직전 상태</span>까지 만든다. 실제 발송은 과제 단계에서 진행.
        </p>
      </div>
    </>
  );
}
