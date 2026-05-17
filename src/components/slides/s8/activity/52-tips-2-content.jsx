// Source: lectures/S8/captures/lecture.md L1643-1649 (#### 신뢰 경계 기억, #### API 키 노출 시 즉시 회수)
// Type: Concept (2 cards)
// D-050: lecture.md 원문 보존 / D-054: NEXT_PUBLIC_ inline code accent

export default function S8ActivityTip2Content() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          활동 Tip 2 · 분리 배포
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text mb-6">분리 배포 팁</h2>

      {/* Cards */}
      <div className="flex flex-col gap-3 max-w-5xl">
        {/* Card 1 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">신뢰 경계 기억</div>
          <p className="text-base text-text leading-relaxed">
            FE는 신뢰 X, BE는 신뢰 O. 비밀은 BE에만. <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">NEXT_PUBLIC_</code> 접두사 변수에 비밀 두면 그 즉시 노출.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">API 키 노출 시 즉시 회수</div>
          <p className="text-base text-text leading-relaxed">
            GitHub 푸시 후 봇이 수초 안에 발견. 키 삭제 → 새 발급 → git 히스토리 정리.
          </p>
        </div>
      </div>
    </div>
  );
}
