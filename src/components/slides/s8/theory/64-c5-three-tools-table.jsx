// Source: lectures/S8/captures/lecture.md (#### 세 도구 종합 비교표)
// Type: comparison
// Pattern: 3-row 5-col table
// D-050: lecture.md 원문 보존 (도구/비용/셋업/질문/의사결정)

export default function S8TheoryC5ThreeToolsTable() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 5 · 종합 비교
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        세 도구 종합 비교표
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-6 max-w-4xl">
        비용 + 셋업 + 질문 + 의사결정
      </p>

      {/* Table — col1(도구) + col4(질문) 콘텐츠 기준 축소 (강사 요구) */}
      <div className="w-fit overflow-hidden rounded-xl border border-divider">
        {/* Header Row */}
        <div className="grid grid-cols-[130px_120px_180px_200px_180px] bg-bg-soft px-5 py-3 border-b-2 border-divider">
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">도구</div>
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide text-center">비용</div>
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide text-center">셋업 비용</div>
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">답하는 질문</div>
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide text-center">의사결정</div>
        </div>

        {/* Data Rows */}
        {[
          {
            tool: 'Clarity',
            cost: '무료',
            setup: '코드 한 줄',
            question: '어디서 막히는가',
            decision: 'UX 개선',
          },
          {
            tool: 'Sentry',
            cost: '무료 티어 충분',
            setup: 'SDK 설치',
            question: '무슨 에러 있는가',
            decision: '버그 수정',
          },
          {
            tool: '이벤트 추적',
            cost: 'Clarity 안에서',
            setup: '코드 3-5줄',
            question: '가설 통과하는가',
            decision: 'PRD 갱신',
          },
        ].map((row, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[130px_120px_180px_200px_180px] px-5 py-4 border-b border-divider last:border-b-0"
          >
            <div className="font-bold text-accent text-sm">{row.tool}</div>
            <div className="text-center text-text-sub text-sm">{row.cost}</div>
            <div className="text-center text-sm text-text-sub">{row.setup}</div>
            <div className="text-text font-semibold text-sm">{row.question}</div>
            <div className="text-accent text-sm text-center">{row.decision}</div>
          </div>
        ))}
      </div>
    </>
  );
}
