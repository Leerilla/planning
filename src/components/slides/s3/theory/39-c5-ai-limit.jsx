// Source: lectures/S3/lecture.md lines 594-602 (AI 자동 검토의 한계 3-row 표)
// Type: comparison (한계 → 의미 inline 표)

export default function S3TheoryC5AiLimit() {
  const rows = [
    { limit: '의도 구분 불가', meaning: '의도한 모호함과 의도하지 않은 모호함 구분 못 함' },
    { limit: '맥락 무시', meaning: '페르소나 특수성 반영 못 함' },
    { limit: '놓치는 모호함', meaning: '표면적 모호함만 잡고 깊은 모호함 놓침' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          AI 자동 검토의 한계
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        Manyfast의 AI 검토는 보조일 뿐이다
      </h2>

      <p className="text-base text-text-sub mb-6 max-w-3xl">
        누락·모호 표현은 지적해 주지만, 다음 세 가지를 놓친다.
      </p>

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
