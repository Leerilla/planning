// Source: lectures/S8/captures/lecture.md L1377-1393
// Type: Process (3-3: 자동 재배포 흐름)
// D-054: git-committer inline code + accent

export default function S8ActivityStep3AutoRedeploy() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 3-3 · 자동 재배포 흐름
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          3-3. 자동 재배포 흐름
        </h1>
        <p className="text-base text-text-sub mb-4 max-w-4xl">
          자료 4-6의 자동화 인프라가 본 단계에서 작동
        </p>

        {/* Diagram with flow steps */}
        <div className="flex flex-col gap-2 max-w-4xl">
          {/* Step 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">1</span>
            <div className="text-base text-text leading-relaxed flex-1">
              Claude Code가 <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">server/</code> 코드 수정 (cors 미들웨어 추가)
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">2</span>
            <div className="text-base text-text leading-relaxed flex-1">
              자료 6의 <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">git-committer</code>가 자동 커밋
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 3 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">3</span>
            <div className="text-base text-text leading-relaxed flex-1">
              GitHub push 감지 → Railway 자동 재배포
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 4 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">4</span>
            <div className="text-base text-text leading-relaxed flex-1">
              배포 완료 (1-2분)
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 5 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">5</span>
            <div className="text-base text-text leading-relaxed flex-1">
              FE 브라우저 새로고침
            </div>
          </div>
        </div>

        {/* Aside box with explanation - D-054: git-committer inline code + accent */}
        <aside className="mt-4 border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-4xl">
          <p className="text-sm text-text leading-relaxed">
            자료 4-6에서 만든 자동화 인프라(<code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">git-committer</code>, hook)가 본 단계에서도 작동. 작업자가 수동 커밋 불필요.
          </p>
        </aside>
    </>
  );
}
