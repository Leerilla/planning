// Source: lectures/S5/lecture.md lines 352-365 (#### 시드 6번 동작 합격선)
// Type: example (합격 상태 vs 다음 단계)

export default function S5TheoryC3Seed6Pass() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          시드 6번 동작 합격선
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        시드 6번 첫 화면(카피 입력 화면) 합격 상태
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        동작 3요소 충족 vs 다음 단계 항목 분리.
      </p>

      <div className="grid grid-cols-2 gap-6 max-w-5xl">
        <div className="border border-accent rounded p-6">
          <div className="text-xs uppercase tracking-wider text-accent mb-3 font-semibold">
            합격 상태
          </div>
          <ul className="space-y-2 text-base text-text leading-relaxed">
            <li>· 입력 폼이 떠 있음 (요소 1)</li>
            <li>· 사진 업로드와 키워드 5칸 입력 가능 (요소 2)</li>
            <li>· 생성 버튼 클릭 시 콘솔에 입력값 출력 (요소 3)</li>
          </ul>
        </div>

        <div className="border border-line rounded p-6 bg-bg-soft">
          <div className="text-xs uppercase tracking-wider text-text-sub mb-3 font-semibold">
            다음 단계
          </div>
          <ul className="space-y-2 text-base text-text-sub leading-relaxed">
            <li>· 색상, 폰트 크기는 다음 단계 이후</li>
            <li>· 실제 카피 생성 로직도 다음 단계</li>
          </ul>
        </div>
      </div>
    </>
  );
}
