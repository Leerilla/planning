// Source: lectures/S8/activity lecture.md Step 4-3 (이벤트 결정)
// Type: Comparison (4-3: 이벤트 추적 코드 결정)
// D-054: InputForm.tsx, CopyButton.tsx, window.clarity inline code + accent

export default function S8ActivityStep4EventsDecide() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 4-3 · 이벤트 추적 결정
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          4-3. 이벤트 추적 코드 결정
        </h1>
        <p className="text-base text-text-sub mb-4 max-w-5xl">
          시드 6번 핵심 이벤트 3개
        </p>

        {/* Comparison table */}
        <div className="max-w-5xl overflow-hidden rounded-xl border border-divider">
          {/* Header row */}
          <div className="grid grid-cols-[200px_1fr_1fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
            <div className="flex items-center">
              <span className="text-sm font-bold text-text-muted uppercase tracking-wide">이벤트</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-bold text-text-muted uppercase tracking-wide">시드 6번</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-bold text-text-muted uppercase tracking-wide">위치</span>
            </div>
          </div>

          {/* Row 1: Page view */}
          <div className="grid grid-cols-[200px_1fr_1fr] px-5 py-4 border-b border-divider">
            <div className="flex items-center justify-center">
              <span className="text-accent font-bold">페이지 진입</span>
            </div>
            <div className="flex items-center">
              <span className="text-text-sub">카피 입력 화면 방문</span>
            </div>
            <div className="flex items-center">
              <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
                InputForm.tsx
              </code>
            </div>
          </div>

          {/* Row 2: Button click */}
          <div className="grid grid-cols-[200px_1fr_1fr] px-5 py-4 border-b border-divider">
            <div className="flex items-center justify-center">
              <span className="text-accent font-bold">핵심 버튼 클릭</span>
            </div>
            <div className="flex items-center">
              <span className="text-text-sub">"카피 생성" 클릭</span>
            </div>
            <div className="flex items-center">
              <span className="text-text">InputForm 버튼</span>
            </div>
          </div>

          {/* Row 3: Completion */}
          <div className="grid grid-cols-[200px_1fr_1fr] px-5 py-4">
            <div className="flex items-center justify-center">
              <span className="text-accent font-bold">핵심 기능 완료</span>
            </div>
            <div className="flex items-center">
              <span className="text-text-sub">카피 1개 복사</span>
            </div>
            <div className="flex items-center">
              <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
                CopyButton.tsx
              </code>
            </div>
          </div>
        </div>
    </>
  );
}
