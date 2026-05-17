// Source: lectures/S8/activity lecture.md Step 4-4 (시나리오 실행)
// Type: Example (4-4: 본인 시나리오 실행)
// D-054: Clarity, Sentry inline code + accent
// Phase 6 (2026-05-17): request.md #41 — 높이 줄이기 (수직 → 가로 grid)

export default function S8ActivityStep4ScenarioRun() {
  return (
    <>
      {/* Header marker */}
      <div className="h-1 w-12 bg-accent rounded-full mb-2" />
      <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-3">
        활동 4-4 · 본인 시나리오 실행
      </p>

      {/* Title and subtitle */}
      <h1 className="text-3xl font-bold text-text mb-1">
        4-4. 본인이 시나리오 실행
      </h1>
      <p className="text-sm text-text-sub mb-4 max-w-4xl">
        셋업 직후 시나리오 1회 실행 + 대시보드 확인
      </p>

      {/* Compact horizontal grid */}
      <div className="grid grid-cols-5 gap-2 max-w-6xl items-stretch">
        {/* Step 1 */}
        <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
          <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">1</span>
          <div className="text-sm text-text leading-snug flex-1">
            공개 URL 접속 (Vercel URL)
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
          <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">2</span>
          <div className="text-sm text-text leading-snug flex-1">
            시드 6번 시나리오 1회 실행
            <br />
            <span className="text-text-sub text-xs">· 사진 업로드<br />· 키워드 5개<br />· 카피 생성<br />· 결과 복사</span>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
          <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">3</span>
          <div className="text-sm text-text leading-snug flex-1">
            <code className="text-accent font-semibold text-xs">Clarity</code> 대시보드 (5-10분 후)
            <br />
            <span className="text-text-sub text-xs">→ 세션 1개 보이는지</span>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
          <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">4</span>
          <div className="text-sm text-text leading-snug flex-1">
            <code className="text-accent font-semibold text-xs">Sentry</code> 대시보드 확인
            <br />
            <span className="text-text-sub text-xs">→ 의도적 에러 도착</span>
          </div>
        </div>

        {/* Step 5 */}
        <div className="flex flex-col gap-2 p-3 border border-divider bg-success-soft rounded-xl">
          <span className="w-7 h-7 rounded-full bg-success text-bg flex items-center justify-center font-bold shrink-0 text-sm">5</span>
          <div className="text-sm text-text leading-snug flex-1">
            <code className="text-accent font-semibold text-xs">Clarity</code> → Events 탭
            <br />
            <span className="text-text-sub text-xs">→ 이벤트 3개 기록</span>
          </div>
        </div>
      </div>

      {/* Aside box with note */}
      <aside className="mt-3 border-l-4 border-divider bg-bg-soft rounded-r-xl px-5 py-2 max-w-6xl">
        <p className="text-sm text-text leading-relaxed">
          세션이 대시보드에 보이기까지 5-10분 지연. 즉시 안 보여도 정상. 셋업 직후 시나리오 1회 실행 후 내일 아침에 확인하는 흐름도 가능.
        </p>
      </aside>
    </>
  );
}
