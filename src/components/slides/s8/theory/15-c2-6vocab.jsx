// Source: lectures/S8/captures/lecture.md L151-161 (#### 최소 지식 6가지)
// Type: terms
// D-050: lecture.md 원문 보존
// S8 T17a (2026-05-25): 강사 요구 — 표 헤더/본문 텍스트 라인 정렬
//                       헤더 py-3 → py-4, 본문 셀 text-sm 명시 (헤더와 폰트 크기 통일)

export default function S8TheoryC2SixVocab() {
  const terms = [
    {
      num: "1",
      term: "HTTP 요청·응답",
      reason: "FE와 BE의 통신 방식"
    },
    {
      num: "2",
      term: "도메인 (Domain)",
      reason: "FE와 BE의 위치"
    },
    {
      num: "3",
      term: "포트 (Port)",
      reason: "서버 안의 문"
    },
    {
      num: "4",
      term: "환경 변수",
      reason: "코드 밖의 주입 값"
    },
    {
      num: "5",
      term: "빌드와 배포",
      reason: "코드를 공개하는 두 단계"
    },
    {
      num: "6",
      term: "API 엔드포인트",
      reason: "BE가 받는 주소"
    }
  ];

  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Header marker + label */}
      <div className="flex items-baseline gap-3">
        <span className="h-1 w-12 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          이론 2 · 6가지 어휘
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text">최소 지식 6가지</h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub max-w-4xl leading-relaxed mb-2">
        본 학습이 깔고 가는 개발 어휘
      </p>

      {/* Table */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="max-w-5xl overflow-hidden rounded-xl border border-divider">
          {/* Header row */}
          <div className="grid grid-cols-[60px_220px_1fr] bg-bg-soft px-5 py-4 border-b-2 border-divider">
            <div className="flex items-center justify-center">
              <p className="text-sm font-bold text-text-muted uppercase tracking-wide">#</p>
            </div>
            <div className="flex items-center">
              <p className="text-sm font-bold text-text-muted uppercase tracking-wide">개념</p>
            </div>
            <div className="flex items-center">
              <p className="text-sm font-bold text-text-muted uppercase tracking-wide">이유</p>
            </div>
          </div>

          {/* Data rows */}
          {terms.map((item, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-[60px_220px_1fr] px-5 py-4 ${
                idx < terms.length - 1 ? "border-b border-divider" : ""
              }`}
            >
              <div className="flex items-center justify-center">
                <p className="text-sm text-accent font-bold">
                  {item.num}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-sm font-bold text-text">
                  {item.term}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-text-sub">
                  {item.reason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
