// Source: lectures/S5/lecture.md lines 847-861 (4-5 PR 생성 명령)
// Type: activity (prompt)

export default function S5Activity_4_5_PrCmd() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-5 · 산출물: PR 생성 명령
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        PR 생성 명령
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        Issue 자동 닫힘을 위해 본문에 <span className="highlight-mark">Closes #1</span> 명시.
      </p>

      <pre className="bg-bg-soft border border-line rounded p-5 text-sm text-text leading-relaxed max-w-5xl whitespace-pre-wrap">
{`"Issue #1 작업을 PR로 만들어줘.

 PR 제목: 'feat: Issue #1 입력 폼 UI 추가'
 PR 본문:
 - Closes #1
 - 변경 파일: src/components/InputForm.tsx
 - 동작 3요소 점검 결과
 - 화면 1의 첫 번째 Task

 base 브랜치는 main."`}
      </pre>
    </>
  );
}
