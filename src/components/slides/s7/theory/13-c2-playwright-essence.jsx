// Source: lectures/S7/lecture.md lines 135-137 (#### Playwright의 정체)
// Type: concept / definition
// D-053: 도구 이름 첫 등장 설명 의무 (Playwright)

export default function S7TheoryC2PlaywrightEssence() {
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Header marker + title */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-xs font-bold text-accent uppercase tracking-wider">
          Playwright 정의
        </span>
      </div>

      <h2 className="text-lg font-bold text-text">
        Playwright의 정체
      </h2>

      {/* Definition box with D-053 emphasis */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="border-l-4 border-accent bg-bg-soft rounded-r-md px-6 py-5">
          <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
            Playwright
          </p>
          <p className="text-base text-text-sub leading-relaxed">
            브라우저 자동화 도구. 코드로 사람처럼 브라우저 조작. 클릭, 입력, 페이지 이동 자동화.
          </p>
        </div>
      </div>
    </div>
  );
}
