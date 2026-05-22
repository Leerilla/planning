// Source: lectures/S3/lecture.md lines 619-625 (MVP 핵심 기능 3-row 표)
// Type: comparison (기능 개수 × 평가)
// D-035: lecture.md의 ❌/✅ emoji 제거 → "X 부적정" / "OK 적정" 텍스트

export default function S3TheoryC5Mvp() {
  const rows = [
    { count: '1개', verdict: '부적정', reason: '검증 단위 너무 작음', tone: 'bad' },
    { count: '2-3개', verdict: '적정', reason: '균형 잡힌 빌드 범위', tone: 'good' },
    { count: '4개 이상', verdict: '부적정', reason: '빌드 시간 부족', tone: 'bad' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          MVP의 핵심 기능 3개
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        MVP의 적정 기능 개수
      </h2>

      <div className="rounded border border-divider overflow-hidden max-w-4xl">
        <div className="grid grid-cols-[1fr_1fr_2fr] bg-bg-soft border-b border-divider">
          <div className="px-5 py-3 text-base font-semibold text-text-sub">
            기능 개수
          </div>
          <div className="px-5 py-3 text-base font-semibold text-text-sub border-l border-divider">
            평가
          </div>
          <div className="px-5 py-3 text-base font-semibold text-text-sub border-l border-divider">
            이유
          </div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_1fr_2fr] ${i < rows.length - 1 ? 'border-b border-divider' : ''}`}
          >
            <div className="px-5 py-4 text-base text-text font-bold">
              {r.count}
            </div>
            <div className={`px-5 py-4 text-base font-medium border-l border-divider ${r.tone === 'good' ? 'text-accent' : 'text-text-sub'}`}>
              {r.verdict}
            </div>
            <div className="px-5 py-4 text-base text-text-sub border-l border-divider">
              {r.reason}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
