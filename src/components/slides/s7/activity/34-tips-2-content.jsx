// Source: lectures/S7/lecture.md L902-908 (#### E2E 테스트 코드도 직접 안 씀 + Playwright MCP 연결 사전 확인)
// Type: concept (2-col tips)

export default function S7ActivityTips2Content() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 Tip 2 · Playwright MCP
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text mb-6">
        Playwright MCP 팁
      </h2>

      <div className="flex flex-col gap-3 max-w-5xl">
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">
            Tip 제목
          </div>
          <p className="text-base text-text leading-relaxed">
            E2E 테스트 코드도 직접 안 씀
          </p>
        </div>

        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <p className="text-base text-text leading-relaxed">
            시나리오만 자연어로 말함. 위임 3원칙이 테스트 작성에도 적용.
          </p>
        </div>

        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">
            Tip 제목
          </div>
          <p className="text-base text-text leading-relaxed">
            Playwright MCP 연결 사전 확인
          </p>
        </div>

        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <p className="text-base text-text leading-relaxed">
            Step 0에서 미리 확인. 연결 안 되어 있으면 <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">claude mcp add playwright</code>.
          </p>
        </div>
      </div>
    </>
  );
}
