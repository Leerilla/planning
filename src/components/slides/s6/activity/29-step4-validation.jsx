// Source: lectures/S6/lecture.md lines 1067-1072 (#### Step 4 검증 기준)
// Type: activity (checklist with 4 items)
// Profile: hierarchical / comparison / medium-high / balanced
// Emphasis: outro (Step 4 체크 + 미니 사이클 종료)

export default function S6ActivityStep4Validation() {
  const items = [
    'Issue #2, #3, #4가 모두 PR 병합됐는가',
    '각 Task가 자동화 흐름으로 진행됐는가',
    '화면 1의 동작 3요소가 모두 충족됐는가',
    '작업자의 손이 자료 5의 Issue #1보다 줄었는가',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4 · 검증
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        Step 4 검증 기준
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-8 max-w-4xl">
        다음 4개 항목 모두 통과 시 Step 5 (화면 2 빌드)로 진입
      </p>

      <div className="flex flex-col gap-4 max-w-3xl">
        {items.map((item, idx) => (
          <label
            key={idx}
            className="flex items-start gap-4 p-5 border border-divider bg-bg-soft rounded-xl cursor-pointer hover:bg-bg-soft/70 transition-colors"
          >
            <input
              type="checkbox"
              className="w-5 h-5 mt-1 cursor-pointer accent-accent shrink-0"
            />
            <span className="text-base font-medium text-text leading-relaxed">
              {item}
            </span>
          </label>
        ))}
      </div>

      <div className="mt-8 max-w-4xl border-l-4 border-accent bg-bg-soft px-6 py-4 rounded-r-md">
        <p className="text-sm font-semibold text-accent tracking-wider uppercase mb-2">메타 메시지</p>
        <p className="text-base font-medium text-text leading-relaxed">
          자동화를 적절히 적용하면, 개발자가 실제로 손으로 해야 할 일이 대폭 줄어든다. Issue #1(수동 전체 처리)에서 Issue #2~#4(자동화 주요 처리)로 진행하면서 경험한 일의 양의 변화가 바로 그것이다.
        </p>
      </div>
    </>
  );
}
