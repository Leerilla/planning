// Source: lectures/S5/lecture.md lines 833-845 (4-4 동작 3요소 부분 점검)
// Type: activity (table 3행 부분 충족 상태)

export default function S5Activity_4_4_Elements() {
  const rows = [
    { e: '1. 페이지 뜸', s: '충족' },
    { e: '2. 인터랙션', s: '충족' },
    { e: '3. 콘솔 출력', s: '부분' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-4 · 산출물: 부분 충족 점검
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        동작 3요소 부분 점검 (첫 Task 후)
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        화면 1의 모든 Task(#1-#4) 완료 시 <span className="highlight-mark">동작 3요소 완전 충족</span>.
      </p>

      <div className="rounded border border-divider overflow-hidden max-w-3xl">
        <div className="grid grid-cols-[2fr_1fr] bg-bg-soft border-b border-divider">
          <div className="px-5 py-3 text-sm font-semibold uppercase tracking-wider text-text-sub">요소</div>
          <div className="px-5 py-3 text-sm font-semibold uppercase tracking-wider text-text-sub border-l border-divider">상태</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[2fr_1fr] ${i < rows.length - 1 ? 'border-b border-divider' : ''}`}
          >
            <div className="px-5 py-4 text-base font-semibold text-text">{r.e}</div>
            <div className={`px-5 py-4 text-base font-bold border-l border-divider ${r.s === '충족' ? 'text-accent' : 'text-text-sub'}`}>
              {r.s}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
