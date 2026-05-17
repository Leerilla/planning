// Source: lectures/S2/lecture.md lines 54-56
// Type: example (inline 2-area — 호의 측정 vs 실재 측정)

export default function S2TheoryC1ConcreteCase() {
  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          시드 1 구체 사례 — PM에게 묻기
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        의견은 호의, 검증은 실재
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        같은 PM 친구에게 어떻게 묻느냐가 <span className="highlight-mark">호의 측정과 실재 측정의 갈림길</span>이다.
      </p>

      {/* 2 영역 — 의견 vs 검증 */}
      <div className="grid grid-cols-2 gap-4 max-w-5xl mb-5">
        {/* 의견 */}
        <div className="rounded-2xl border-l-4 border-danger bg-danger-soft p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-danger bg-bg-soft border border-danger text-xs font-semibold tracking-wider uppercase rounded-xl px-2 py-1">
              의견
            </span>
            <span className="text-xs font-semibold text-text-sub tracking-wider uppercase">
              호의 측정
            </span>
          </div>
          <div className="mb-3">
            <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-1">
              질문
            </div>
            <p className="text-base font-medium text-text leading-relaxed">
              "이거 회의록 정리 자동화 도구 어때?"
            </p>
          </div>
          <div>
            <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-1">
              답
            </div>
            <p className="text-base font-semibold text-text-sub leading-relaxed">
              "오, 좋다"
            </p>
          </div>
        </div>

        {/* 검증 */}
        <div className="rounded-2xl border-l-4 border-success bg-success-soft p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-success bg-bg-soft border border-success text-xs font-semibold tracking-wider uppercase rounded-xl px-2 py-1">
              검증
            </span>
            <span className="text-xs font-semibold text-success tracking-wider uppercase">
              실재 측정
            </span>
          </div>
          <div className="mb-3">
            <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-1">
              질문
            </div>
            <p className="text-base font-medium text-text leading-relaxed">
              "최근 한 달 동안 회의 후 액션아이템 정리에 시간을 얼마나 썼는가, 가장 어려웠던 부분은 무엇인가"
            </p>
          </div>
          <div>
            <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-1">
              답
            </div>
            <p className="text-base font-semibold text-text leading-relaxed">
              "회의록 30분 정도, 결정 사항 누락이 가장 어려웠다"
            </p>
          </div>
        </div>
      </div>

      {/* 결론 */}
      <div className="border-l-4 border-accent pl-5 max-w-5xl">
        <p className="text-base font-bold text-text leading-relaxed">
          본 학습의 작업자는 <span className="highlight-mark">호의가 아니라 실재</span>를 모은다.
        </p>
      </div>
    </>
  );
}
