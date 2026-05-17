// Source: lectures/S6/lecture.md lines 1171-1185 (#### 과제)
// Type: activity (Assignment Table + Aside)
// Profile: hierarchical / comparison / medium-high / balanced
// Emphasis: outro (마무리 과제 안내)

const ASSIGNMENT_ITEMS = [
  {
    item: '목표',
    content: '화면 1·2 완성과 자동화 도구 안정화',
  },
  {
    item: '산출물',
    content: '두 화면 동작, sub-agent 2개, hook 2개, Issue #2-#10 PR 병합',
  },
  {
    item: '마감',
    content: '다음 학습 단계 시작 전',
  },
];

export default function S6ActivityAssignment() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 · 과제
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        과제
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-6 max-w-4xl">
        본 자료의 과제는 <code className="text-accent font-semibold">lectures/S6/assignment.md</code> 파일에 정리되어 있다
      </p>

      <div className="max-w-4xl overflow-hidden rounded-xl border border-divider">
        <div className="grid grid-cols-[140px_1fr] bg-bg-soft px-6 py-3 border-b border-divider">
          <span className="text-xs font-semibold uppercase tracking-wider text-text-sub">
            항목
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-text-sub">
            내용
          </span>
        </div>
        {ASSIGNMENT_ITEMS.map((row, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-[140px_1fr] px-6 py-4 ${
              idx < ASSIGNMENT_ITEMS.length - 1 ? 'border-b border-divider' : ''
            }`}
          >
            <span className="text-sm font-semibold text-text">{row.item}</span>
            <span className="text-sm font-medium text-text leading-relaxed">
              {row.content}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 max-w-4xl border-l-4 border-accent bg-bg-soft px-7 py-5 rounded-r-md">
        <p className="text-sm font-medium text-text leading-relaxed">
          화면 두 개가 모두 동작 3요소 충족하고 자동화 도구가 안정 작동하는 상태가 다음 단계 출발선.
        </p>
      </div>
    </>
  );
}
