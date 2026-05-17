// Source: lectures/S7/lecture.md L599-614 (1-2. 자연어 E2E 테스트 명령)
// Type: example (pre code + 2 aside)

export default function S7Activity_1_2_Prompt() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-2 · 자연어 명령
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text leading-snug mb-1">
        1-2. 자연어 E2E 테스트 명령
      </h2>
      <p className="text-base text-text-sub leading-relaxed mb-6 max-w-4xl">
        Claude Code 세션에 시나리오 + <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">Playwright MCP</code> 위임
      </p>

      <pre className="bg-bg border border-divider rounded-xl p-4 text-sm whitespace-pre-line max-w-4xl text-text leading-relaxed">
{`docs/prd.md의 핵심 시나리오를 E2E 테스트로 만들어줘:

"셀러가 카피 입력 화면에 상품 사진과 키워드 5개를 입력하고
 '카피 생성' 버튼을 클릭하면 결과 화면에 차별화 카피 3개가 표시된다"

Playwright MCP로 테스트 코드 작성과 실행까지 해줘.
테스트 파일은 e2e/ 폴더에 둬.`}
      </pre>

      <div className="mt-4 border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-4xl">
        <p className="text-sm text-text leading-relaxed">
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-xs">
            Playwright
          </code>
          는 E2E 자동화 표준 도구, <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-xs">MCP</code>는 Claude가 직접 실행하는 채널.
        </p>
      </div>

      <div className="mt-3 border-l-4 border-divider bg-bg-soft rounded-r-xl px-6 py-3 max-w-4xl">
        <p className="text-sm text-text leading-relaxed">
          테스트 코드를 직접 작성 안 함. 시나리오만 자연어로. 위임 3원칙이 테스트에도 적용.
        </p>
      </div>
    </>
  );
}
