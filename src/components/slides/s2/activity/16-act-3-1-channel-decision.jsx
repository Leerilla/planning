// Source: lectures/S2/lecture.md L337-346
// Type: example (활동 3-1 발송 채널 결정 + 발송 직전 점검)

export default function S2Activity_3_1_ChannelDecision() {
  const checks = [
    {
      num: '01',
      title: '첫 줄 후크 자연스러움',
      desc: '본인이 받았을 때도 클릭하고 싶은 표현인지 확인',
    },
    {
      num: '02',
      title: '발송 대상 이름 오류 X',
      desc: '템플릿 변수가 그대로 남아 있거나 다른 사람 이름이 섞이지 않았는지 확인',
    },
    {
      num: '03',
      title: '응답 알림 설정',
      desc: '본인 메일/메신저에 즉시 알림이 오도록 설정 — 24시간 안 답변',
    },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-1 · 산출물: 발송 직전 상태의 카피 1건
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        발송 채널 확정 + 발송 직전 점검
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        <span className="highlight-mark">실제 발송은 본 학습 시간 안에 진행하지 않는다.</span> 발송 직전 상태까지만 준비하고, 본인 페이스로 과제 단계에서 발송한다.
      </p>

      {/* 발송 직전 점검 3 — numbered list */}
      <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-3">
        발송 직전 점검 3
      </div>
      <ul className="flex flex-col gap-3 max-w-5xl">
        {checks.map((c) => (
          <li
            key={c.num}
            className="grid grid-cols-[48px_1fr] gap-4 items-center p-4 rounded-2xl border-l-4 border-accent bg-bg-soft hover:bg-success-soft hover:border-success transition-colors group"
          >
            <span className="text-accent text-xl font-bold tabular-nums tracking-wider group-hover:text-success transition-colors">
              {c.num}
            </span>
            <div>
              <div className="text-lg font-bold text-text tracking-tight leading-snug">
                {c.title}
              </div>
              <div className="text-sm text-text-sub leading-relaxed tracking-tight mt-1">
                {c.desc}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
