// Source: lectures/S6/lecture.md lines 375-384
// Type: comparison (5-row lifecycle overview with 2 accent rows)
// Profile: logic_structure=hierarchical / core_visual_kind=comparison / tone=balanced

export default function S6TheoryC35LifecycleOverview() {
  const events = [
    {
      event: 'PreToolUse',
      timing: '도구 실행 직전',
      usage: '위험 명령 차단 (선택)',
      isAccent: false,
    },
    {
      event: 'PostToolUse',
      timing: '도구 실행 직후',
      usage: '자동 PRD 검증 (핵심)',
      isAccent: true,
    },
    {
      event: 'UserPromptSubmit',
      timing: '프롬프트 입력 직후',
      usage: '프롬프트 점검 (선택)',
      isAccent: false,
    },
    {
      event: 'Stop',
      timing: '응답 종료',
      usage: '자동 git 커밋 (핵심)',
      isAccent: true,
    },
    {
      event: 'SubagentStop',
      timing: 'sub-agent 종료',
      usage: '결과 후처리 (선택)',
      isAccent: false,
    },
  ];

  return (
    <div className="flex flex-col gap-4 justify-center h-full max-w-6xl">
      <h2 className="text-3xl font-bold tracking-tight text-text leading-tight">
        5개 lifecycle 이벤트
      </h2>

      <div className="grid grid-cols-[1.5fr_1fr] gap-6 items-start">
        {/* 좌측: 표 */}
        <div className="flex flex-col gap-1 border border-divider rounded-xl overflow-hidden">
          <div className="grid grid-cols-[1.2fr_1fr_1.2fr] bg-bg-soft">
            <div className="px-3 py-2 text-xs font-bold text-text-sub uppercase tracking-wider border-r border-divider">
              이벤트
            </div>
            <div className="px-3 py-2 text-xs font-bold text-text-sub uppercase tracking-wider border-r border-divider">
              시점
            </div>
            <div className="px-3 py-2 text-xs font-bold text-text-sub uppercase tracking-wider">
              본 학습 사용
            </div>
          </div>
          {events.map((row, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-[1.2fr_1fr_1.2fr] border-t border-divider ${
                row.isAccent ? 'bg-accent-soft' : ''
              }`}
            >
              <div className={`px-3 py-2 text-sm font-semibold border-r border-divider ${
                row.isAccent ? 'text-accent' : 'text-text'
              }`}>
                {row.event}
              </div>
              <div className={`px-3 py-2 text-sm border-r border-divider ${
                row.isAccent ? 'text-accent' : 'text-text-sub'
              }`}>
                {row.timing}
              </div>
              <div className={`px-3 py-2 text-sm ${
                row.isAccent ? 'text-accent font-medium' : 'text-text-sub'
              }`}>
                {row.usage}
              </div>
            </div>
          ))}
        </div>

        {/* 우측: hooks-lifecycle.svg 동작 다이어그램 */}
        <div className="flex flex-col gap-2">
          <div className="text-xs font-bold text-text-sub uppercase tracking-wider">
            동작 다이어그램
          </div>
          <div className="rounded-xl border border-divider bg-bg-soft p-2">
            <img
              src="/lectures/s6/hooks-lifecycle.svg"
              alt="hooks lifecycle 동작 단계"
              className="w-full h-auto max-h-[480px] object-contain"
            />
          </div>
        </div>
      </div>

      <p className="text-sm text-text-sub leading-relaxed">
        핵심 2개 이벤트 (PostToolUse, Stop)는 자동 검증과 자동 커밋의 패턴을 구성한다.
      </p>
    </div>
  );
}
