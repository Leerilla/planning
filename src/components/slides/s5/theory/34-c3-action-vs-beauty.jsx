// Source: lectures/S5/lecture.md lines 328-339 (#### 동작과 예쁨의 분리)
// Type: comparison (신호 vs 본질)

export default function S5TheoryC3ActionVsBeauty() {
  const signals = [
    { signal: '"디자인이 마음에 안 든다"', verdict: '본질 놓침' },
    { signal: '"더 예쁘게 만들고 싶다"', verdict: '본질 놓침' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          동작과 예쁨의 분리
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        작업자의 함정 — 디자인 정제에 시간 쏟기
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        디자인은 사용자 행동 데이터 위에서 정제될 때 가장 효과적. 행동 데이터 없이 정제하면 직감 의존.
      </p>

      <div className="rounded border border-divider overflow-hidden max-w-4xl">
        <div className="grid grid-cols-[1.6fr_1fr] bg-bg-soft border-b border-divider">
          <div className="px-5 py-3 text-sm font-semibold uppercase tracking-wider text-text-sub">신호</div>
          <div className="px-5 py-3 text-sm font-semibold uppercase tracking-wider text-text-sub border-l border-divider">합격선 관계</div>
        </div>
        {signals.map((s, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1.6fr_1fr] ${i < signals.length - 1 ? 'border-b border-divider' : ''}`}
          >
            <div className="px-5 py-4 text-base text-text">{s.signal}</div>
            <div className="px-5 py-4 text-base text-danger border-l border-divider font-semibold">{s.verdict}</div>
          </div>
        ))}
      </div>
    </>
  );
}
