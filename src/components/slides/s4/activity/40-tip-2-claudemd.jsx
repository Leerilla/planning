// Source: lectures/S4/lecture.md lines 1011-1025 (### CLAUDE.md 작성 팁)
// Type: activity (3-card — 3 #### 통합)

export default function S4Tip2Claudemd() {
  const tips = [
    {
      title: 'PRD와 CLAUDE.md의 차이',
      body: 'PRD는 무엇을, CLAUDE.md는 어떻게. 둘이 헷갈리면 자료가 부풀거나 모호해진다.',
    },
    {
      title: '1차 초안은 거칠어도 된다',
      body: '작업자가 의도를 거칠게 담는 게 1차 목적. AI가 개선·보강하는 협업 흐름. 완벽한 초안 만들려고 막히지 말 것.',
    },
    {
      title: '200줄 미만 유지',
      body: '매 명령마다 자동 로드되는 토큰. 4영역 모두 채우면서 30-50줄이 균형.',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          Tips 2 · CLAUDE.md 작성 팁
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        헌법은 거칠게 시작해 협업으로 완성한다
      </h2>

      <div className="grid grid-cols-3 gap-4 max-w-6xl">
        {tips.map((t, i) => (
          <div key={i} className="border border-line rounded p-5">
            <div className="text-base font-bold text-text mb-3 leading-snug">{t.title}</div>
            <p className="text-sm text-text-sub leading-relaxed">{t.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
