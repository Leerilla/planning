// Source: lectures/S8/captures/lecture.md Step N 검증 기준 (L1608-1613)
// Type: Activity (4-item checklist)
// D-054: /cost inline code + accent

export default function S8ActivityStepNValidation() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 N-검증 · Step N 통과 기준
        </p>

        {/* Title and goal */}
        <h1 className="text-3xl font-bold text-text mb-2">
          Step N 검증 기준
        </h1>
        <p className="text-base text-text-sub mb-6">
          4개 항목 모두 통과 시 본 sprint 완료 + 다음 단계(노출) 진입 가능
        </p>

        {/* 4 checklist items */}
        <div className="flex flex-col gap-3 max-w-4xl">
          {/* Item 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              산출물 6개가 모두 손에 있는가
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">/cost</code> 비교를 메모했는가
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              회고 3개 질문에 모두 답했는가
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              다음 단계(노출) 진입 준비가 됐는가
            </p>
          </div>
        </div>
    </>
  );
}
