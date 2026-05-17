// Source: lectures/S8/captures/lecture.md L1691-1711 (#### 사용자 들어오기 전에 깐다, #### 세 도구의 다른 질문 기억, #### 이벤트 추적은 3개로 시작, #### 이벤트명은 PRD 가설과 연결)
// Type: Concept (4 cards + table)
// D-050: lecture.md 원문 보존 / D-054: copy_generation_completed inline code accent

export default function S8ActivityTip6Content() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          활동 Tip 6 · 분석 도구
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text mb-6">분석 도구 팁</h2>

      {/* Cards */}
      <div className="flex flex-col gap-3 max-w-5xl">
        {/* Card 1 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">사용자 들어오기 전에 깐다</div>
          <p className="text-base text-text leading-relaxed">
            들어온 후 깔면 그 사용자의 행동은 영원히 못 본다. 1명의 세션은 한 번뿐.
          </p>
        </div>

        {/* Card 2: Table */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-3">세 도구의 다른 질문 기억</div>
          <div className="max-w-3xl rounded-xl border border-divider overflow-hidden">
            <div className="grid grid-cols-2 bg-bg-soft px-4 py-2">
              <div className="text-xs font-bold text-text-muted uppercase tracking-wide">도구</div>
              <div className="text-xs font-bold text-text-muted uppercase tracking-wide">질문</div>
            </div>
            <div className="grid grid-cols-2 px-4 py-3 border-b border-divider">
              <div className="text-accent font-semibold text-sm">Clarity</div>
              <div className="text-text text-sm">어디서 막혔는가</div>
            </div>
            <div className="grid grid-cols-2 px-4 py-3 border-b border-divider">
              <div className="text-accent font-semibold text-sm">Sentry</div>
              <div className="text-text text-sm">무슨 에러 있는가</div>
            </div>
            <div className="grid grid-cols-2 px-4 py-3">
              <div className="text-accent font-semibold text-sm">이벤트 추적</div>
              <div className="text-text text-sm">가설 통과하는가</div>
            </div>
          </div>
          <p className="mt-2 text-sm text-text">한 도구로 다 해결 안 됨.</p>
        </div>

        {/* Card 3 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">이벤트 추적은 3개로 시작</div>
          <p className="text-base text-text leading-relaxed">
            페이지 진입 / 핵심 버튼 / 핵심 기능 완료. 나머지는 자가 학습 영역.
          </p>
        </div>

        {/* Card 4 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">이벤트명은 PRD 가설과 연결</div>
          <p className="text-base text-text leading-relaxed">
            <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">copy_generation_completed</code> 같은 명명. 어떤 가설 검증과 연결되는지 명확하게.
          </p>
        </div>
      </div>
    </div>
  );
}
