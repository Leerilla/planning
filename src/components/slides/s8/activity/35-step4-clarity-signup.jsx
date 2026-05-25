// Source: lectures/S8/activity lecture.md Step 4-1 (Clarity 가입)
// Type: Example (4-1: Microsoft Clarity 가입과 추적 코드)
// D-054: clarity.start inline code + accent

export default function S8ActivityStep4ClaritySignup() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 4-1 · Clarity 가입
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          4-1. Microsoft Clarity 가입과 추적 코드
        </h1>
        <p className="text-base text-text-sub mb-4 max-w-4xl">
          메뉴 조작:
        </p>

        {/* Diagram with step-by-step menu — Horizontal grid 2 rows × 4 cols */}
        <div className="grid grid-cols-4 gap-2 max-w-6xl items-stretch">
          {/* Step 1 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
            <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">1</span>
            <div className="text-sm text-text leading-snug flex-1">
              <code className="text-accent font-semibold text-xs break-all">clarity.microsoft.com</code> 접속
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
            <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">2</span>
            <div className="text-sm text-text leading-snug flex-1">
              "Sign up" → Microsoft 계정으로 로그인
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
            <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">3</span>
            <div className="text-sm text-text leading-snug flex-1">
              대시보드 → "+ New Project" 클릭
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
            <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">4</span>
            <div className="text-sm text-text leading-snug flex-1">
              입력
              <br />
              <span className="text-text-sub text-xs">
                · Name: <code className="text-accent font-semibold">planning_project</code><br />
                · URL: vercel-url<br />
                · Category: Other
              </span>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
            <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">5</span>
            <div className="text-sm text-text leading-snug flex-1">
              "Create" 클릭
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
            <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">6</span>
            <div className="text-sm text-text leading-snug flex-1">
              수동으로 설치의 추적 코드 받기 선택
            </div>
          </div>

          {/* Step 7 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl col-span-2">
            <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">7</span>
            <div className="text-sm text-text leading-snug flex-1">
              클립보드에 복사
            </div>
          </div>
        </div>
    </>
  );
}
