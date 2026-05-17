// Source: lectures/S3/lecture.md lines 604-607 (세 번째 단정)
// Type: quote (KeyMessage — inline JSX, 폰트 크기 조정 + 라인 정리)

export default function S3TheoryC5ThirdAssertion() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          세 번째 단정
        </span>
      </div>

      <div className="max-w-5xl">
        <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-3">
          AI 자동 검토를 그대로 신뢰하지 않는다
        </h2>
        <p className="text-2xl font-medium text-text leading-snug mb-8">
          <span className="text-accent font-bold">작업자가 직접</span> PRD를 읽고 모호한 표현을 찾는다
        </p>

        <div className="grid grid-cols-2 gap-5 max-w-4xl">
          <div className="border-l-2 border-accent pl-5 py-2">
            <div className="text-sm font-semibold text-text-sub mb-1">근거</div>
            <p className="text-base text-text leading-relaxed">
              AI는 의도한 모호와 실수 모호를 구분 못 한다
            </p>
          </div>
          <div className="border-l-2 border-accent pl-5 py-2">
            <div className="text-sm font-semibold text-text-sub mb-1">운영</div>
            <p className="text-base text-text leading-relaxed">
              AI 검토 → 작업자 1회 정독 → 모호 표현 1건 이상 수정
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
