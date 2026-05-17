// Source: lectures/S2/lecture.md lines 84-89
// Type: comparison (4행 비교 표 — 능동 vs 수동)
// D-040: 4-row 비교 표 = inline grid (Comparison 패턴은 2 statement, 4-row 표는 inline 적합)

export default function S2TheoryC2TwoAxesTable() {
  const rows = [
    { dim: '방식', active: '직접 묻기 (메일·DM·인터뷰)', passive: '이미 남긴 데이터 분석 (커뮤니티·리뷰)' },
    { dim: '장점', active: '깊이 — 후속 질문 가능', passive: '폭 — 편향 적음' },
    { dim: '단점', active: '응답률 5-15%, 편향 위험', passive: '후속 질문 불가, 맥락 제한' },
    { dim: '본 학습 도구', active: '메타 프롬프팅 + 콜드 메일 카피', passive: 'Playwright MCP + 커뮤니티 스크래핑' },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          두 축 비교
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-5">
        능동 검증과 수동 검증 — 한눈에 비교
      </h2>

      {/* Header row */}
      <div className="grid grid-cols-[140px_1fr_1fr] gap-4 px-4 py-2 border-b border-divider max-w-5xl">
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase">
          차원
        </div>
        <div className="text-accent text-xs font-semibold tracking-wider uppercase">
          능동 검증
        </div>
        <div className="text-success text-xs font-semibold tracking-wider uppercase">
          수동 검증
        </div>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-2 mt-3 max-w-5xl">
        {rows.map((r, i) => (
          <div
            key={i}
            className="grid grid-cols-[140px_1fr_1fr] gap-4 items-center px-4 py-3 rounded-2xl border border-divider bg-bg-soft hover:border-accent transition-colors group"
          >
            <div className="text-base font-bold text-text tracking-tight">
              {r.dim}
            </div>
            <div className="text-sm font-medium text-text leading-relaxed tracking-tight">
              {r.active}
            </div>
            <div className="text-sm font-medium text-text leading-relaxed tracking-tight">
              {r.passive}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
