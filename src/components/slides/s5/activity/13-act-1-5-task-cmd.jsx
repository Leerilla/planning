// Source: lectures/S5/lecture.md lines 573-586 (1-5 Task 화면 단위 재구성 명령)
// Type: activity (prompt code)

export default function S5Activity_1_5_TaskCmd() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-5 · 산출물: docs/tasks.md 재작성 명령
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        Task 화면 단위 재구성 명령
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        기존 tasks.md를 <span className="highlight-mark">화면 단위로 그룹화</span>한 새 버전으로 교체.
      </p>

      <pre className="bg-bg-soft border border-divider rounded p-5 text-sm text-text leading-relaxed max-w-5xl whitespace-pre-wrap">
{`"docs/prd.md와 위에서 도출한 핵심 기능과
 docs/workflow.md를 기준으로
 docs/tasks.md를 다시 작성해줘.

 기준:
 - 화면 단위로 Task를 그룹화
 - 각 Task는 1-3개 파일 수정 단위
 - 화면 1을 먼저 완성하고 화면 2로 넘어가는 순서
 - 의존성을 명시
 - 너무 작은 Task와 너무 큰 Task 피함"`}
      </pre>
    </>
  );
}
