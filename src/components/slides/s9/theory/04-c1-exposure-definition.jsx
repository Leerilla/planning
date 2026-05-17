// Source: lectures/S9/lecture.md L25-33 (자동 매핑, concept with emphasis definition)
// Type: ConceptSlide (pattern: definition)

export default function S9TheoryC1ExposureDefinition() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 1 · 노출의 정의
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          노출의 정의
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-4xl">
          Exposure — 검증된 MVP를 실제 사용자에게 공개하고 데이터 수집
        </p>

        {/* Body paragraphs */}
        <div className="flex flex-col gap-4 max-w-4xl">
          <p className="text-lg leading-relaxed text-text">
            노출(Exposure)은 <span className="font-bold text-accent">검증된 MVP를 실제 사용자에게 공개하고 데이터를 수집하는 단계</span>이다.
          </p>

          <p className="text-base text-text-sub leading-relaxed">
            자료 1부터 자료 8까지 작업자가 만든 모든 것은 <span className="italic font-semibold">본인이 옳다고 믿은 것</span>이다. 페르소나도 본인이 그렸고, 가설도 본인이 세웠고, MVP도 본인이 검증된 페인포인트 위에서 만들었다.
          </p>
        </div>

        {/* Aside note */}
        <div className="border-l-4 border-divider bg-bg-soft rounded-r-2xl px-6 py-3 max-w-4xl mt-4">
          <p className="text-sm text-text-muted leading-relaxed">
            자료 2의 능동·수동 검증을 거쳤고, 자료 3의 NotebookLM으로 출처를 확인했고, 자료 7의 scenario-verifier로 시나리오 통과를 확인했다. 그러나 이 모든 검증은 작업자가 직접 만나거나 분석한 데이터 위에서 일어났다.
          </p>
        </div>
      </div>
    </>
  );
}
