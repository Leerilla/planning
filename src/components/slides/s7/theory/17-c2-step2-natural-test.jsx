// Source: lectures/S7/lecture.md line 168-181
// Type: example
// Profile: systematic/simulation/medium-interactive

export default function S7TheoryC2Step2NaturalTest({ deckMeta }) {
  return (
    <div className="flex h-full flex-col gap-8 bg-bg-base p-12">
      {/* Header marker */}
      <div className="flex items-center gap-4">
        <div className="h-[3px] w-10 rounded-full bg-accent" />
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">
          2단계
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-text">
        2단계: 자연어 테스트 작성
      </h1>

      {/* Code block */}
      <div className="space-y-6 max-w-3xl">
        <pre className="whitespace-pre-wrap rounded-md border border-divider bg-bg-soft px-5 py-4 text-sm text-text">
PRD의 핵심 시나리오를 E2E 테스트로 만들어줘:
"셀러가 카피 입력 화면에 상품 사진과
 키워드 5개를 입력하고 '카피 생성' 버튼을 클릭하면
 결과 화면에 차별화 카피 3개가 표시된다"

Playwright MCP로 테스트 코드 작성과 실행까지 해줘.
        </pre>

        {/* Aside */}
        <div className="rounded-r-md border-l-4 border-accent bg-bg-soft px-6 py-4">
          <p className="text-sm text-text-sub">
            테스트 코드를 직접 작성하지 않음. 시나리오만 자연어로.
          </p>
        </div>
      </div>
    </div>
  );
}
