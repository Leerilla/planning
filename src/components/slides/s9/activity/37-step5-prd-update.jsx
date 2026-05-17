// Source: lectures/S9/lecture.md L920-932 (#### 5-3 prd.md 갱신 명령, example pre + D-054 inline code)
// Type: ExampleSlide

export default function S9ActivityStep5PrdUpdate() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 5-3 · prd 갱신
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          5-3. prd.md 갱신 명령
        </h2>

        {/* Subtitle with D-054 inline code */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          <code className="text-accent font-semibold">docs/prd.md</code> 갱신 — PRD 5요소 (문제·페르소나·핵심 기능·성공 지표·제약사항) 검토
        </p>

        {/* Pre block - D-051 text-sm */}
        <pre className="bg-bg-soft border border-divider rounded-xl p-5 text-sm whitespace-pre-line max-w-5xl leading-relaxed">
          {`docs/prd.md를 갱신된 페르소나와 종합 분석 결과 기반으로 갱신해줘.

페르소나 갱신: [변경 사항]
검증된 페인포인트: [목록]
가설 통과 여부: [목록]

PRD 5요소(문제·페르소나·핵심 기능·성공 지표·제약사항)를
각각 검토하고 데이터 기반으로 갱신해줘.
갱신된 PRD의 변경 사항을 정리해서 보여줘.`}
        </pre>

        {/* Footer - D-054 설명 */}
        <p className="mt-3 text-xs text-text-sub max-w-5xl">
          D-044 신규 docs: prd.md (5번째)
        </p>
      </div>
    </>
  );
}
