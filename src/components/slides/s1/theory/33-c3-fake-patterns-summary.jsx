// Source: lectures/S1/lecture.md lines 406-412
// Type: terms (3행 위험도 표 정리)
// D-035: emoji "🔴/🟡/🟢" 제거 → 텍스트 "최대/중간/경량"
// D-036: 시각 마커 — 색상 dot + border-l-4
// D-040: inline table — 3 카테고리 위험도 카드 정렬

export default function S1TheoryC3FakePatternsSummary() {
  const rows = [
    {
      pattern: '그럴듯한 통계',
      level: '최대',
      color: 'danger',
      method: '통계 출처 URL 클릭 후 원문 확인',
    },
    {
      pattern: '가짜 인용',
      level: '중간',
      color: 'warning',
      method: '인용된 사람의 공식 자료 검색',
    },
    {
      pattern: '출처 조작',
      level: '경량',
      color: 'success',
      method: 'URL 클릭 후 404 또는 무관한 페이지 확인',
    },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          거짓 패턴 정리
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-6">
        3가지 거짓 패턴과 검증 방법
      </h2>

      {/* Header row */}
      <div className="grid grid-cols-[1fr_120px_2fr] gap-4 px-4 py-2 border-b border-divider max-w-5xl">
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase">
          거짓 패턴
        </div>
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase">
          위험도
        </div>
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase">
          검증 방법
        </div>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-3 mt-4 max-w-5xl">
        {rows.map((r, i) => {
          const colorMap = {
            danger: {
              border: 'border-danger',
              bg: 'bg-danger-soft',
              text: 'text-danger',
              dot: 'bg-danger',
            },
            warning: {
              border: 'border-warning',
              bg: 'bg-warning-soft',
              text: 'text-warning',
              dot: 'bg-warning',
            },
            success: {
              border: 'border-success',
              bg: 'bg-success-soft',
              text: 'text-success',
              dot: 'bg-success',
            },
          }[r.color];

          return (
            <div
              key={i}
              className={`grid grid-cols-[1fr_120px_2fr] gap-4 items-center px-4 py-4 rounded-2xl border-l-4 ${colorMap.border} bg-bg-soft`}
            >
              <div className="text-lg font-bold text-text tracking-tight">
                {r.pattern}
              </div>
              <div className="flex items-center gap-2">
                <span className={`inline-block w-2.5 h-2.5 rounded-full ${colorMap.dot}`} />
                <span className={`${colorMap.text} text-sm font-bold tracking-wider`}>
                  {r.level}
                </span>
              </div>
              <div className="text-sm text-text-sub leading-relaxed">
                {r.method}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
