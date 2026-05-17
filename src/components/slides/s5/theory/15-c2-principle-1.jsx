// Source: lectures/S5/lecture.md lines 133-141 (#### 원칙 1: 범위를 좁힌다)
// Type: comparison (광범위 vs 좁은 범위)

export default function S5TheoryC2Principle1() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          원칙 1 · 범위를 좁힌다
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        한 화면, 한 기능으로 범위 축소
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        범위가 좁아지면 에이전트의 추측 여지가 줄어든다.
      </p>

      <div className="grid grid-cols-2 gap-6 max-w-5xl">
        <div className="border border-line rounded p-6 bg-bg-soft">
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2 font-semibold">
            광범위 (피함)
          </div>
          <p className="text-base text-text leading-relaxed">
            "카피 입력 + 결과 + 복사 화면 다 만들어줘"
          </p>
        </div>

        <div className="border border-accent rounded p-6">
          <div className="text-xs uppercase tracking-wider text-accent mb-2 font-semibold">
            좁은 범위 (적정)
          </div>
          <p className="text-base text-text leading-relaxed">
            "카피 입력 화면 한 개만. 사진 업로드, 키워드 5칸, 생성 버튼"
          </p>
        </div>
      </div>
    </>
  );
}
