// Source: lectures/S8/captures/lecture.md L1319-1337
// Type: Example (3-1: CORS 에러 풀 메시지 수집)
// D-035: F12 → "Console" 텍스트 강조
// D-054: F12 / Console inline code + accent

export default function S8ActivityStep3ErrorCollect() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 3-1 · 에러 수집
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          3-1. CORS 에러 풀 메시지 수집
        </h1>
        <p className="text-base text-text-sub mb-4 max-w-4xl">
          메뉴 조작:
        </p>

        {/* Diagram with step-by-step menu */}
        <div className="flex flex-col gap-2 max-w-4xl">
          {/* Step 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">1</span>
            <div className="text-base text-text leading-relaxed flex-1">
              발급된 Vercel URL에서 시드 6번 시나리오 실행 시도
              <br />
              <span className="text-text-sub text-sm">예: 상품 사진 업로드 + 키워드 입력 + "카피 생성" 클릭</span>
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">2</span>
            <div className="text-base text-text leading-relaxed flex-1">
              <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">F12</code> (또는 우클릭 → "검사")
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 3 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">3</span>
            <div className="text-base text-text leading-relaxed flex-1">
              "Console" 탭 클릭
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 4 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-danger-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-danger text-bg flex items-center justify-center font-bold shrink-0 text-sm">⚠</span>
            <div className="text-base text-text leading-relaxed flex-1">
              빨간 "blocked by CORS policy..." 메시지 찾기
            </div>
          </div>

          <div className="flex justify-center text-text-muted text-lg">↓</div>

          {/* Step 5 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <span className="w-8 h-8 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">5</span>
            <div className="text-base text-text leading-relaxed flex-1">
              메시지 전체 우클릭 → "Copy message"
            </div>
          </div>
        </div>

        {/* Aside box with D-054 */}
        <aside className="mt-4 border-l-4 border-divider bg-bg-soft rounded-r-xl px-6 py-3 max-w-4xl">
          <p className="text-sm text-text leading-relaxed">
            "Copy message"는 메시지 1개의 전체 텍스트 복사. 여러 줄 스택 트레이스가 함께 복사됨.
          </p>
        </aside>
    </>
  );
}
