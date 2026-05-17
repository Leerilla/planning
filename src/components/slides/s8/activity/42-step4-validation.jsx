// Source: lectures/S8/activity lecture.md Step 4 Validation (4-검증)
// Type: Activity checklist (Step 4 검증 기준)
// D-054: layout.tsx, window.clarity, Clarity, Sentry inline code + accent

export default function S8ActivityStep4Validation() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 4-검증 · Step 4 통과 기준
        </p>

        {/* Title and goal */}
        <h1 className="text-3xl font-bold text-text mb-2">
          Step 4 검증 기준
        </h1>
        <p className="text-base text-text-sub mb-5 max-w-5xl">
          6개 항목 모두 통과 시 Step N (정리·회고) 진입
        </p>

        {/* 6 checklist items */}
        <div className="flex flex-col gap-3 max-w-5xl">
          {/* Item 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              Clarity 추적 코드가 <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">layout.tsx</code>에 삽입됐는가
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              Sentry SDK가 FE와 BE 모두 초기화됐는가
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              이벤트 추적 코드 3개가 적절한 위치에 있는가
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              Clarity 대시보드에 본인 세션 1개가 들어왔는가
            </p>
          </div>

          {/* Item 5 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              이벤트 3개가 Clarity Events 탭에 기록됐는가
            </p>
          </div>

          {/* Item 6 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              Sentry 테스트 에러가 도착하는가
            </p>
          </div>
        </div>
    </>
  );
}
