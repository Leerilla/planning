// Source: lectures/S8/captures/lecture.md L1667-1673 (#### Framework Preset 자동 감지, #### 환경 변수 변경 시 재배포)
// Type: Concept (2 cards)
// D-050: lecture.md 원문 보존

export default function S8ActivityTip4Content() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          활동 Tip 4 · Vercel
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text mb-6">Vercel 팁</h2>

      {/* Cards */}
      <div className="flex flex-col gap-3 max-w-5xl">
        {/* Card 1 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">Framework Preset 자동 감지</div>
          <p className="text-base text-text leading-relaxed">
            Next.js는 자동. 빌드 명령 직접 건드릴 필요 없음.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">환경 변수 변경 시 재배포</div>
          <p className="text-base text-text leading-relaxed">
            추가 후 자동 재배포 트리거. 코드 푸시 불필요.
          </p>
        </div>
      </div>
    </div>
  );
}
