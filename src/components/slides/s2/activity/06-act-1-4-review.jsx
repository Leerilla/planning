// Source: lectures/S2/lecture.md L235-244
// Type: example (활동 1-4 메타 결과 검토 4 기준)

export default function S2Activity_1_4_Review() {
  const criteria = [
    {
      num: '01',
      title: '가이드라인 현실 반영',
      desc: '한국 시장 기반인가 / 해외 사례 그대로 옮긴 게 아닌가',
    },
    {
      num: '02',
      title: '첫 줄 후크 = 페인포인트 키워드',
      desc: '페르소나가 즉시 인식하는 단어가 첫 줄에 있는가',
    },
    {
      num: '03',
      title: '분량 100자 이내',
      desc: '모바일에서 한 화면에 들어가는 분량인가',
    },
    {
      num: '04',
      title: '부담 없는 응답 옵션',
      desc: '15분 통화 / 텍스트 답변 등 선택지가 있는가',
    },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-4 · 산출물: 검토 통과한 카피 1건
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        메타 프롬프팅 결과 검토 — 4 기준
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        4 기준으로 다듬으면 응답률이 한 단계 ↑. <span className="highlight-mark">하나라도 통과하지 않으면 다시 메타 프롬프팅으로 보강</span>.
      </p>

      {/* 4 기준 — 2x2 grid */}
      <div className="grid grid-cols-2 gap-4 max-w-5xl">
        {criteria.map((c) => (
          <div
            key={c.num}
            className="grid grid-cols-[40px_1fr] gap-3 items-start p-4 rounded-2xl border-l-4 border-accent bg-bg-soft hover:bg-success-soft hover:border-success transition-colors group"
          >
            <span className="text-accent text-base font-bold tabular-nums tracking-wider mt-0.5 group-hover:text-success transition-colors">
              {c.num}
            </span>
            <div>
              <div className="text-base font-bold text-text tracking-tight leading-snug mb-1">
                {c.title}
              </div>
              <div className="text-sm text-text-sub leading-relaxed tracking-tight">
                {c.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
