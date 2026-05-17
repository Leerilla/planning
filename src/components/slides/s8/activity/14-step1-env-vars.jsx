// Source: lectures/S8/captures/lecture.md L1119-1138
// Type: Process step 1-5 (환경 변수)

export default function S8ActivityStep1EnvVars() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 1-5 · 환경 변수
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          1-5. 환경 변수 등록 (OPENAI_API_KEY)
        </h1>
        <p className="text-base text-text-sub mb-4 max-w-4xl">
          메뉴 조작:
        </p>

        {/* Menu diagram — D-054: OPENAI_API_KEY inline code + accent */}
        <div className="flex flex-col gap-2 max-w-4xl">
          {/* Step 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">1</span>
            <div className="text-base text-text leading-relaxed flex-1">
              Service 화면 → "Variables" 탭
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">2</span>
            <div className="text-base text-text leading-relaxed flex-1">
              "+ New Variable" 클릭 (또는 "Raw Editor")
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 3 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">3</span>
            <div className="text-base text-text leading-relaxed flex-1">
              등록
              <br />
              <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">Name: OPENAI_API_KEY</code>
              <br />
              <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">Value: sk-abc123...</code> (본인 키 붙여넣기)
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

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 5 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">5</span>
            <div className="text-base text-text leading-relaxed flex-1">
              자동 재배포 트리거됨 (1-2분 소요)
            </div>
          </div>
        </div>

        {/* Aside */}
        <aside className="mt-4 border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-4xl">
          <p className="text-sm text-text leading-relaxed">
            환경 변수 추가 시 Railway가 자동 재배포. 코드 push 없이 변수만 갱신해도 적용.
          </p>
        </aside>
    </>
  );
}
