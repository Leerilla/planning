// Source: lectures/S9/lecture.md L377-379 (#### 학습 종료 ≠ 빌드 종료)
// Type: Concept (inline)
// Pattern: Header marker + title + 2 body paragraphs + aside
// Profile: hierarchical + comparison visual + balanced tone

export default function S9TheoryC4EndNotEnd() {
  return (
    <>
      <div className="flex flex-col gap-4 h-full justify-center">
        {/* Header marker */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 4 · 학습 종료 ≠ 빌드 종료
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-2">
          학습 종료 ≠ 빌드 종료
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-text-sub mb-6 max-w-4xl">
          21시간 한 사이클은 끝나지만 본인 빌드는 이어진다
        </p>

        {/* Body paragraph 1 */}
        <p className="text-base text-text leading-relaxed max-w-4xl mb-4">
          본 학습은 21시간(16시간 + 5시간)의 한 사이클이다.
        </p>

        {/* Body paragraph 2 */}
        <p className="text-base text-text font-semibold leading-relaxed max-w-4xl mb-6">
          본 단계가 끝나면 학습은 종료되지만 작업자의 빌드는 이어진다.
        </p>

        {/* Aside */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-5 max-w-4xl">
          <p className="text-base text-text leading-relaxed">
            학습은 종료되지만 본인 빌드는 다음 사이클로 진화한다. 21시간 학습은 출발점이다.
          </p>
        </div>
      </div>
    </>
  );
}
