// Source: lectures/S1/lecture.md lines 441-451
// Type: example (3단계: 신뢰성 판단 + 체크리스트 3)
// D-035: emoji 0건
// D-036: 시각 마커 — accent dot + grid 정렬
// D-040: inline checklist (s35와 동형 구조)

export default function S1TheoryC3Step3Trust() {
  const items = [
    '1차 자료인가, 2차 자료인가',
    '다른 출처와 교차 검증 가능한가',
    '본인 페르소나에 적용 가능한 정보인가',
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          출처 검증 3단계 · Step 3
        </span>
      </div>

      {/* Title */}
      <h2 className="text-5xl font-bold tracking-tight text-text leading-[1.1] mb-4">
        신뢰성 판단
      </h2>

      {/* Lead */}
      <p className="text-xl font-medium text-text-sub tracking-tight leading-relaxed mb-6 max-w-4xl">
        원문이 진짜라도 신뢰 가능한지 작업자가 판단한다.
      </p>

      {/* 판단 기준 3가지 */}
      <div className="mb-3">
        <div className="text-accent text-xs font-semibold tracking-wider uppercase mb-3">
          판단 기준 3가지
        </div>
      </div>
      <ul className="flex flex-col gap-3 max-w-5xl mb-6">
        {items.map((item, i) => (
          <li
            key={i}
            className="grid grid-cols-[36px_32px_1fr] gap-3 items-start group p-3 rounded-xl border border-divider hover:border-accent hover:bg-bg-soft transition-colors"
          >
            <span className="text-accent text-base font-bold tabular-nums tracking-wider mt-1 transition-colors group-hover:text-text">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="flex items-center justify-center w-8 h-8 rounded-xl border-2 border-accent bg-bg-soft mt-0.5">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent" />
            </span>
            <span className="text-base font-medium text-text tracking-tight leading-relaxed pt-1">
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* 결론 */}
      <div className="border-l-4 border-warning pl-5 max-w-5xl">
        <p className="text-base font-bold text-text leading-relaxed">
          <span className="highlight-mark">1차 자료가 아니거나 한국 시장 기준이 아니면</span> 신뢰도가 낮다.
        </p>
      </div>
    </>
  );
}
