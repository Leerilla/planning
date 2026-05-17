// Source: lectures/S8/captures/lecture.md L1098-1117
// Type: Process step 1-4 (빌드/시작 명령)

export default function S8ActivityStep1BuildCmd() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 1-4 · 빌드/시작 명령
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          1-4. 빌드 명령과 시작 명령 확인
        </h1>
        <p className="text-base text-text-sub mb-4 max-w-4xl">
          Railway가 자동 감지하지만 점검:
        </p>

        {/* Menu diagram — D-054: start, npm start, package.json inline code + accent */}
        <div className="flex flex-col gap-2 max-w-4xl">
          {/* Step 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">1</span>
            <div className="text-base text-text leading-relaxed flex-1">
              Settings → "Build" 섹션
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">2</span>
            <div className="text-base text-text leading-relaxed flex-1">
              Build Command 확인 (Nixpacks가 자동)
              <br />
              <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">npm install</code>
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 3 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">3</span>
            <div className="text-base text-text leading-relaxed flex-1">
              Start Command 확인
              <br />
              <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">npm start</code>
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 4 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">4</span>
            <div className="text-base text-text leading-relaxed flex-1">
              <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">server/package.json</code> 의 "start" 스크립트 점검
              <br />
              <span className="text-text-sub text-sm">{'{ "scripts": { "start": "node index.js" } }'}</span>
            </div>
          </div>
        </div>

        {/* Aside warning — D-054: package.json, start inline code + accent */}
        <aside className="mt-4 border-l-4 border-warning bg-warning-soft rounded-r-xl px-6 py-3 max-w-4xl">
          <p className="text-sm text-text leading-relaxed">
            <code className="text-accent font-semibold">"start"</code> 스크립트가 없으면 Railway 빌드는 성공해도 시작 실패. <code className="text-accent font-semibold">package.json</code>에 scripts 추가 필요.
          </p>
        </aside>
    </>
  );
}
