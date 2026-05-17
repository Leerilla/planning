// Source: lectures/S8/captures/lecture.md L1078-1096
// Type: Process step 1-3 (Root Directory 설정 — 핵심)

export default function S8ActivityStep1RootDir() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 1-3 · Root Directory (핵심)
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          1-3. Root Directory 설정
        </h1>
        <p className="text-base text-text-sub mb-4 max-w-4xl">
          <span className="text-accent font-semibold">반드시</span> 필요한 설정
        </p>

        {/* Menu diagram — D-054: server/ inline code + accent */}
        <div className="flex flex-col gap-2 max-w-4xl">
          {/* Step 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">1</span>
            <div className="text-base text-text leading-relaxed flex-1">
              프로젝트 화면 → 빌드 중인 Service 클릭
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">2</span>
            <div className="text-base text-text leading-relaxed flex-1">
              "Settings" 탭 선택
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 3 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">3</span>
            <div className="text-base text-text leading-relaxed flex-1">
              "Build" 섹션의 "Root Directory" 필드 찾기
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 4 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">4</span>
            <div className="text-base text-text leading-relaxed flex-1">
              값 입력: <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">server</code>
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 5 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">5</span>
            <div className="text-base text-text leading-relaxed flex-1">
              저장 → 자동 재빌드 트리거
            </div>
          </div>
        </div>

        {/* Aside warning — D-054: planning_project, server/ inline code + accent */}
        <aside className="mt-4 border-l-4 border-warning bg-warning-soft rounded-r-xl px-6 py-3 max-w-4xl">
          <p className="text-sm text-text leading-relaxed">
            이 설정이 없으면 Railway가 리포의 root(<code className="text-accent font-semibold">planning_project/</code>)를 빌드하려 함 → FE 코드까지 포함되어 실패. <code className="text-accent font-semibold">server/</code>만 명시해야 BE만 빌드.
          </p>
        </aside>
    </>
  );
}
