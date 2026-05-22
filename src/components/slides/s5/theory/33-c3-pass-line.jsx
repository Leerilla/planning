// Source: lectures/S5/lecture.md lines 320-326 (#### 합격선 범위)
// Type: comparison (충족 필수 vs 다음 단계)

export default function S5TheoryC3PassLine() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          합격선 범위
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        본 단계에 필수인 것과 다음 단계로 넘기는 것
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        합격선 범위가 좁아져야 단계별 진척 가능.
      </p>

      <div className="grid grid-cols-2 gap-6 max-w-5xl">
        <div className="border border-accent rounded p-6">
          <div className="text-xs uppercase tracking-wider text-accent mb-3 font-semibold">
            합격선 (충족 필수)
          </div>
          <ul className="space-y-2 text-base text-text leading-relaxed">
            <li>· 동작 3요소</li>
          </ul>
        </div>

        <div className="border border-divider rounded p-6 bg-bg-soft">
          <div className="text-xs uppercase tracking-wider text-text-sub mb-3 font-semibold">
            합격선 외 (다음 단계)
          </div>
          <ul className="space-y-2 text-base text-text-sub leading-relaxed">
            <li>· 디자인 미완성</li>
            <li>· 에러 처리 누락</li>
            <li>· 다른 화면 미연결</li>
          </ul>
        </div>
      </div>
    </>
  );
}
