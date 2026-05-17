// Source: lectures/S7/lecture.md L568-574 (Step 0 검증 기준)
// Type: activity (checklist 5 항목)

export default function S7ActivityStep0Validation() {
  const items = [
    'planning_project 폴더에서 작업 중인가',
    '자료 6 산출물 5개가 모두 있는가',
    'Playwright가 설치되어 있는가',
    'Playwright MCP가 연결되어 있는가',
    '/cost 베이스라인을 메모했는가',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-success rounded-full" />
        <span className="text-success text-sm font-semibold tracking-wider uppercase">
          Step 0 · 검증 / 통과 기준
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        Step 0 통과 기준
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        5개 항목 모두 통과 시 Step 1 (E2E 테스트 작성)로 진입.
      </p>

      <div className="flex flex-col gap-3 max-w-3xl">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl hover:border-success hover:bg-success-soft transition-colors"
          >
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0 hover:border-success transition-colors" />
            <span className="text-base font-medium text-text leading-relaxed">
              {item.includes('planning_project') ? (
                <>
                  <code className="text-accent font-semibold bg-bg px-1.5 py-0.5 rounded-xl text-xs">
                    planning_project
                  </code>
                  {' '}폴더에서 작업 중인가
                </>
              ) : (
                item
              )}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
