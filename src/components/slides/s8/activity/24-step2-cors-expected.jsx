// Source: lectures/S8/captures/lecture.md L1291-1306
// Type: Activity (Step 2-5: 화면 확인 + CORS)
// D-035: ✓/✗ → [정상]/[에러] 텍스트 대체

export default function S8ActivityStep2CorsExpected() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 2-5 · 화면 확인
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          2-5. 화면 확인 (CORS 에러 예상)
        </h1>
        <p className="text-base text-text-sub mb-4 max-w-4xl">
          발급된 Vercel URL을 브라우저로 열기
        </p>

        {/* Diagram with step-by-step flow (D-035: [정상]/[에러]) */}
        <div className="flex flex-col gap-2 max-w-4xl">
          {/* Step 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-success-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-success text-bg flex items-center justify-center font-bold shrink-0 text-sm">✓</span>
            <div className="text-base text-text leading-relaxed flex-1">
              화면이 뜸 (FE는 정상 동작)
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-warning text-bg flex items-center justify-center font-bold shrink-0 text-sm">⚠</span>
            <div className="text-base text-text leading-relaxed flex-1">
              FE가 BE 호출 시도
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 3 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-danger-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-danger text-bg flex items-center justify-center font-bold shrink-0 text-sm">✗</span>
            <div className="text-base text-text leading-relaxed flex-1">
              "blocked by CORS policy" 에러
              <br />
              <span className="text-text-sub text-sm">F12 → Console 탭에서 확인 가능</span>
            </div>
          </div>
        </div>

        {/* Aside box with explanation and D-054 */}
        <aside className="mt-4 border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-4xl">
          <p className="text-sm text-text leading-relaxed">
            CORS 에러는 예상된 결과. "배포가 잘됐다는 신호"로 받아들임. 다음 Step에서 해결. <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">F12</code>는 브라우저의 개발자 도구 단축키.
          </p>
        </aside>
    </>
  );
}
