// Source: lectures/S7/lecture.md lines 54-64 (#### 단위 테스트)
// Type: concept / definition
// D-050: lecture.md 원문 보존 + D-051: text-sm code block / SlideFrame 제거

export default function S7TheoryC1UnitTest() {
  return (
    <div className="flex flex-col gap-6 h-full">
        {/* Header marker + title */}
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 bg-accent rounded-full" />
          <h2 className="text-lg font-bold text-text">
            단위 테스트 (Unit Test)
          </h2>
        </div>

        {/* Definition */}
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-base text-text-sub leading-relaxed">
            한 함수가 올바른 값을 반환하는지 검증.
          </p>

          {/* Code block */}
          <div className="bg-bg-soft rounded-md p-4 border border-divider text-sm text-text-sub leading-relaxed">
            <div className="whitespace-pre-wrap break-words">
              "이 함수에 입력 A를 주면 출력 B가 나오는가"
            </div>
          </div>
        </div>

        {/* Aside note */}
        <div className="bg-bg-soft rounded-md p-4 border-l-2 border-divider">
          <p className="text-sm text-text-sub leading-relaxed">
            가장 작은 단위. 빠르게 실행. 하지만 전체 흐름은 알 수 없다.
          </p>
        </div>
      </div>
  );
}
