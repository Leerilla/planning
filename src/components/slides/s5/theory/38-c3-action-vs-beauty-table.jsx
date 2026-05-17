// Source: lectures/S5/lecture.md lines 381-387 (#### 동작 vs 예쁨 비교 표)
// Type: comparison (3축)

export default function S5TheoryC3ActionVsBeautyTable() {
  const rows = [
    { axis: '핵심 기준', action: '3요소', beauty: '디자인 정제' },
    { axis: '시간 투자', action: '짧게', beauty: '길게 (다음 단계)' },
    { axis: '검증 단위', action: '핵심 인터랙션 1개', beauty: '화면 전체 시각 품질' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          동작 vs 예쁨
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        본 단계 합격선과 다음 단계 이후의 비교
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        같은 화면을 두 관점에서 본 차이.
      </p>

      <div className="rounded border border-line overflow-hidden max-w-5xl">
        <div className="grid grid-cols-[1.2fr_1.6fr_1.6fr] bg-bg-soft border-b border-line">
          <div className="px-5 py-3 text-sm font-semibold uppercase tracking-wider text-text-sub">비교 축</div>
          <div className="px-5 py-3 text-sm font-semibold uppercase tracking-wider text-accent border-l border-line">동작 (본 단계)</div>
          <div className="px-5 py-3 text-sm font-semibold uppercase tracking-wider text-text-sub border-l border-line">예쁨 (다음 단계)</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1.2fr_1.6fr_1.6fr] ${i < rows.length - 1 ? 'border-b border-line' : ''}`}
          >
            <div className="px-5 py-4 text-base font-semibold text-text">{r.axis}</div>
            <div className="px-5 py-4 text-base text-accent border-l border-line">{r.action}</div>
            <div className="px-5 py-4 text-base text-text-sub border-l border-line">{r.beauty}</div>
          </div>
        ))}
      </div>
    </>
  );
}
