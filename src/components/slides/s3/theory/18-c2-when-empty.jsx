// Source: lectures/S3/lecture.md lines 291-299 (5요소가 비면 일어나는 일 5-row 표)
// Type: comparison (요소 누락 → 결과 inline 표)

export default function S3TheoryC2WhenEmpty() {
  const rows = [
    { miss: '문제 누락', result: '후속 결정의 기준점 없음' },
    { miss: '페르소나 누락', result: '기능 우선순위가 직감에 좌우' },
    { miss: '핵심 기능 누락', result: '빌드 범위 불명. 시간 초과' },
    { miss: '성공 지표 누락', result: '검증 단계에서 무엇을 측정할지 불명' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          5요소가 비면 일어나는 일
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        하나라도 비면 PRD가 메모로 전락한다
      </h2>

      <div className="rounded border border-line overflow-hidden max-w-4xl">
        <div className="grid grid-cols-[1fr_2fr] bg-bg-soft border-b border-line">
          <div className="px-5 py-3 text-base font-semibold text-text-sub">
            누락 요소
          </div>
          <div className="px-5 py-3 text-base font-semibold text-text-sub border-l border-line">
            결과
          </div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_2fr] ${i < rows.length - 1 ? 'border-b border-line' : ''}`}
          >
            <div className="px-5 py-4 text-base text-text font-medium">
              {r.miss}
            </div>
            <div className="px-5 py-4 text-base text-text-sub border-l border-line">
              {r.result}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
