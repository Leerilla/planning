// Source: lectures/S5/lecture.md lines 978-984 (Tips 1 콘텐츠 2 ####)
// Type: activity (2-card)

export default function S5ActivityTips1Content() {
  const tips = [
    {
      title: '화면 분석은 빌드 전 필수',
      body: 'PRD 핵심 기능은 기능 단위이지만 빌드는 화면 단위. 매핑이 명확하지 않은 채로 빌드 시작하면 매번 흔들림.',
    },
    {
      title: '화면 개수 3-5개로 제한',
      body: '본 학습 빌드 시간이 한정. 6개 이상이면 한 사이클 안에 완성 안 됨. 우선순위 낮은 화면은 다음 사이클로.',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          Tips 1 · 화면 분석 팁
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        기능 단위에서 화면 단위로
      </h2>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        {tips.map((t, i) => (
          <div key={i} className="border border-divider rounded p-5">
            <div className="text-base font-bold text-text mb-3 leading-snug">{t.title}</div>
            <p className="text-sm text-text-sub leading-relaxed">{t.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
