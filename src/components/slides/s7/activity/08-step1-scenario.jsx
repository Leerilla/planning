// Source: lectures/S7/lecture.md L580-597 (1-1. PRD 핵심 시나리오 선택 + 시드 6번 사례)
// Type: example (2-col: 정의 vs 시드6)

export default function S7Activity_1_1_Scenario() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-1 · PRD 시나리오
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text leading-snug mb-1">
        1-1. PRD 핵심 시나리오 선택
      </h2>
      <p className="text-base text-text-sub leading-relaxed mb-6 max-w-5xl">
        사용자가 처음부터 끝까지 거치는 흐름 1개
      </p>

      <div className="grid grid-cols-2 gap-4 max-w-5xl">
        {/* 좌: 정의 */}
        <div className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-5 py-4">
          <div className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-3">
            정의
          </div>
          <p className="text-base text-text leading-relaxed">
            <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
              docs/prd.md
            </code>
            에서 사용자가 처음부터 끝까지 거치는 흐름 1개.
          </p>
        </div>

        {/* 우: 시드 6번 사례 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-semibold text-xs uppercase tracking-wider mb-3">
            시드 6번 사례
          </div>
          <p className="text-sm text-text leading-relaxed whitespace-pre-line">
            {`셀러가 카피 입력 화면에 상품 사진과
키워드 5개를 입력하고 '카피 생성' 버튼을 클릭하면
결과 화면에 차별화 카피 3개가 표시되고,
복사 버튼을 클릭하면 카피 1개가 클립보드에 복사된다`}
          </p>
        </div>
      </div>

      <div className="mt-4 border-l-4 border-divider bg-bg-soft rounded-r-xl px-6 py-3 max-w-4xl">
        <p className="text-sm text-text leading-relaxed">
          사용자가 PRD 가설을 검증하는 핵심 흐름이 시나리오의 첫 후보.
        </p>
      </div>
    </>
  );
}
