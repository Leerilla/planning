// Source: lectures/S7/lecture.md lines 24-40 (#### 자료 6 종료 상태와 본 단계의 본질)
// Type: example
// D-050: lecture.md 원문 보존 / SlideFrame 제거 (SlideDeck이 자동 제공)

export default function S7TheoryC1Data6EndState() {
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Header marker */}
      <div className="flex items-center gap-2">
        <div className="w-1 h-6 bg-accent rounded-full" />
        <h2 className="text-lg font-bold text-text">
          자료 6 종료 상태와 본 단계의 본질
        </h2>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-2 gap-4 flex-1">
        {/* Left: 자료 6 끝 손에 있는 것 */}
        <div className="border-l-4 border-accent bg-bg-soft rounded-r-md p-5 flex flex-col gap-3">
          <h3 className="font-bold text-text text-sm">
            자료 6 끝 손에 있는 것
          </h3>
          <ul className="space-y-2 text-sm text-text-sub">
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <span>동작하는 화면 2개 (카피 입력 + 카피 결과)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <span>prd-reviewer + git-committer 두 sub-agent</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <span>PostToolUse + Stop 두 hook</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <span>병합된 PR 9개</span>
            </li>
          </ul>
        </div>

        {/* Right: 미확인 사항 */}
        <div className="border-l-4 border-accent bg-bg-soft rounded-r-md p-5 flex flex-col gap-3">
          <h3 className="font-bold text-text text-sm">
            미확인 사항
          </h3>
          <ul className="space-y-2 text-sm text-text-sub">
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <span>화면 1 → 화면 2 시나리오가 끝까지 통과하는가?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <span>사용자가 입력부터 결과까지 한 흐름으로 완수하는가?</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Aside note */}
      <div className="bg-bg-soft rounded-md p-4 border-l-2 border-divider">
        <p className="text-sm text-text-sub">
          화면별 동작은 확인됐지만 <span className="font-bold text-text">시나리오 통과</span>는 별개의 검증. 본 단계가 그 빈자리를 채운다.
        </p>
      </div>
    </div>
  );
}
