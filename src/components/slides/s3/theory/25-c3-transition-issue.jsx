// Source: lectures/S3/lecture.md lines 353-364 (과도기의 새로운 문제 4-row 표)
// Type: comparison (문제 → 의미 inline 표)

export default function S3TheoryC3TransitionIssue() {
  const rows = [
    { issue: '환각', meaning: '자료에 없는 내용을 LLM이 만들어냄' },
    { issue: '출처 불분명', meaning: '어떤 데이터에서 그 결론이 나왔는지 추적 불가' },
    { issue: '양식 불일치', meaning: '같은 LLM도 매번 다른 양식' },
    { issue: '맥락 혼합', meaning: 'LLM 학습 데이터와 본인 데이터가 섞임' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          과도기의 새로운 문제
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        일반 LLM은 분석을 위해 만들어진 도구가 아니다
      </h2>

      <p className="text-base text-text-sub mb-6 max-w-3xl">
        "78%가 카피에 30분을 쓴다" 같은 통계가 환각으로 만들어져 PRD로 옮겨지는 사고가 잦았다.
      </p>

      <div className="rounded border border-line overflow-hidden max-w-4xl">
        <div className="grid grid-cols-[1fr_2fr] bg-bg-soft border-b border-line">
          <div className="px-5 py-3 text-base font-semibold text-text-sub">
            문제
          </div>
          <div className="px-5 py-3 text-base font-semibold text-text-sub border-l border-line">
            의미
          </div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_2fr] ${i < rows.length - 1 ? 'border-b border-line' : ''}`}
          >
            <div className="px-5 py-4 text-base text-text font-medium">
              {r.issue}
            </div>
            <div className="px-5 py-4 text-base text-text-sub border-l border-line">
              {r.meaning}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
