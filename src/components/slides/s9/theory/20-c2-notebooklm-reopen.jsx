// Source: lectures/S9/lecture.md L205-225 (자동 매핑, comparison 2-col)
// Type: ComparisonSlide
// Pattern: NotebookLM 재오픈 2-col (자료 3 추가 업로드 / 교차 질문 가능)
// Profile: hierarchical + comparison visual + balanced tone

export default function S9TheoryC2NotebookLMReopen() {
  return (
    <>
      <div className="flex flex-col h-full">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 2 · NotebookLM 재오픈
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          NotebookLM 재오픈
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-7 max-w-5xl">
          자료 3에서 만든 노트북이 본 단계에서 <span className="font-semibold">다시 사용된다</span>
        </p>

        {/* 2-col grid */}
        <div className="grid grid-cols-2 gap-4 max-w-6xl">
          {/* Left: 자료 3 노트북에 추가 업로드 */}
          <div className="border border-divider bg-bg-soft rounded-2xl px-5 py-5">
            <div className="text-text-sub font-bold text-xs uppercase tracking-widest mb-4">
              자료 3 노트북에 추가 업로드
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span className="text-sm text-text">응답 정리 메모</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span className="text-sm text-text">Clarity 세션 메모</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span className="text-sm text-text">Sentry 에러 요약</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span className="text-sm text-text">이벤트 추적 전환율 데이터</span>
              </div>
            </div>
            <p className="text-xs text-text-muted italic">
              → 4종 데이터를 한 컨텍스트에서 분석
            </p>
          </div>

          {/* Right: 교차 질문 가능 */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-2xl px-5 py-5">
            <div className="text-accent font-bold text-xs uppercase tracking-widest mb-4">
              교차 질문 가능
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span className="text-sm text-text">응답 패턴이 행동 데이터에서도 보이는가?</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span className="text-sm text-text">PRD 가설 미통과가 어떤 에러와 연결되는가?</span>
              </div>
            </div>
          </div>
        </div>

        {/* Aside note — request.md 양식 적용 (border-accent bg-accent-soft) */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-2xl px-6 py-4 max-w-4xl mt-6">
          <p className="text-sm text-text leading-relaxed">
            자료 3의 노트북이 <span className="font-semibold text-text">21시간 후에 다시 살아난다</span>. 학습의 누적 구조가 본 단계에서 체감된다.
          </p>
        </div>
      </div>
    </>
  );
}
