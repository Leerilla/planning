// Source: lectures/S8/captures/lecture.md line 594-608 (#### 자율 디버깅 적용)
// Type: process
// Pattern: ProcessSlide with 4-step reveal
// Profile: logic=hierarchical / visual=comparison / tone=strong

export default function S8TheoryC4AutonomousDebug() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 4 · 자율 디버깅
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        자율 디버깅 적용
      </h2>

      <p className="text-base text-text-sub mb-6 max-w-4xl">
        자료 7의 3원칙 그대로
      </p>

      {/* Process Flow */}
      <div className="flex flex-col gap-2 max-w-4xl">
        {/* Step 1 */}
        <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
          <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">1</span>
          <div className="text-base text-text leading-relaxed flex-1">
            브라우저 콘솔에서 에러 풀 메시지 복사
            <br />
            <span className="text-text-sub text-sm">F12 → Console 탭<br />
            "blocked by CORS policy..." 복사</span>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center text-text-muted text-lg">↓</div>

        {/* Step 2 */}
        <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
          <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">2</span>
          <div className="text-base text-text leading-relaxed flex-1">
            자율 디버깅 3원칙 명령
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center text-text-muted text-lg">↓</div>

        {/* Step 3 */}
        <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
          <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">3</span>
          <div className="text-base text-text leading-relaxed flex-1">
            수정 후 자동 재배포
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center text-text-muted text-lg">↓</div>

        {/* Step 4 */}
        <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
          <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">4</span>
          <div className="text-base text-text leading-relaxed flex-1">
            FE 새로고침 → 에러 사라지면 통과
          </div>
        </div>
      </div>
    </>
  );
}
