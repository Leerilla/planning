// Source: lectures/S9/lecture.md L458-466 (#### Kill이 빠른 실패)
// Type: Quote + Concept (blockquote + body paragraph)
// Pattern: Header marker + title + subtitle + blockquote + body paragraph
// Profile: hierarchical + comparison visual + balanced tone

export default function S9TheoryC4KillFastFail() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 4 · Kill 빠른 실패
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-2">
          Kill이 빠른 실패
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-text-sub mb-6 max-w-4xl">
          자료 1의 단정이 본 단계에서 적용된다
        </p>

        {/* Blockquote — accent tone */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-xl px-6 py-5 max-w-5xl">
          <div className="text-text-sub font-bold text-xs uppercase tracking-widest mb-3">
            자료 1
          </div>
          <p className="text-lg font-semibold text-text leading-relaxed">
            잘못된 가설을 빨리 검증하면 빨리 실패할 뿐이다.
          </p>
        </div>

        {/* Body paragraph */}
        <p className="text-base text-text max-w-5xl leading-relaxed">
          빨리 실패하고 다음 시드로 가는 것이{' '}
          <span className="font-semibold text-accent">
            5단계 사슬을 한 번 더 도는 것
          </span>
          이다.
        </p>
      </div>
    </>
  );
}
