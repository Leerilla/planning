// Source: lectures/S6/lecture.md lines 618-628
// Type: comparison (2-row Verify-First Principle)
// 점검 항목 vs 확인 방법 비교표
// D-041: Natural language only
// D-046: No font-mono
// D11: No special chars in text

export default function S6TheoryC4VerifyFirst() {
  const rows = [
    {
      item: 'prd-reviewer "일치" 보고',
      method: 'docs/prd.md 직접 보면서 확인',
    },
    {
      item: 'git-committer 커밋 메시지',
      method: 'git log로 확인',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          검증 우선주의 원칙
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        검증 우선주의의 일관 적용
      </h2>

      <div className="rounded border border-line overflow-hidden max-w-5xl">
        <div className="grid grid-cols-2 bg-bg-soft border-b border-line">
          <div className="px-6 py-3 text-sm font-semibold tracking-wider uppercase text-text-sub">
            점검 항목
          </div>
          <div className="px-6 py-3 text-sm font-semibold tracking-wider uppercase text-text-sub border-l border-line">
            확인 방법
          </div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-2 ${i < rows.length - 1 ? 'border-b border-line' : ''}`}
          >
            <div className="px-6 py-4 text-base font-medium text-text">
              {r.item}
            </div>
            <div className="px-6 py-4 text-base text-text-sub border-l border-line leading-relaxed">
              {r.method}
            </div>
          </div>
        ))}
      </div>

      {/* Context note */}
      <p className="text-xs text-text-muted mt-8 max-w-5xl leading-relaxed">
        자동화가 작업을 줄여주지만 판단을 대신하지는 않는다.
      </p>
    </>
  );
}
