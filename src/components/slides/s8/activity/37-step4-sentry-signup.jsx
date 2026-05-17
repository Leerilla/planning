// Source: lectures/S8/activity lecture.md Step 4-2 (Sentry 가입)
// Type: Example (4-2: Sentry 가입과 DSN 발급)
// D-054: DSN inline code + accent

export default function S8ActivityStep4SentrySignup() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 4-2 · Sentry 가입
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          4-2. Sentry 가입과 DSN 발급
        </h1>
        <p className="text-base text-text-sub mb-4 max-w-4xl">
          메뉴 조작 — FE/BE 별도 프로젝트 2개
        </p>

        {/* Diagram with step-by-step menu — Horizontal grid 2 rows × 4 cols */}
        <div className="grid grid-cols-4 gap-2 max-w-6xl items-stretch">
          {/* Step 1 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
            <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">1</span>
            <div className="text-sm text-text leading-snug flex-1">
              <code className="text-accent font-semibold text-xs">sentry.io</code> 접속 → "Sign Up"
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
            <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">2</span>
            <div className="text-sm text-text leading-snug flex-1">
              무료 계정 생성 (GitHub OAuth 가능)
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
            <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">3</span>
            <div className="text-sm text-text leading-snug flex-1">
              "+ Create Project" 클릭
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
            <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">4</span>
            <div className="text-sm text-text leading-snug flex-1">
              Platform 선택
              <br />
              <span className="text-text-sub text-xs">· FE: Next.js<br />· BE: Node.js</span>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
            <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">5</span>
            <div className="text-sm text-text leading-snug flex-1">
              Project name 입력
              <br />
              <span className="text-text-sub text-xs">예: <code className="text-accent font-semibold">planning-project-fe</code></span>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
            <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">6</span>
            <div className="text-sm text-text leading-snug flex-1">
              "Create Project" → <code className="text-accent font-semibold text-xs">DSN</code> 자동 발급
            </div>
          </div>

          {/* Step 7 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
            <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">7</span>
            <div className="text-sm text-text leading-snug flex-1">
              <code className="text-accent font-semibold text-xs">DSN</code> 복사
              <br />
              <span className="text-text-sub text-xs break-all">{'https://...@sentry.io/...'}</span>
            </div>
          </div>

          {/* Step 8 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
            <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">8</span>
            <div className="text-sm text-text leading-snug flex-1">
              BE용도 별도 프로젝트로 생성해 <code className="text-accent font-semibold text-xs">DSN</code> 받기
            </div>
          </div>
        </div>

        {/* Aside box with warning */}
        <aside className="mt-4 border-l-4 border-warning bg-warning-soft rounded-r-xl px-6 py-3 max-w-6xl">
          <p className="text-sm text-text leading-relaxed">
            FE <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">DSN</code>과 BE <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">DSN</code>은 다른 값. 두 프로젝트 별도 생성. 무료 티어는 월 5,000 에러 이벤트 제공.
          </p>
        </aside>
    </>
  );
}
