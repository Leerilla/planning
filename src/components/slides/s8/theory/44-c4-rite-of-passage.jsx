// Source: lectures/S8/captures/lecture.md line 567-583 (#### 통과 의례인 이유)
// Type: process
// Pattern: ProcessSlide with 4-step reveal
// Profile: logic=hierarchical / visual=comparison / tone=strong

export default function S8TheoryC4RiteOfPassage() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 4 · 통과 의례
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        통과 의례인 이유
      </h2>

      <p className="text-base text-text-sub mb-6 max-w-4xl">
        로컬에서 동작 → 배포 후 차단 → 모든 풀스택 빌드자가 만나는 패턴
      </p>

      {/* Process Flow Diagram */}
      <div className="flex flex-col gap-2 max-w-4xl">
        {/* Step 1 */}
        <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
          <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">1</span>
          <div className="text-base text-text leading-relaxed flex-1">
            로컬에서는 FE도 BE도 <span className="font-semibold">localhost</span>
            <br />
            <span className="text-text-sub">→ 같은 도메인이므로 CORS 안 막힘</span>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center text-text-muted text-lg">↓</div>

        {/* Step 2 */}
        <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
          <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">2</span>
          <div className="text-base text-text leading-relaxed flex-1">
            배포 후 FE는 <span className="font-semibold">vercel.app</span>, BE는 <span className="font-semibold">railway.app</span>
            <br />
            <span className="text-text-sub">→ 다른 도메인이 되면서 CORS 차단 시작</span>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center text-text-muted text-lg">↓</div>

        {/* Step 3 */}
        <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
          <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">3</span>
          <div className="text-base text-text leading-relaxed flex-1">
            CORS 설정 필요한 시점 = 첫 배포 직후
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center text-text-muted text-lg">↓</div>

        {/* Step 4 */}
        <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
          <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">4</span>
          <div className="text-base text-text leading-relaxed flex-1">
            모든 풀스택 빌드자가 한 번 만나는 패턴
          </div>
        </div>
      </div>

      {/* Aside */}
      <aside className="mt-4 border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-4xl">
        <p className="text-sm text-text leading-relaxed">
          로컬에서 동작하던 게 배포 후 <em>안 됨</em>. 좌절 포인트지만 정상 흐름. CORS 에러를 만나면 <em>"배포가 잘됐다는 신호"</em>로 받아들일 것.
        </p>
      </aside>
    </>
  );
}
