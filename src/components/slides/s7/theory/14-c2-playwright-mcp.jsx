// Source: lectures/S7/lecture.md lines 139-145 (#### Playwright MCP)
// Type: concept / definition
// D-053: 도구 이름 첫 등장 설명 의무 (Playwright MCP) — 본 자료 핵심

export default function S7TheoryC2PlaywrightMCP() {
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Header marker + label */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-xs font-bold text-accent uppercase tracking-wider">
          도구 정의 ⭐ 본 자료 핵심
        </span>
      </div>

      <h2 className="text-lg font-bold text-text">
        Playwright MCP
      </h2>

      {/* Main definition box with D-053 emphasis */}
      <div className="border-l-4 border-accent bg-bg-soft rounded-r-md px-6 py-5">
        <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
          Playwright MCP
        </p>
        <p className="text-base text-text-sub leading-relaxed">
          Claude Code가 Playwright를 자연어로 조작하는 통합.
        </p>
      </div>

      {/* Aside note with D-053 context */}
      <div className="border-l-4 border-accent bg-accent-soft rounded-r-md px-6 py-4">
        <p className="text-sm text-text-sub leading-relaxed">
          시나리오를 자연어로 설명 → 테스트 코드 생성 → 실행까지. 작업자가 테스트 코드를 직접 작성하지 않는다.
        </p>
      </div>
    </div>
  );
}
