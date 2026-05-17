// Source: lectures/S7/lecture.md lines 78-91 (#### E2E 테스트)
// Type: example / scenario
// D-050: lecture.md 원문 보존 + D-051: text-sm code block

export default function S7TheoryC1E2ETest() {
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Header marker + title */}
      <div className="flex items-center gap-2">
        <div className="w-1 h-6 bg-accent rounded-full" />
        <h2 className="text-lg font-bold text-text">
          E2E 테스트 (End-to-End Test)
        </h2>
      </div>

      {/* Definition */}
      <div className="flex-1 flex flex-col gap-4">
        <p className="text-base text-text-sub leading-relaxed">
          사용자가 처음부터 끝까지 시나리오를 완수할 수 있는지 검증.
        </p>

        {/* Scenario label */}
        <p className="text-sm font-semibold text-text">
          시드 6번 예시:
        </p>

        {/* Code block */}
        <div className="bg-bg-soft rounded-md p-4 border border-divider text-sm text-text-sub leading-relaxed">
          <div className="whitespace-pre-line break-words">
            {"셀러가 카피 입력 화면에 상품 사진과 키워드 5개를 입력하고\n'카피 생성' 버튼을 클릭하면 결과 화면에\n차별화 카피 3개가 표시된다"}
          </div>
        </div>
      </div>

      {/* Aside note */}
      <div className="bg-bg-soft rounded-md p-4 border-l-2 border-divider">
        <p className="text-sm text-text-sub leading-relaxed">
          가장 큰 범위. 실제 사용자 경험 시뮬레이션.
        </p>
      </div>
    </div>
  );
}
