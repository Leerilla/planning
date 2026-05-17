// Source: lectures/S9/lecture.md L572-583 (#### 0-3 NotebookLM 재오픈, example 4-step)
// Type: ExampleSlide

export default function S9ActivityStep0NotebookLMReopen() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 0-3 · NotebookLM 재오픈
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          0-3. NotebookLM 노트북 재오픈
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          자료 3에서 만든 노트북에 접속 — 21시간 후 다시 살아나는 노트북
        </p>

        {/* 4-step process */}
        <div className="flex flex-col gap-2 max-w-5xl">
          <div className="flex items-center gap-4 py-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white font-bold text-sm flex-shrink-0">
              1
            </div>
            <span className="text-base text-text">notebooklm.google.com 이동</span>
          </div>
          <div className="flex items-center gap-4 py-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white font-bold text-sm flex-shrink-0">
              2
            </div>
            <span className="text-base text-text">본인 노트북 목록 확인</span>
          </div>
          <div className="flex items-center gap-4 py-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white font-bold text-sm flex-shrink-0">
              3
            </div>
            <span className="text-base text-text">자료 3에서 만든 노트북 클릭</span>
          </div>
          <div className="flex items-center gap-4 py-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white font-bold text-sm flex-shrink-0">
              4
            </div>
            <span className="text-base text-text">자료 5에서 마지막으로 본 상태 확인</span>
          </div>
        </div>

        {/* Aside note */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-5xl mt-5">
          <p className="text-sm text-text-muted leading-relaxed">
            본 단계에서 이 노트북에 응답·Clarity·Sentry·이벤트 추적 4종 데이터를 추가 업로드한다.
          </p>
        </div>
      </div>
    </>
  );
}
