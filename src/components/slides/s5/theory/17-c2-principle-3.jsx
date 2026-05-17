// Source: lectures/S5/lecture.md lines 153-161 (#### 원칙 3: 검증 방법을 미리 정한다)
// Type: comparison (모호 vs 명시)

export default function S5TheoryC2Principle3() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          원칙 3 · 검증 방법을 미리 정한다
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        무엇을 확인하면 동작인지 사전 결정
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        검증 방법이 사전에 정해지면 동작 여부가 명확해진다.
      </p>

      <div className="grid grid-cols-2 gap-6 max-w-5xl">
        <div className="border border-line rounded p-6 bg-bg-soft">
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2 font-semibold">
            모호한 검증 (피함)
          </div>
          <p className="text-base text-text leading-relaxed">
            "동작하면 알려줘"
          </p>
        </div>

        <div className="border border-accent rounded p-6">
          <div className="text-xs uppercase tracking-wider text-accent mb-2 font-semibold">
            명시된 검증 (적정)
          </div>
          <p className="text-base text-text leading-relaxed">
            "브라우저에서 사진과 키워드 5개 입력 후 버튼 누르면 콘솔에 입력값이 출력되는 것을 확인"
          </p>
        </div>
      </div>
    </>
  );
}
