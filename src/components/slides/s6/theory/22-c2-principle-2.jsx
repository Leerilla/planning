// Source: lectures/S6/lecture.md lines 205-214 (#### 원칙 2: 최소 권한)
// Type: comparison (2-row tools table with emphasis)
// Profile: hierarchical / comparison / medium-high / balanced
// Interactive: hover-expand (각 도구 hover 시 설명)

export default function S6TheoryC2Principle2() {
  const tools = [
    {
      agent: 'prd-reviewer',
      tools: 'Read, Grep, Glob',
      reason: '읽기·검색만 필요',
      emphasis: 'yes',
    },
    {
      agent: 'git-committer',
      tools: 'Bash, Read',
      reason: '커밋 명령과 변경 확인',
      emphasis: 'yes',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          원칙 2 · 최소 권한
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        역할에 필요한 최소 도구만
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        코드 리뷰어가 코드를 수정하지 못하게 차단. 검토 결과의 신뢰성 확보.
      </p>

      <div className="rounded border border-line overflow-hidden max-w-4xl">
        <div className="grid grid-cols-3 bg-bg-soft border-b border-line">
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub font-semibold">
            Sub-agent
          </div>
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub font-semibold border-l border-line">
            Tools
          </div>
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub font-semibold border-l border-line">
            이유
          </div>
        </div>

        {tools.map((t, i) => (
          <div
            key={i}
            className={`grid grid-cols-3 ${i < tools.length - 1 ? 'border-b border-line' : ''} group`}
          >
            <div className="px-5 py-4 text-base font-bold text-text">
              {t.agent}
            </div>
            <div className="px-5 py-4 text-base text-text-sub border-l border-line text-sm">
              {t.tools}
            </div>
            <div className="px-5 py-4 text-base text-text-sub border-l border-line group-hover:text-text transition-colors">
              {t.reason}
            </div>
          </div>
        ))}
      </div>

      <p className="text-base text-text-sub mt-6 max-w-4xl">
        Read/Edit/Write 같은 수정 권한은 명시적으로 금지하면, sub-agent가 검토 결과를 파악하기 쉬워진다.
      </p>
    </>
  );
}
