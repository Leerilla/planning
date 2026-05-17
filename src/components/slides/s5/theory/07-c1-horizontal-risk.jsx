// Source: lectures/S5/lecture.md lines 64-70 (#### 수평 슬라이스의 위험)
// Type: concept (4 risk list)

export default function S5TheoryC1HorizontalRisk() {
  const risks = [
    'UI를 다 그린 뒤 로직 층으로 → UI 층 끝까지 동작 없음',
    '셀러에게 보여줄 수 없음 → 가설 검증 불가',
    '가설 검증이 빌드 마지막까지 미뤄짐',
    'PRD 변경 시 UI를 다시 그려야 함 (3개 화면 변경 비용)',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          수평 슬라이스의 위험
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        같은 시드를 수평으로 빌드하면
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        UI·로직·데이터를 층 단위로 차곡차곡 — 합리적으로 보이지만 4가지 위험.
      </p>

      <div className="space-y-3 max-w-4xl">
        {risks.map((r, i) => (
          <div key={i} className="flex items-start gap-4 border-l-2 border-danger pl-4 py-2">
            <span className="text-base font-bold text-danger tabular-nums shrink-0">
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="text-base text-text leading-relaxed">{r}</p>
          </div>
        ))}
      </div>
    </>
  );
}
