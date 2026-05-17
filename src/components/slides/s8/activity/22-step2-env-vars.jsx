// Source: lectures/S8/captures/lecture.md L1252-1269
// Type: Activity (Step 2-3: 환경 변수 등록)
// D-054: NEXT_PUBLIC_API_URL inline code + accent

export default function S8ActivityStep2EnvVars() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 2-3 · NEXT_PUBLIC_API_URL
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          2-3. 환경 변수 등록 (NEXT_PUBLIC_API_URL)
        </h1>
        <p className="text-base text-text-sub mb-4 max-w-4xl">
          Import 화면 또는 배포 후 Settings에서:
        </p>

        {/* Diagram with step-by-step menu */}
        <div className="flex flex-col gap-2 max-w-4xl">
          {/* Step 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">1</span>
            <div className="text-base text-text leading-relaxed flex-1">
              "Environment Variables" 섹션 펼치기
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">2</span>
            <div className="text-base text-text leading-relaxed flex-1">
              Name 입력: <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">NEXT_PUBLIC_API_URL</code>
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 3 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">3</span>
            <div className="text-base text-text leading-relaxed flex-1">
              Value 입력: Step 1-6에서 메모한 Railway URL
              <br />
              <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">https://planning-project-production.up.railway.app</code>
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 4 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">4</span>
            <div className="text-base text-text leading-relaxed flex-1">
              "Add" 클릭
            </div>
          </div>
        </div>

        {/* Warning aside with D-054 emphasis */}
        <aside className="mt-4 border-l-4 border-warning bg-warning-soft rounded-r-xl px-6 py-3 max-w-4xl">
          <p className="text-sm text-text leading-relaxed">
            <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">NEXT_PUBLIC_</code> 접두사 필수. <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">Next.js</code>가 이 접두사 변수만 브라우저로 노출. 빠뜨리면 FE가 BE URL을 못 읽음.
          </p>
        </aside>
    </>
  );
}
