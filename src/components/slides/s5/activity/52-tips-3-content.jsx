// Source: lectures/S5/lecture.md lines 1001-1007 (Tips 3 콘텐츠 2 ####)
// Type: activity (2-card)

export default function S5ActivityTips3Content() {
  const tips = [
    {
      title: '동작 3요소 챙기기',
      body: '뜸, 인터랙션, 반응. 디자인 미완성과 에러 처리 누락은 합격선과 무관.',
    },
    {
      title: 'Stitch 시안 그대로 안 옮김',
      body: '시안은 참조. 실제 구현은 본인 기술 스택에 맞게 변형.',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          Tips 3 · 동작 정의 팁
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        합격선만 챙기고 정제는 다음 단계로
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
