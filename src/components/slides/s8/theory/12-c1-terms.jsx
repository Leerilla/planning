// Source: lectures/S8/captures/lecture.md lines 123-130 (#### 1️⃣ 챕터 용어 해설)
// Type: terms
// D-050: lecture.md 원문 보존 + D-035: emoji 제거 (텍스트 변환)

export default function S8TheoryC1Terms() {
  const terms = [
    {
      term: "FE (Frontend)",
      definition: "사용자가 직접 보는 화면. 브라우저 실행"
    },
    {
      term: "BE (Backend)",
      definition: "사용자에게 안 보이는 서버. 비밀과 로직 보관"
    },
    {
      term: "분리 배포",
      definition: "FE와 BE를 다른 서버에 배포"
    },
    {
      term: "신뢰 경계",
      definition: "FE는 신뢰 X, BE는 신뢰 O"
    }
  ];

  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Header marker + title */}
      <div className="flex items-center gap-2">
        <div className="w-1 h-6 bg-accent rounded-full" />
        <h2 className="text-lg font-bold text-text">
          01 챕터 용어 해설
        </h2>
      </div>

      {/* Terms table */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="max-w-4xl overflow-y-auto rounded-xl border border-divider">
          {/* Header row */}
          <div className="grid grid-cols-[200px_1fr] bg-bg-soft border-b-2 border-divider sticky top-0">
            <div className="px-6 py-3 border-r border-divider">
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
              className={`grid grid-cols-[200px_1fr] ${
                idx < terms.length - 1 ? "border-b border-divider" : ""
              }`}
            >
              <div className="px-6 py-3 bg-bg border-r border-divider">
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
