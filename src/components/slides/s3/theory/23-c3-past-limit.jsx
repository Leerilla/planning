// Source: lectures/S3/lecture.md lines 339-345 (과거의 한계 3-row 표)
// Type: comparison (한계 → 의미 inline 표)

export default function S3TheoryC3PastLimit() {
  const rows = [
    { limit: '시간 소요', meaning: 'PRD 1건에 1-2주' },
    { limit: '분석자 편향', meaning: '본인이 보고 싶은 패턴만 추출' },
    { limit: '일관성 부족', meaning: '매번 양식이 달라짐' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          과거의 한계
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        한 사람이 모두 하면 세 가지 한계가 따라온다
      </h2>

      <div className="rounded border border-line overflow-hidden max-w-4xl">
        <div className="grid grid-cols-[1fr_2fr] bg-bg-soft border-b border-line">
          <div className="px-5 py-3 text-base font-semibold text-text-sub">
            한계
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
              {r.limit}
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
