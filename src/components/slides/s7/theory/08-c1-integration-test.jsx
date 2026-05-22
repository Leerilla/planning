// Source: lectures/S7/lecture.md lines 66-76 (#### 통합 테스트)
// Type: concept / definition
// D-050: lecture.md 원문 보존 + D-051: text-sm code block

export default function S7TheoryC1IntegrationTest() {
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Header marker + title */}
      <div className="flex items-center gap-2">
        <div className="w-1 h-6 bg-accent rounded-full" />
        <h2 className="text-lg font-bold text-text">
          통합 테스트 (Integration Test)
        </h2>
      </div>

      {/* Definition */}
      <div className="flex-1 flex flex-col gap-4">
        <p className="text-base text-text-sub leading-relaxed">
          여러 모듈이 합쳐졌을 때 데이터 흐름이 정상인지 검증.
        </p>

        {/* Code block */}
        <div className="bg-bg-soft rounded-xl p-4 border border-divider text-sm text-text-sub leading-relaxed">
          <div className="whitespace-pre-wrap break-words">
            "이 화면에서 저 화면으로 데이터가 잘 넘어가는가"
          </div>
        </div>
      </div>

      {/* Aside note */}
      <div className="bg-bg-soft rounded-xl p-4 border-l-2 border-divider">
        <p className="text-sm text-text-sub leading-relaxed">
          단위보다 큰 범위. 모듈 간 연결 확인.
        </p>
      </div>
    </div>
  );
}
