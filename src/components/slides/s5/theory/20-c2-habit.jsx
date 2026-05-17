// Source: lectures/S5/lecture.md lines 187-197 (#### 3원칙 적용 습관 만들기)
// Type: activity (3-card 사전 점검 질문)

export default function S5TheoryC2Habit() {
  const questions = [
    {
      label: '[1]',
      text: '범위는 한 화면, 한 기능인가',
    },
    {
      label: '[2]',
      text: '결과물이 행동과 화면 변화로 명시됐는가',
    },
    {
      label: '[3]',
      text: '검증 방법이 사전에 정해졌는가',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          3원칙 적용 습관 만들기
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        모든 빌드 명령 작성 전 3개 질문
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        3개 모두 "예"면 명령 발송. 한 질문이라도 "아니오"면 명령 재작성.
      </p>

      <div className="grid grid-cols-3 gap-5 max-w-6xl">
        {questions.map((q, i) => (
          <div key={i} className="border-l-2 border-accent bg-bg-soft p-5">
            <div className="text-base font-bold text-accent mb-3">{q.label}</div>
            <p className="text-base text-text leading-relaxed">{q.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
