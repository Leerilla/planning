// Source: lectures/S8/captures/lecture.md L1230-1250
// Type: Activity (Step 2-2: Import + Framework Preset)

export default function S8ActivityStep2Import() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 2-2 · Import + Framework
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          2-2. Import 화면과 Framework Preset
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
              대시보드 → "Add New..." → "Project"
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">2</span>
            <div className="text-base text-text leading-relaxed flex-1">
              GitHub 리포 목록에서 <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">planning_project</code> 찾기
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 3 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">3</span>
            <div className="text-base text-text leading-relaxed flex-1">
              "Import" 클릭
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 4 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">4</span>
            <div className="text-base text-text leading-relaxed flex-1">
              Framework Preset 자동 감지 확인
              <br />
              <span className="text-text-sub text-sm"><code className="text-accent font-semibold">Next.js</code> → Vercel이 자동 인식</span>
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 5 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">5</span>
            <div className="text-base text-text leading-relaxed flex-1">
              (monorepo면) "Root Directory" 설정
              <br />
              <span className="text-text-sub text-sm">· "Edit" 클릭<br />
              · FE 코드 위치 명시 (예: 빈 칸 또는 client/)</span>
            </div>
          </div>
        </div>

        {/* Aside box with explanation (D-054) */}
        <aside className="mt-4 border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-4xl">
          <p className="text-sm text-text leading-relaxed">
            <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">Vercel</code>은 <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">Next.js</code>를 최고 수준으로 통합. Framework Preset이 자동 감지되면 빌드 명령·시작 명령 모두 자동 설정. 직접 건드릴 필요 없음.
          </p>
        </aside>
    </>
  );
}
