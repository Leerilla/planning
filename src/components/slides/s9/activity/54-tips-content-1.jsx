// Source: lectures/S9/lecture.md L1104-1108 (Tips 1/2, bullets 1-5)
// Type: ConceptSlide

export default function S9TipsContent1() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            Tips 1/2
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          Tips: 함정과 처방 (1/2)
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-6xl">
          신호 vs 잡음 + 응답률 + 페르소나 갱신
        </p>

        {/* 5-bullet list */}
        <div className="flex flex-col gap-4 max-w-6xl">
          {/* Tip 1 */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">
              Tip 1
            </p>
            <p className="text-base text-text leading-relaxed">
              1명의 행동은 신호가 아니다 — 30% 기준 또는 3-5건 기준으로 신호와 잡음을 구분
            </p>
          </div>

          {/* Tip 2 */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">
              Tip 2
            </p>
            <p className="text-base text-text leading-relaxed">
              응답률 5-15%는 본 단계에서도 같다 — 10명 발송에 1-2명 응답 기대
            </p>
          </div>

          {/* Tip 3 */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">
              Tip 3
            </p>
            <p className="text-base text-text leading-relaxed">
              Kill 결정이 가장 어렵다 — 21시간 들였으니 Persevere로 가고 싶은 매몰비용의 함정
            </p>
          </div>

          {/* Tip 4 */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">
              Tip 4
            </p>
            <p className="text-base text-text leading-relaxed">
              페르소나 갱신은 추가와 제거 두 종류
            </p>
          </div>

          {/* Tip 5 */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">
              Tip 5
            </p>
            <p className="text-base text-text leading-relaxed">
              NotebookLM 재오픈으로 교차 분석 — 자료 3 노트북에 4종 데이터 추가 업로드
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
