// Source: lectures/S2/lecture.md L347-355
// Type: example (활동 3-2 회고 3 질문 — GOOD/BAD 표)

export default function S2Activity_3_2_Retrospective() {
  const questions = [
    {
      num: '1',
      question: '메타 프롬프팅 효과',
      good: '"가이드라인 3개 중 \'첫 줄 후크에 페인포인트 키워드 넣기\'가 카피를 강하게 만들었다"',
      bad: '"더 좋아진 것 같다"',
    },
    {
      num: '2',
      question: '스크래핑 패턴',
      good: '"\'정리 누락\' 키워드가 30개 중 12개 글에 등장했다"',
      bad: '"어려움이 보였다"',
    },
    {
      num: '3',
      question: '다음 단계 데이터의 양',
      good: '"능동 카피 1건 + 수동 30건 = 분석 시작 가능"',
      bad: '"조금 부족한 것 같다"',
    },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-2 · 산출물: 회고 답변 3개
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        회고 3 질문 — 좋은 답과 나쁜 답
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        <span className="highlight-mark">차이는 구체성에 있다.</span> 좋은 답은 다음 단계의 입력이 된다.
      </p>

      {/* 3 질문 × GOOD/BAD */}
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
