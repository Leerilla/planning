// Source: lectures/S7/lecture.md (시나리오 검증 루프)
// Type: process (5-step vertical + key-message)
// Phase 6 fix (2026-05-16): 전체 max-w 정렬 통일 + spacing 일관 + rounded-r-xl

export default function S7TheoryC3ValidationLoop() {
  return (
    <>
      {/* Header marker + label */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          검증 루프 핵심
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        시나리오 검증 루프
      </h2>

      {/* Key message assertion */}
      <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-4 mb-5 max-w-4xl">
        <p className="text-xl font-bold text-text leading-snug">
          본 단계의 검증은 단발 호출이 아니라 루프이다.
        </p>
      </div>

      {/* Process steps 1-3 — max-w-4xl 통일 */}
      <div className="flex flex-col gap-2 max-w-4xl mb-3">
        <div className="border-l-4 border-accent bg-bg-soft rounded-r-xl px-5 py-3">
          <div className="text-base font-bold text-accent">
            [1] scenario-verifier 호출 (시나리오 입력)
          </div>
        </div>
        <div className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-5 py-3">
          <div className="text-base font-bold text-text">
            [2] 보고서 수신: 통과 / 부분 통과 / 미통과
          </div>
        </div>
        <div className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-5 py-3">
          <div className="text-base font-bold text-text">
            [3] 작업자가 보고서 검증 (막힘 지점 진짜? 수정 제안 적절?)
          </div>
        </div>
      </div>

      {/* Decision branch [4-a] / [4-b] — max-w-4xl 통일 */}
      <div className="grid grid-cols-2 gap-3 max-w-4xl mb-3">
        <div className="border-l-4 border-success bg-success-soft rounded-r-xl px-5 py-3">
          <div className="text-base font-semibold text-success">
            [4-a] 통과 → 다음 단계 (배포)
          </div>
        </div>
        <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-5 py-3">
          <div className="text-base font-semibold text-warning">
            [4-b] 미통과 → 코드 수정
          </div>
        </div>
      </div>

      {/* Final step [5] */}
      <div className="max-w-4xl mb-3">
        <div className="border-l-4 border-accent bg-bg-soft rounded-r-xl px-5 py-3">
          <div className="text-base font-bold text-accent">
            [5] 코드 수정 후 다시 [1]로
          </div>
        </div>
      </div>

      {/* Footer: loop indicator */}
      <div className="max-w-4xl text-center text-sm text-text-muted font-semibold tracking-wider">
        [루프 반복: 통과까지]
      </div>
    </>
  );
}
