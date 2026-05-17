// Source: lectures/S6/lecture.md lines 216-225 (#### 원칙 3: 결정적 출력 형식)
// Type: comparison (2-column 좌우)
// Profile: hierarchical / comparison / medium-high / balanced
// Interactive: static (텍스트 비교, toggle 최소화)

export default function S6TheoryC2Principle3() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          원칙 3 · 결정적 출력 형식
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        출력 형식 고정
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        출력 형식 고정이면 메인 에이전트가 일관된 구조로 받고 다음 단계를 쉽게 결정할 수 있다.
      </p>

      <div className="grid grid-cols-2 gap-6 max-w-5xl">
        <div className="border-l-4 border-danger bg-bg-soft rounded-md p-6">
          <div className="text-xs uppercase tracking-wider text-danger font-semibold mb-4">
            나쁜 출력
          </div>
          <div className="text-xl font-bold text-text mb-4 leading-snug">
            "코드를 잘 검토해줘"
          </div>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-3 items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-danger mt-2.5 shrink-0" />
              <span className="text-base text-text-sub leading-relaxed">
                매번 다른 형식
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-danger mt-2.5 shrink-0" />
              <span className="text-base text-text-sub leading-relaxed">
                메인이 결과를 일관되게 처리 불가
              </span>
            </li>
          </ul>
        </div>

        <div className="border-l-4 border-success bg-bg-soft rounded-md p-6">
          <div className="text-xs uppercase tracking-wider text-success font-semibold mb-4">
            좋은 출력
          </div>
          <div className="text-xl font-bold text-text mb-4 leading-snug">
            "일치/불일치/검토외 3카테고리"
          </div>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-3 items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-success mt-2.5 shrink-0" />
              <span className="text-base text-text-sub leading-relaxed">
                매번 같은 구조
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-success mt-2.5 shrink-0" />
              <span className="text-base text-text-sub leading-relaxed">
                메인이 즉시 다음 단계 결정
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
