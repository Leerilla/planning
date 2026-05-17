// Source: lectures/S1/lecture.md lines 351-367
// Type: example (거짓 패턴 1 — 그럴듯한 통계, 위험도 최대)
// D-035: emoji "🔴" 제거  "위험도: 최대" 텍스트
// D-036: 시각 마커 — border-l-4 + grid 라벨 정렬
// D-040: inline custom (code block 보존을 위해 Warning 패턴 변형)
// Fix: title 옆에 큰 number "01" 추가 (시각 균형)

export default function S1TheoryC3FakeStatistics() {
  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-danger rounded-full" />
        <span className="text-danger text-sm font-semibold tracking-wider uppercase">
          거짓 패턴 1 · 위험도: 최대
        </span>
      </div>

      {/* Title + 큰 number — 좌우 균형 */}
      <div className="grid grid-cols-[auto_1fr] gap-6 items-center mb-4">
        <span
          className="font-bold tracking-tight text-danger leading-[0.85] tabular-nums opacity-70"
          style={{ fontSize: 'clamp(72px, 9vw, 120px)' }}
        >
          01
        </span>
        <h2 className="text-5xl font-bold tracking-tight text-text leading-[1.1]">
          그럴듯한 통계
        </h2>
      </div>

      <p className="text-xl font-medium text-text-sub tracking-tight leading-relaxed mb-6">
        AI는 정확해 보이는 숫자를 자주 만든다. 가장 위험한 패턴이다.
      </p>

      {/* AI 답변 예시 — code block */}
      <div className="rounded-2xl border-l-4 border-danger bg-bg-soft p-5 mb-5 max-w-5xl">
        <div className="text-danger text-xs font-semibold tracking-wider uppercase mb-3">
          AI 답변 예시
        </div>
        <p className="text-base text-text leading-relaxed mb-4">
          "한국 20-30대 PM의 78%가 회의록 정리에 30분 이상 쓴다"
        </p>
        <ul className="flex flex-col gap-2 text-sm text-text-sub leading-relaxed">
          <li className="grid grid-cols-[20px_1fr] gap-2">
            <span className="text-danger font-bold">→</span>
            <span>출처를 클릭하면 그런 통계가 없거나</span>
          </li>
          <li className="grid grid-cols-[20px_1fr] gap-2">
            <span className="text-danger font-bold">→</span>
            <span>통계는 있지만 다른 모집단의 것</span>
          </li>
        </ul>
      </div>

      {/* 위험 결론 */}
      <div className="grid grid-cols-[80px_1fr] gap-4 items-start max-w-5xl">
        <span className="text-warning bg-warning-soft border border-warning text-xs font-semibold tracking-wider uppercase rounded-xl px-2 py-1 text-center">
          위험
        </span>
        <p className="text-base font-medium text-text tracking-tight leading-relaxed pt-1">
          한 번의 인용이 PRD까지 간다. 검증되지 않은 통계는 노션 소개서, 다음 사람의 인용까지 연쇄된다.
        </p>
      </div>
    </>
  );
}
