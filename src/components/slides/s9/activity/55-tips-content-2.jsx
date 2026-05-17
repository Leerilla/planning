// Source: lectures/S9/lecture.md L1109-1114 (Tips 2/2, bullets 6-10, **마지막 슬라이드**)
// Type: ConceptSlide — ⭐ S9 sprint 마지막 슬라이드

export default function S9TipsContent2() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            Tips 2/2 — 마지막
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          Tips: 함정과 처방 (2/2)
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-6xl">
          자동 커밋 + 학습 종착점 + 검증 우선주의 — 9세션 마무리
        </p>

        {/* 5-bullet list + final emphasis */}
        <div className="flex flex-col gap-4 max-w-6xl">
          {/* Tip 6 */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">
              Tip 6
            </p>
            <p className="text-base text-text leading-relaxed">
              자동 커밋 메시지에 갱신 근거 명시 — git-committer가 데이터 근거를 메시지에 넣음
            </p>
          </div>

          {/* Tip 7 */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">
              Tip 7
            </p>
            <p className="text-base text-text leading-relaxed">
              학습 종착점은 결정 1개 — Pivot · Persevere · Kill 중 본인 결정 1개
            </p>
          </div>

          {/* Tip 8 */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">
              Tip 8
            </p>
            <p className="text-base text-text leading-relaxed">
              5단계 사슬의 약한 고리를 인식 — 다음 사이클의 강화 대상
            </p>
          </div>

          {/* Tip 9 */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">
              Tip 9
            </p>
            <p className="text-base text-text leading-relaxed">
              21시간 사이클은 단축 가능 — 두 번째 사이클부터 짧아짐
            </p>
          </div>

          {/* Tip 10 - emphasized */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">
              Tip 10
            </p>
            <p className="text-base text-accent font-semibold leading-relaxed">
              검증 우선주의의 마지막 적용 — AI 추천을 그대로 받아들이지 않고 작업자가 직접 데이터로 판단
            </p>
          </div>
        </div>

        {/* Final aside — ⭐ 마지막 메시지 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-4 max-w-6xl mt-6">
          <p className="text-base text-text leading-relaxed">
            본 자료가 본 학습의 마지막 자료입니다. 9세션 21시간 학습 완료. 이제 본인 사이클의 첫 걸음을.
          </p>
        </div>
      </div>
    </>
  );
}
