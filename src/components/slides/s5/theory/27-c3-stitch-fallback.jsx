// Source: lectures/S5/lecture.md lines 263-274 (#### Stitch 폴백 도구)
// Type: example (table 2행)

export default function S5TheoryC3StitchFallback() {
  const rows = [
    { name: 'v0', url: 'vercel.com/v0', note: 'Vercel 제공' },
    { name: 'Lovable', url: 'lovable.dev', note: 'UI 시안 + 코드' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          Stitch 폴백 도구
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        Stitch가 막혔을 때의 대안
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        Google Labs의 실험 서비스라 가용성 변동. 폴백 사용법은 자가 학습 영역.
      </p>

      <div className="rounded border border-divider overflow-hidden max-w-4xl">
        <div className="grid grid-cols-[1fr_1.4fr_1.6fr] bg-bg-soft border-b border-divider">
          <div className="px-5 py-3 text-sm font-semibold uppercase tracking-wider text-text-sub">폴백</div>
          <div className="px-5 py-3 text-sm font-semibold uppercase tracking-wider text-text-sub border-l border-divider">URL</div>
          <div className="px-5 py-3 text-sm font-semibold uppercase tracking-wider text-text-sub border-l border-divider">비고</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_1.4fr_1.6fr] ${i < rows.length - 1 ? 'border-b border-divider' : ''}`}
          >
            <div className="px-5 py-4 text-base font-bold text-accent">{r.name}</div>
            <div className="px-5 py-4 text-base text-text border-l border-divider">{r.url}</div>
            <div className="px-5 py-4 text-base text-text-sub border-l border-divider">{r.note}</div>
          </div>
        ))}
      </div>
    </>
  );
}
