// Source: lectures/S7/lecture.md lines 120-127 (#### 1️⃣ 챕터 용어 해설)
// Type: terms
// D-050: lecture.md 원문 보존 + D-035: emoji 제거 (텍스트 변환)

export default function S7TheoryC1Terms() {
  const terms = [
    {
      term: "단위 테스트",
      definition: "한 함수가 올바른 값을 반환하는지 검증"
    },
    {
      term: "통합 테스트",
      definition: "여러 모듈 연결 시 데이터 흐름이 정상인지"
    },
    {
      term: "E2E 테스트",
      definition: "사용자가 처음부터 끝까지 시나리오 완수"
    },
    {
      term: "시나리오 통과",
      definition: "화면 떰과 다른 차원의 검증. 동작의 진짜 정의"
    }
  ];

  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Header marker + title */}
      <div className="flex items-center gap-2">
        <div className="w-1 h-6 bg-accent rounded-full" />
        <h2 className="text-lg font-bold text-text">
          챕터 용어 해설
        </h2>
      </div>

      {/* Terms table */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="max-w-4xl overflow-y-auto rounded-xl border border-divider">
          {/* Header row */}
          <div className="grid grid-cols-[140px_1fr] bg-bg-soft border-b border-divider sticky top-0">
            <div className="px-6 py-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-sub">
                용어
              </p>
            </div>
            <div className="px-6 py-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-sub">
                정의
              </p>
            </div>
          </div>

          {/* Data rows */}
          {terms.map((item, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-[140px_1fr] ${
                idx < terms.length - 1 ? "border-b border-divider" : ""
              }`}
            >
              <div className="px-6 py-3 bg-bg">
                <p className="text-sm font-semibold text-text">
                  {item.term}
                </p>
              </div>
              <div className="px-6 py-3 bg-bg">
                <p className="text-sm text-text-sub leading-relaxed">
                  {item.definition}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
