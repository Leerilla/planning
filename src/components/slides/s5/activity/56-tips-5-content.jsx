// Source: lectures/S5/lecture.md lines 1025-1035 (Tips 5 콘텐츠 3 ####)
// Type: activity (3-card)

export default function S5ActivityTips5Content() {
  const tips = [
    {
      title: 'Task 1-3개 파일, PR 1-2개 파일',
      body: '너무 큰 PR은 검토 불가. 너무 작은 PR은 운영 부하만 증가. 1-2개 파일이 검토 가능한 균형.',
    },
    {
      title: '화면 라벨로 진행 추적',
      body: 'screen-1, screen-2 라벨 등록. 화면 단위 진행 상황을 한눈에. PM이나 본인 추적 가능.',
    },
    {
      title: '수직 슬라이스로 한 화면 통째',
      body: '화면 1의 Task 4개 모두 완료 → 화면 2로. 병행하면 수평 슬라이스로 변질.',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          Tips 5 · Issue·PR 팁
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        검토 가능한 크기와 화면 단위 추적
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
