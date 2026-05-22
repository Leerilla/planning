// Source: lectures/S4/lecture.md lines 396-403 (#### 두 극단의 위험 2-row)
// Type: comparison

export default function S4TheoryC3Extremes() {
  const rows = [
    { extreme: '모두 ask', result: '빌드 속도 절반', tone: 'bad' },
    { extreme: '모두 allow', result: '시스템 파일 위험', tone: 'bad' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          두 극단의 위험
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        한쪽으로 치우치면 둘 다 무너진다
      </h2>

      <p className="text-base text-text-sub mb-6 max-w-3xl">
        권장 템플릿이 안전과 속도의 균형 — 다음 슬라이드에서 확인.
      </p>

      <div className="rounded border border-divider overflow-hidden max-w-4xl">
        <div className="grid grid-cols-[1.4fr_2fr] bg-bg-soft border-b border-divider">
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub">극단</div>
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub border-l border-divider">결과</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1.4fr_2fr] ${i < rows.length - 1 ? 'border-b border-divider' : ''}`}
          >
            <div className="px-5 py-4 text-base text-text font-bold">{r.extreme}</div>
            <div className="px-5 py-4 text-base text-text-sub border-l border-divider">{r.result}</div>
          </div>
        ))}
      </div>
    </>
  );
}
