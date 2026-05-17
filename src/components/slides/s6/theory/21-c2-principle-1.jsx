// Source: lectures/S6/lecture.md lines 194-203 (#### 원칙 1: 단일 책임)
// Type: comparison (2-column 좌우)
// Profile: hierarchical / comparison / medium-high / balanced
// Interactive: static (텍스트 비교, toggle 최소화)

export default function S6TheoryC2Principle1() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          원칙 1 · 단일 책임
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        한 sub-agent는 한 역할만
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        description이 한 문장으로 안 끝나면 둘로 쪼개는 신호다.
      </p>

      <div className="grid grid-cols-2 gap-6 max-w-5xl">
        <div className="border-l-4 border-danger bg-bg-soft rounded-md p-6">
          <div className="text-xs uppercase tracking-wider text-danger font-semibold mb-4">
            나쁨
          </div>
          <div className="text-xl font-bold text-text mb-4 leading-snug">
            "PRD 검토 + 커밋 메시지 작성"
          </div>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-3 items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-danger mt-2.5 shrink-0" />
              <span className="text-base text-text-sub leading-relaxed">
                두 역할이 섞임
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-danger mt-2.5 shrink-0" />
              <span className="text-base text-text-sub leading-relaxed">
                각 역할의 품질이 떨어짐
              </span>
            </li>
          </ul>
        </div>

        <div className="border-l-4 border-success bg-bg-soft rounded-md p-6">
          <div className="text-xs uppercase tracking-wider text-success font-semibold mb-4">
            좋음
          </div>
          <div className="text-xl font-bold text-text mb-4 leading-snug">
            "PRD 일치성 검토" (한 줄)
          </div>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-3 items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-success mt-2.5 shrink-0" />
              <span className="text-base text-text-sub leading-relaxed">
                한 역할에만 집중
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-success mt-2.5 shrink-0" />
              <span className="text-base text-text-sub leading-relaxed">
                각 역할의 신뢰성 보장
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
