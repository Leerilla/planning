// Source: lectures/S1/lecture.md lines 905-923
// Type: example (활동 3-2 — 회고 3개 질문)

export default function S1Activity_3_2_Retrospective() {
  const questions = [
    {
      num: '1',
      question: '가장 어려웠던 부분은 무엇인가',
      good: '"페르소나 6줄 중 동기/목표를 채우는 게 어려웠다"',
      bad: '"전반적으로 어려웠다"',
    },
    {
      num: '2',
      question: '출처 검증에서 거짓이 몇 개 발견됐는가',
      good: '"2개. 통계 1개와 인용 1개"',
      bad: '"잘 모르겠다"',
    },
    {
      num: '3',
      question: '다음 단계 검증으로 가져갈 가설은 어느 1개인가',
      good: '"가설 1번(월 2만원 지불 의향)을 메일로 검증"',
      bad: '"가설 3개 다 가져간다"',
    },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-2 · 10분 · 산출물: 회고 답변 3개
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        회고 3개 질문 — 좋은 답과 나쁜 답
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        <span className="highlight-mark">좋은 답과 나쁜 답의 차이는 구체성에 있다.</span> 좋은 답은 다음 단계의 입력이 된다.
      </p>

      {/* 3 질문 × (GOOD / BAD) */}
      <div className="flex flex-col gap-3 max-w-5xl">
        {questions.map((q) => (
          <div key={q.num} className="rounded-2xl border border-divider bg-bg-soft p-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-accent text-lg font-bold tabular-nums tracking-wider">
                {q.num}
              </span>
              <span className="text-base font-bold text-text tracking-tight leading-snug">
                {q.question}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="grid grid-cols-[64px_1fr] gap-3 items-center p-3 rounded-xl border-l-4 border-success bg-success-soft">
                <span className="text-success bg-bg-soft border border-success text-xs font-semibold tracking-wider uppercase rounded-xl px-2 py-1 text-center">
                  GOOD
                </span>
                <span className="text-sm font-medium text-text leading-relaxed tracking-tight">
                  {q.good}
                </span>
              </div>
              <div className="grid grid-cols-[64px_1fr] gap-3 items-center p-3 rounded-xl border-l-4 border-danger bg-danger-soft">
                <span className="text-danger bg-bg-soft border border-danger text-xs font-semibold tracking-wider uppercase rounded-xl px-2 py-1 text-center">
                  BAD
                </span>
                <span className="text-sm font-medium text-text-sub leading-relaxed tracking-tight">
                  {q.bad}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
