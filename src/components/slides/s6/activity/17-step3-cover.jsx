// Source: lectures/S6/lecture.md lines 901-904
// Type: title (Cover), § 2.20 § 2.33 섹션 표지 자동 (D-033)
// Profile: hierarchical logic / process visual / balanced tone

export default function S6ActivityStep3Cover() {
  return (
    <div className="flex flex-col gap-12 h-full p-12">
      <div className="flex items-center gap-4">
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          Step 3
        </span>
        <span className="h-1 w-12 bg-accent rounded-full" />
      </div>

      <div>
        <h1 className="text-5xl font-bold tracking-tight text-text leading-tight mb-6">
          hook 작성
        </h1>
        <p className="text-lg font-medium text-text-sub leading-relaxed">
          PostToolUse + Stop
        </p>
      </div>

      <p className="text-text-sub leading-relaxed max-w-2xl">
        본 단계 목표는 settings.json에 두 hook 등록과 자동 트리거 확인.
      </p>

      <div className="border-l-4 border-accent bg-bg-soft rounded-r-md px-5 py-3 max-w-2xl">
        <span className="text-xs font-semibold text-accent uppercase tracking-wider">산출물 위치</span>
        <p className="text-sm font-medium text-text mt-1">
          <code>planning_project/.claude/settings.json</code> (hooks 필드 추가)
        </p>
      </div>

      <div className="space-y-3 mt-auto">
        <h3 className="text-sm font-semibold tracking-wider uppercase text-text-sub mb-4">
          학습 목표
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
            <span className="text-base text-text-sub leading-relaxed">
              PostToolUse hook: 도구 실행 후 자동 검증
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
            <span className="text-base text-text-sub leading-relaxed">
              Stop hook: 응답 종료 시 자동 커밋
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
            <span className="text-base text-text-sub leading-relaxed">
              두 hook 자동 트리거 확인 및 통합 테스트
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
