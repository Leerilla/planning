// Source: lectures/S6/lecture.md lines 1141-1146 (#### Step 5 검증 기준)
// Type: activity (Checklist 4)
// Profile: hierarchical / comparison / medium-high / balanced
// Emphasis: default (Step 5 마무리 검증)

const ITEMS = [
  'Issue #5-#10이 모두 PR 병합됐는가',
  '화면 2의 동작 3요소가 모두 충족됐는가',
  '화면 1에서 화면 2로의 라우팅이 자연스러운가',
  '화면 2 빌드 시간이 화면 1보다 짧아졌는가',
];

export default function S6ActivityStep5Validation() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          Step 5 · 검증 기준
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        다음 Step 진입 가능한가
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-8 max-w-4xl">
        4개 항목 모두 통과 시 Step N (정리와 비용 비교)로 진입.
      </p>

      <div className="max-w-4xl grid grid-cols-1 gap-3">
        {ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 px-6 py-4 border border-divider rounded-md bg-bg-soft"
          >
            <span className="flex-shrink-0 w-6 h-6 mt-0.5 border-2 border-divider rounded-md" />
            <span className="text-base font-medium text-text leading-relaxed">{item}</span>
          </div>
        ))}
      </div>
    </>
  );
}
