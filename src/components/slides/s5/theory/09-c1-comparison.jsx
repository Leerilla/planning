// Source: lectures/S5/lecture.md lines 87-94 (#### 수직 vs 수평 비교 4행 표)
// Type: comparison (4축)

export default function S5TheoryC1Comparison() {
  const rows = [
    { axis: '빌드 단위', vertical: '한 기능 통째', horizontal: '모든 화면 UI 먼저' },
    { axis: '첫 동작 시점', vertical: '첫 기능 완료 즉시', horizontal: '모든 층 연결 후' },
    { axis: '검증 단위', vertical: '한 기능 1개', horizontal: '전체 빌드 후' },
    { axis: '시간 내 완성 가능성', vertical: '높음', horizontal: '낮음' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          수직 vs 수평 비교
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        4축으로 비교한 두 방식
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        본 학습은 수직 슬라이스 채택 — 짧은 시간 안에 동작하는 화면 확보.
      </p>

      <div className="rounded border border-line overflow-hidden max-w-5xl">
        <div className="grid grid-cols-[1.2fr_1.6fr_1.6fr] bg-bg-soft border-b border-line">
          <div className="px-5 py-3 text-sm font-semibold uppercase tracking-wider text-text-sub">비교 축</div>
          <div className="px-5 py-3 text-sm font-semibold uppercase tracking-wider text-accent border-l border-line">수직 슬라이스</div>
          <div className="px-5 py-3 text-sm font-semibold uppercase tracking-wider text-text-sub border-l border-line">수평 슬라이스</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1.2fr_1.6fr_1.6fr] ${i < rows.length - 1 ? 'border-b border-line' : ''}`}
          >
            <div className="px-5 py-4 text-base font-semibold text-text">{r.axis}</div>
            <div className="px-5 py-4 text-base text-accent border-l border-line">{r.vertical}</div>
            <div className="px-5 py-4 text-base text-text-sub border-l border-line">{r.horizontal}</div>
          </div>
        ))}
      </div>
    </>
  );
}
