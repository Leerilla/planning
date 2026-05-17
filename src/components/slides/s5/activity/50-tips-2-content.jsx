// Source: lectures/S5/lecture.md lines 988-997 (Tips 2 콘텐츠 2 ####)
// Type: activity (2-card)

export default function S5ActivityTips2Content() {
  const tips = [
    {
      title: '모든 빌드 명령에 적용',
      body: '한 번 익히면 본 학습 내내 반복 사용. 본 학습 후에도 평생 쓸 수 있는 사고 방식.',
    },
    {
      title: '3개 질문 습관',
      body: '명령 작성 전 매번: 범위가 한 화면·한 기능인가 / 결과물이 명시됐는가 / 검증 방법이 사전에 정해졌는가.',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          Tips 2 · 위임 3원칙 팁
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        매 명령 전 3개 질문 습관화
      </h2>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
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
