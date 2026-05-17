// Source: lectures/S8/captures/lecture.md L1271-1289
// Type: Activity (Step 2-4: 빌드 + URL)

export default function S8ActivityStep2Deploy() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 2-4 · 빌드 + URL
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          2-4. 빌드와 URL 발급
        </h1>
        <p className="text-base text-text-sub mb-4 max-w-4xl">
          메뉴 조작:
        </p>

        {/* Diagram with step-by-step menu */}
        <div className="flex flex-col gap-2 max-w-4xl">
          {/* Step 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">1</span>
            <div className="text-base text-text leading-relaxed flex-1">
              환경 변수 등록 후 "Deploy" 클릭
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">2</span>
            <div className="text-base text-text leading-relaxed flex-1">
              빌드 로그 화면으로 자동 이동
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 3 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">3</span>
            <div className="text-base text-text leading-relaxed flex-1">
              "Building" → "Deploying" → "Ready" 순서로 진행 (2-3분)
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 4 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">4</span>
            <div className="text-base text-text leading-relaxed flex-1">
              완료 후 자동 URL 발급
              <br />
              <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">https://planning-project.vercel.app</code>
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 5 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">5</span>
            <div className="text-base text-text leading-relaxed flex-1">
              "Visit" 또는 "Open" 버튼으로 URL 접속
            </div>
          </div>
        </div>

        {/* Aside box with explanation */}
        <aside className="mt-4 border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-4xl">
          <p className="text-sm text-text leading-relaxed">
            <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">Vercel</code>은 매 git push마다 새 URL 자동 발급(preview). main 브랜치 push만 production URL(메인 도메인)로 배포.
          </p>
        </aside>
    </>
  );
}
