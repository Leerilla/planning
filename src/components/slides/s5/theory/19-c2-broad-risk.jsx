// Source: lectures/S5/lecture.md lines 176-185 (#### 광범위한 명령의 위험)
// Type: comparison (4축 광범위 vs 3원칙)

export default function S5TheoryC2BroadRisk() {
  const rows = [
    { axis: '속도', broad: '빠름', applied: '비슷' },
    { axis: '결과의 일관성', broad: '매번 다름', applied: '일관됨' },
    { axis: '임의 라이브러리 추가', broad: '발생', applied: '거의 없음' },
    { axis: '검증 가능성', broad: '불명', applied: '명확' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          광범위한 명령의 위험
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        에이전트는 빠르지만 광범위한 명령에 약하다
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        속도는 비슷하지만 일관성·검증 가능성에서 큰 차이.
      </p>

      <div className="rounded border border-line overflow-hidden max-w-5xl">
        <div className="grid grid-cols-[1.2fr_1.6fr_1.6fr] bg-bg-soft border-b border-line">
          <div className="px-5 py-3 text-sm font-semibold uppercase tracking-wider text-text-sub">비교 축</div>
          <div className="px-5 py-3 text-sm font-semibold uppercase tracking-wider text-text-sub border-l border-line">광범위한 명령</div>
          <div className="px-5 py-3 text-sm font-semibold uppercase tracking-wider text-accent border-l border-line">위임 3원칙 적용</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1.2fr_1.6fr_1.6fr] ${i < rows.length - 1 ? 'border-b border-line' : ''}`}
          >
            <div className="px-5 py-4 text-base font-semibold text-text">{r.axis}</div>
            <div className="px-5 py-4 text-base text-text-sub border-l border-line">{r.broad}</div>
            <div className="px-5 py-4 text-base text-accent border-l border-line">{r.applied}</div>
          </div>
        ))}
      </div>
    </>
  );
}
