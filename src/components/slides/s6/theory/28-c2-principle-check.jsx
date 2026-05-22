// Source: lectures/S6/lecture.md lines 288-297
// Type: comparison (6-row 원칙 점검 표)
// 6 principles 좌우 비교 (원칙 / 적용 위치)

export default function S6TheoryC2PrincipleCheck() {
  const principles = [
    { principle: '1. 단일 책임', location: 'PRD 일치성 검토 한 줄' },
    { principle: '2. 최소 권한', location: 'Read, Grep, Glob만' },
    { principle: '3. 결정적 출력', location: '3카테고리 고정' },
    { principle: '4. 책임 분리', location: '수정 권한 없음 명시' },
    { principle: '5. 호출 시점', location: '코드 작성/수정 직후 호출' },
    { principle: '6. 입출력 계약', location: '본문에 입력·출력 명시' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          prd-reviewer 설계 원칙 검증
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        prd-reviewer의 6원칙 적용 점검
      </h2>

      <div className="rounded border border-divider overflow-hidden max-w-6xl">
        <div className="grid grid-cols-2 bg-bg-soft border-b border-divider">
          <div className="px-6 py-3 text-sm font-semibold tracking-wider uppercase text-text-sub">
            원칙
          </div>
          <div className="px-6 py-3 text-sm font-semibold tracking-wider uppercase text-text-sub border-l border-divider">
            적용 위치
          </div>
        </div>
        {principles.map((p, i) => (
          <div
            key={i}
            className={`grid grid-cols-2 ${i < principles.length - 1 ? 'border-b border-divider' : ''}`}
          >
            <div className="px-6 py-4 text-base font-medium text-text">
              {p.principle}
            </div>
            <div className="px-6 py-4 text-base text-text-sub border-l border-divider leading-relaxed">
              {p.location}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
