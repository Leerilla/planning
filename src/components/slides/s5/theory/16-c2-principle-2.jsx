// Source: lectures/S5/lecture.md lines 143-151 (#### 원칙 2: 결과물을 명시한다)
// Type: comparison (모호 vs 명시)

export default function S5TheoryC2Principle2() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          원칙 2 · 결과물을 명시한다
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        구체적 행동과 화면 변화로 정의
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        결과물이 명시되면 의도와 결과의 차이가 좁혀진다.
      </p>

      <div className="grid grid-cols-2 gap-6 max-w-5xl">
        <div className="border border-divider rounded p-6 bg-bg-soft">
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2 font-semibold">
            모호한 결과물 (피함)
          </div>
          <p className="text-base text-text leading-relaxed">
            "카피 입력 기능 만들어줘"
          </p>
        </div>

        <div className="border border-accent rounded p-6">
          <div className="text-xs uppercase tracking-wider text-accent mb-2 font-semibold">
            명시된 결과물 (적정)
          </div>
          <p className="text-base text-text leading-relaxed">
            "버튼이 클릭되면 입력값을 콘솔에 출력하고, 입력값이 비어 있으면 빨간 테두리를 표시"
          </p>
        </div>
      </div>
    </>
  );
}
