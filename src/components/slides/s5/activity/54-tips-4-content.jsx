// Source: lectures/S5/lecture.md lines 1011-1021 (Tips 4 콘텐츠 3 ####)
// Type: activity (3-card)

export default function S5ActivityTips4Content() {
  const tips = [
    {
      title: '첫 화면 동작이면 절반은 끝',
      body: '두 번째 화면부터는 패턴 복사. 첫 화면 빌드 명령을 메모해두면 다음 단계 출발점.',
    },
    {
      title: '셀프 리뷰는 코드 의심하는 시간',
      body: 'AI가 만들었다고 그냥 통과 안 시킴. PRD와 CLAUDE.md를 직접 대조.',
    },
    {
      title: '광범위한 명령은 의도와 어긋남',
      body: '"풀스택 만들어줘" 결과는 매번 다름. 위임 3원칙으로 결과를 좁힘.',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          Tips 4 · 빌드 워크플로 팁
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        첫 화면 동작이 다음 화면의 출발점
      </h2>

      <div className="grid grid-cols-3 gap-4 max-w-6xl">
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
