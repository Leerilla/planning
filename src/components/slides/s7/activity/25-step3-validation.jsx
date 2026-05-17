// Source: lectures/S7/lecture.md L826-834 (Step 3 검증 기준)
// Type: activity (inline JSX — 7-check 2-col)

export default function S7Activity_3_5_Validation() {
  const checkItems = [
    {
      col: 1,
      num: 1,
      label: (
        <>
          <code className="text-accent font-semibold bg-bg px-1.5 py-0.5 rounded text-sm">
            .claude/agents/scenario-verifier.md
          </code>
          {' '}파일이 작성됐는가
        </>
      ),
    },
    {
      col: 1,
      num: 2,
      label: 'frontmatter가 6원칙을 따랐는가',
    },
    {
      col: 1,
      num: 3,
      label: '첫 호출 보고서가 3단 구조로 출력됐는가',
    },
    {
      col: 1,
      num: 4,
      label: '막힘 지점을 작업자가 직접 확인했는가',
    },
    {
      col: 2,
      num: 5,
      label: '검증 루프를 1회 이상 돌았는가 (검증 → 수정 → 재검증)',
    },
    {
      col: 2,
      num: 6,
      label: '최종 보고서가 "통과"인가',
    },
    {
      col: 2,
      num: 7,
      label: '작업자의 본인 검증으로 통과 확정인가',
    },
  ];

  const leftItems = checkItems.filter((item) => item.col === 1);
  const rightItems = checkItems.filter((item) => item.col === 2);

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-검증 · Step 3 통과 기준
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text mb-2">
        Step 3 검증 기준
      </h2>

      <p className="text-text-sub text-base mb-4">
        7개 항목 모두 통과 시 Step N 진입
      </p>

      <div className="grid grid-cols-2 gap-3 max-w-5xl">
        {/* Left Column */}
        <div className="flex flex-col gap-3">
          {leftItems.map((item) => (
            <div
              key={item.num}
              className="flex items-start gap-3 p-3 border border-divider bg-bg-soft rounded-xl"
            >
              <div className="w-5 h-5 mt-0.5 border-2 border-divider rounded-xl shrink-0" />
              <p className="text-sm text-text leading-relaxed">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-3">
          {rightItems.map((item) => (
            <div
              key={item.num}
              className="flex items-start gap-3 p-3 border border-divider bg-bg-soft rounded-xl"
            >
              <div className="w-5 h-5 mt-0.5 border-2 border-divider rounded-xl shrink-0" />
              <p className="text-sm text-text leading-relaxed">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
