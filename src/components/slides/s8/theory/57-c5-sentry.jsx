// Source: lectures/S8/captures/lecture.md (#### 5️⃣ 분석 도구 — Sentry 에러 자동 수집)
// Type: concept
// Pattern: concept (intro + pre flow + aside)
// D-053: Sentry 본격 정의

export default function S8TheoryC5Sentry() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 5 · 도구 2 · Sentry
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        Sentry — 에러 자동 수집
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-6 max-w-4xl">
        <span className="font-bold text-text">답하는 질문</span>: <em className="text-accent italic">"우리가 모르는 에러가 얼마나 있는가?"</em>
      </p>

      {/* Intro paragraph */}
      <p className="text-base text-text mb-6 max-w-4xl leading-relaxed">
        사용자는 에러를 <span className="font-semibold">알려주지 않음</span>. 본인이 만든 코드의 빈틈을 사용자가 발견하지만 보고 의무가 없음.
      </p>

      {/* Flow diagram */}
      <div className="flex flex-col gap-2 max-w-4xl mb-4">
        {/* Step 1 */}
        <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
          <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">1</span>
          <div className="text-base text-text leading-relaxed flex-1">
            사용자가 에러 만남
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center text-text-muted text-lg">↓</div>

        {/* Step 2 */}
        <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
          <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">2</span>
          <div className="text-base text-text leading-relaxed flex-1">
            "이거 안 되네" 한 마디
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center text-text-muted text-lg">↓</div>

        {/* Step 3 */}
        <div className="flex items-start gap-3 p-4 border border-divider bg-warning-soft rounded-xl">
          <span className="w-8 h-8 rounded-full bg-warning text-bg flex items-center justify-center font-bold shrink-0 text-sm">⚠</span>
          <div className="text-base text-text leading-relaxed flex-1">
            그냥 떠남 (작업자는 영원히 모름)
          </div>
        </div>

        {/* Step 4: Sentry */}
        <div className="flex items-start gap-3 p-4 border border-divider border-l-4 border-l-success bg-success-soft rounded-xl mt-2">
          <span className="w-8 h-8 rounded-full bg-success text-bg flex items-center justify-center font-bold shrink-0 text-sm">✓</span>
          <div className="text-base text-text leading-relaxed flex-1">
            Sentry 있으면
            <br />
            <span className="text-text-sub text-sm">에러 발생 즉시 작업자에게 자동 전송<br />
            + 발생 컨텍스트 (어느 페이지, 어느 버튼, 어떤 입력)</span>
          </div>
        </div>
      </div>

      {/* Footer Aside */}
      <aside className="mt-4 border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-5xl">
        <p className="text-sm text-text leading-relaxed">
          시드 6번 예시: OpenAI API 호출이 5% 사용자에게 timeout 발생 → Sentry가 알려주면 retry 로직 추가 결정. 알리지 않았다면 5% 사용자는 "안 됨"만 경험하고 떠남.
        </p>
      </aside>
    </>
  );
}
