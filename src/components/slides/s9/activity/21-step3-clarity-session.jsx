// Source: lectures/S9/lecture.md L727-740 (#### 3-1 Clarity 세션 리플레이, example 3-question + aside)
// Type: ExampleSlide

export default function S9ActivityStep3ClaritySession() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 3-1 · Clarity 세션 리플레이
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          3-1. Clarity 세션 리플레이 보기
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          대시보드에서 세션 5건 이상을 영상으로 본다
        </p>

        {/* Question box */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-5 max-w-5xl">
          <p className="text-accent font-bold text-xs uppercase tracking-widest mb-3">
            보면서 답할 질문
          </p>
          <div className="flex flex-col gap-3 text-base text-text">
            {/* Bullet 1 */}
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
              <span>사용자가 어느 단계에서 머뭇거리는가</span>
            </div>

            {/* Bullet 2 */}
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
              <span>어떤 버튼을 클릭하지 못하고 화면을 떠나는가</span>
            </div>

            {/* Bullet 3 */}
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
              <span>의도와 다른 동작을 하는 사용자가 있는가</span>
            </div>
          </div>
        </div>

        {/* Aside note */}
        <div className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-6 py-3 max-w-5xl mt-5">
          <p className="text-sm text-text leading-relaxed">
            3-5건의 세션에서 같은 자리에서 막히는 패턴이 있으면 신호로 메모. 1-2건만 보이면 잡음으로 분류.
          </p>
        </div>
      </div>
    </>
  );
}
