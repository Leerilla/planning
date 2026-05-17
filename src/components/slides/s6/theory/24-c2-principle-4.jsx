// Source: lectures/S6/lecture.md lines 227-239 (#### 원칙 4: 메인과의 책임 분리)
// Type: comparison (2-column 좌우)
// Profile: hierarchical / comparison / medium-high / balanced
// Interactive: static (텍스트 비교, toggle 최소화)

export default function S6TheoryC2Principle4() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          원칙 4 · 메인과의 책임 분리
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        조언과 결정의 경계
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        책임이 분리되지 않으면 sub-agent가 메인의 작업을 덮어쓰는 사고가 발생한다.
      </p>

      <div className="grid grid-cols-2 gap-6 max-w-5xl">
        <div className="border-l-4 border-danger bg-bg-soft rounded-md p-6">
          <div className="text-xs uppercase tracking-wider text-danger font-semibold mb-4">
            나쁨
          </div>
          <div className="text-xl font-bold text-text mb-4 leading-snug">
            "불일치" 발견 → 자동 수정
          </div>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-3 items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-danger mt-2.5 shrink-0" />
              <span className="text-base text-text-sub leading-relaxed">
                sub-agent의 권한 확대
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-danger mt-2.5 shrink-0" />
              <span className="text-base text-text-sub leading-relaxed">
                작업 의도 무시 가능
              </span>
            </li>
          </ul>
        </div>

        <div className="border-l-4 border-success bg-bg-soft rounded-md p-6">
          <div className="text-xs uppercase tracking-wider text-success font-semibold mb-4">
            좋음
          </div>
          <div className="text-xl font-bold text-text mb-4 leading-snug">
            "불일치" 보고 → 메인이 전달
          </div>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-3 items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-success mt-2.5 shrink-0" />
              <span className="text-base text-text-sub leading-relaxed">
                메인이 최종 결정
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-success mt-2.5 shrink-0" />
              <span className="text-base text-text-sub leading-relaxed">
                작업자와 메인의 신뢰 유지
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
