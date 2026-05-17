// Source: lectures/S8/captures/lecture.md L1677-1687 (#### 첫 만남은 통과 의례, #### 화이트리스트 정책 고수, #### 자율 디버깅 3원칙 그대로 적용)
// Type: Concept (3 cards)
// D-050: lecture.md 원문 보존 / D-054: Access-Control-Allow-Origin warning accent

export default function S8ActivityTip5Content() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          활동 Tip 5 · CORS
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text mb-6">CORS 팁</h2>

      {/* Cards */}
      <div className="flex flex-col gap-3 max-w-5xl">
        {/* Card 1 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">첫 만남은 통과 의례</div>
          <p className="text-base text-text leading-relaxed">
            처음 배포 후 무조건 한 번 막힘. 정상. "배포가 잘됐다는 신호"로 받아들임.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">화이트리스트 정책 고수</div>
          <p className="text-base text-text leading-relaxed">
            <code className="text-warning font-semibold bg-warning-soft px-1.5 py-0.5 rounded text-sm">Access-Control-Allow-Origin: *</code> 사용 금지. 본인 FE 도메인만 명시.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">자율 디버깅 3원칙 그대로 적용</div>
          <p className="text-base text-text leading-relaxed">
            자료 7의 패턴: 풀 메시지 그대로 → 분석 먼저 → 결과 검증.
          </p>
        </div>
      </div>
    </div>
  );
}
