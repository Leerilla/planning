// Source: lectures/S8/captures/lecture.md L473-486 (#### 키 노출 시 대응)
// Type: process
// D-050: 원문 보존 / D-052: 4-row table

export default function S8TheoryC3KeyLeak() {
  return (
    <div className="flex flex-col gap-6 justify-center h-full max-w-4xl">
      {/* Header marker + label */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-lg">3</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 3 · 키 노출 대응
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text mb-2">
        키 노출 시 대응
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-6 leading-relaxed">
        만약 실수로 GitHub에 키를 푸시했다면
      </p>

      {/* 4-row table */}
      <div className="max-w-4xl overflow-hidden rounded-xl border border-divider">
        {/* Header row */}
        <div className="grid grid-cols-[80px_1fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">
            단계
          </div>
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">
            작업
          </div>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-[80px_1fr] px-5 py-4 border-b border-divider">
          <div className="text-accent font-bold text-center">1</div>
          <div className="text-text">
            즉시 키 회수 (OpenAI 대시보드에서 삭제)
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-[80px_1fr] px-5 py-4 border-b border-divider">
          <div className="text-accent font-bold text-center">2</div>
          <div className="text-text">새 키 발급</div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-[80px_1fr] px-5 py-4 border-b border-divider">
          <div className="text-accent font-bold text-center">3</div>
          <div className="text-text">
            git 히스토리에서 제거 (git filter-branch 등)
          </div>
        </div>

        {/* Row 4 (last) */}
        <div className="grid grid-cols-[80px_1fr] px-5 py-4">
          <div className="text-accent font-bold text-center">4</div>
          <div className="text-text">환경 변수로 재설정</div>
        </div>
      </div>

      {/* Aside */}
      <aside className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-6 py-3 max-w-4xl">
        <p className="text-sm text-text leading-relaxed">
          GitHub은 공개 push 후 봇이 수초 안에 키 탐지. 키 삭제는 분 단위로 빠를수록 안전.
        </p>
      </aside>
    </div>
  );
}
