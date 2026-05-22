// Source: lectures/S6/lecture.md lines 356-362 (#### CLAUDE.md vs hook)
// Type: comparison (3-row table)

export default function S6TheoryC3VsClaudeMd() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          CLAUDE.md vs hook 비교
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-8">
        세 가지 차이점
      </h2>

      <div className="max-w-5xl space-y-3">
        <div className="grid grid-cols-3 gap-4 mb-2">
          <div className="text-sm font-semibold text-text-sub uppercase tracking-wider">
            항목
          </div>
          <div className="text-sm font-semibold text-text-sub uppercase tracking-wider">
            CLAUDE.md
          </div>
          <div className="text-sm font-semibold text-text-sub uppercase tracking-wider">
            hook
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 items-start border-b border-divider pb-3">
          <div className="text-sm text-text font-semibold">강제력</div>
          <div className="text-sm text-text">권고 (약 70% 준수)</div>
          <div className="text-sm text-text">강제 (100% 실행)</div>
        </div>

        <div className="grid grid-cols-3 gap-4 items-start border-b border-divider pb-3">
          <div className="text-sm text-text font-semibold">용도</div>
          <div className="text-sm text-text">권장 가이드</div>
          <div className="text-sm text-text">반드시 일어나야 하는 검증</div>
        </div>

        <div className="grid grid-cols-3 gap-4 items-start">
          <div className="text-sm text-text font-semibold">예시</div>
          <div className="text-sm text-text">코딩 규칙</div>
          <div className="text-sm text-text">자동 PRD 검증, 자동 커밋</div>
        </div>
      </div>
    </>
  );
}
