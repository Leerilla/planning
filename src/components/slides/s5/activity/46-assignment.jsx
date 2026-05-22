// Source: lectures/S5/lecture.md lines 960-972 (## 과제)
// Type: activity (table)

export default function S5ActivityAssignment() {
  const rows = [
    { item: '목표', content: '화면 1의 모든 Task 완료와 동작 3요소 충족' },
    { item: '산출물', content: '새 docs/tasks.md, Issue 10개, 첫 PR 병합 + 화면 1 나머지 Task' },
    { item: '마감', content: '다음 학습 단계 시작 전' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          과제 · assignment.md
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        과제 — 화면 1 동작 3요소 완성
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        화면 1이 동작 3요소를 모두 충족한 상태가 <span className="highlight-mark">다음 단계의 출발선</span>.
      </p>

      <div className="rounded border border-divider overflow-hidden max-w-5xl">
        <div className="grid grid-cols-[1fr_3fr] bg-bg-soft border-b border-divider">
          <div className="px-5 py-3 text-sm font-semibold uppercase tracking-wider text-text-sub">항목</div>
          <div className="px-5 py-3 text-sm font-semibold uppercase tracking-wider text-text-sub border-l border-divider">내용</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_3fr] ${i < rows.length - 1 ? 'border-b border-divider' : ''}`}
          >
            <div className="px-5 py-4 text-base font-bold text-accent">{r.item}</div>
            <div className="px-5 py-4 text-base text-text border-l border-divider">{r.content}</div>
          </div>
        ))}
      </div>
    </>
  );
}
