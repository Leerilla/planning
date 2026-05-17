// Source: lectures/S4/lecture.md lines 296-305 (#### OODA 4단계 4-row 표)
// Type: process (4단계 순환)

export default function S4TheoryC3Ooda4Steps() {
  const steps = [
    { n: '1', en: 'Observe', meaning: '현재 상태 관찰' },
    { n: '2', en: 'Orient', meaning: '상황 인식과 방향 잡기' },
    { n: '3', en: 'Decide', meaning: '어떤 행동을 할지 결정' },
    { n: '4', en: 'Act', meaning: '결정한 행동을 실행' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          OODA 4단계
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        Act 이후 새 상태가 다시 Observe로 순환
      </h2>

      <p className="text-base text-text-sub mb-6 max-w-3xl">
        한 사이클은 의사결정의 한 단위 — 끊임없이 도는 순환 구조.
      </p>

      <div className="flex items-stretch gap-3 max-w-6xl">
        {steps.map((s, i) => (
          <div key={i} className="contents">
            <div className="flex-1 border border-line rounded p-5">
              <div className="text-3xl font-bold text-accent leading-none mb-2">{s.n}</div>
              <div className="text-lg font-bold text-text mb-2">{s.en}</div>
              <div className="text-sm text-text-sub leading-relaxed">{s.meaning}</div>
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center text-2xl text-text-sub">→</div>
            )}
          </div>
        ))}
      </div>

      <p className="text-sm text-text-sub mt-4">
        ↻ (Act → Observe로 다시 순환)
      </p>
    </>
  );
}
