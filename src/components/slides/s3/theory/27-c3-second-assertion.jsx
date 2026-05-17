// Source: lectures/S3/lecture.md lines 381-384 (두 번째 단정)
// Type: quote (KeyMessage — inline JSX, 폰트 크기 축소 + 라인 정리)

export default function S3TheoryC3SecondAssertion() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          두 번째 단정
        </span>
      </div>

      <div className="max-w-5xl">
        <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-3">
          분석은 NotebookLM, 정제는 Manyfast
        </h2>
        <p className="text-2xl font-medium text-text leading-snug mb-8">
          두 도구의 역할은 <span className="text-accent font-bold">섞지 않는다</span>
        </p>

        <div className="grid grid-cols-2 gap-5 max-w-4xl">
          <div className="border-l-2 border-accent pl-5 py-2">
            <div className="text-sm font-semibold text-text-sub mb-1">근거</div>
            <p className="text-base text-text leading-relaxed">
              두 사고 작업의 본질·입력·출력이 다르다
            </p>
          </div>
          <div className="border-l-2 border-accent pl-5 py-2">
            <div className="text-sm font-semibold text-text-sub mb-1">귀결</div>
            <p className="text-base text-text leading-relaxed">
              한 도구로 두 작업을 처리하면 둘 다 흐려진다
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
