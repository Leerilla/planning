// Source: lectures/S8/captures/lecture.md L1653-1663 (#### Root Directory 설정 중요, #### PORT 환경 변수, #### 무료 티어 영원하지 않음)
// Type: Concept (3 cards)
// D-050: lecture.md 원문 보존 / D-054: server/ 및 process.env.PORT inline code accent

export default function S8ActivityTip3Content() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          활동 Tip 3 · Railway
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text mb-6">Railway 팁</h2>

      {/* Cards */}
      <div className="flex flex-col gap-3 max-w-5xl">
        {/* Card 1 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">Root Directory 설정 중요</div>
          <p className="text-base text-text leading-relaxed">
            monorepo면 <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">server/</code> 명시. 안 하면 FE까지 함께 빌드되어 실패.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">PORT 환경 변수</div>
          <p className="text-base text-text leading-relaxed">
            BE 코드는 <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">process.env.PORT</code> 사용. 고정 포트면 빌드 실패.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">무료 티어 영원하지 않음</div>
          <p className="text-base text-text leading-relaxed">
            월 5달러 크레딧. 본격 운영 시 결제 필요할 수 있음.
          </p>
        </div>
      </div>
    </div>
  );
}
