// Source: lectures/S6/lecture.md lines 25-42 (#### 자료 5 종료 상태)
// Type: concept / default
// Profile: hierarchical / comparison / medium / balanced

export default function S6TheoryC1Data5EndState() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          자료 5 종료 상태
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        화면 1의 입력 폼만 동작 중
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        9개 Task 미작업. 같은 흐름을 반복해야 하는 상황이 본 단계 출발점.
      </p>

      <div className="grid grid-cols-2 gap-6 max-w-5xl">
        <div className="border border-divider rounded p-6">
          <div className="text-xs uppercase tracking-wider text-accent mb-2">
            손에 있는 것
          </div>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-3 items-start text-base font-medium text-text-sub">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span>CLAUDE.md (검증 통과)</span>
            </li>
            <li className="flex gap-3 items-start text-base font-medium text-text-sub">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span>docs/, rules/ (채워짐)</span>
            </li>
            <li className="flex gap-3 items-start text-base font-medium text-text-sub">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span>planning_project GitHub 저장소</span>
            </li>
            <li className="flex gap-3 items-start text-base font-medium text-text-sub">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span>GitHub Issue 10개 등록</span>
            </li>
            <li className="flex gap-3 items-start text-base font-medium text-text-sub">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span>첫 PR (Issue #1) 병합</span>
            </li>
          </ul>
        </div>

        <div className="border border-divider rounded p-6">
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            미작업 9개
          </div>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-3 items-start text-base font-medium text-text-sub">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-text-muted mt-2 shrink-0" />
              <span>화면 1: Issue #2, #3, #4</span>
            </li>
            <li className="flex gap-3 items-start text-base font-medium text-text-sub">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-text-muted mt-2 shrink-0" />
              <span>화면 2: Issue #5-#10</span>
            </li>
          </ul>
          <p className="text-sm text-text-sub italic mt-6 pt-4 border-t border-divider">
            같은 흐름의 반복 = 자동화 대상
          </p>
        </div>
      </div>
    </>
  );
}
