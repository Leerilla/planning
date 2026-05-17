// Source: lectures/S9/lecture.md L828-841 (#### 4-2 교차 분석 질문, example pre block)
// Type: ExampleSlide

export default function S9ActivityStep4Questions() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 4-2 · 교차 분석 질문
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          4-2. 교차 분석 질문
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          NotebookLM 입력 — 4 질문 + 각 답변에 인용 번호 표시
        </p>

        {/* Pre block */}
        <pre className="bg-bg-soft border border-divider rounded-xl p-5 text-sm whitespace-pre-line max-w-5xl leading-relaxed">
          {`이 노트북의 모든 자료를 종합해서 다음 질문에 답해줘:

1. 응답에서 나온 페인포인트가 Clarity 행동 데이터에서도 보이는가?
2. PRD의 핵심 가설이 이벤트 추적 전환율에서 통과했는가?
3. Sentry 에러 패턴과 응답에서 언급된 불만이 같은 부분을 가리키는가?
4. 페르소나 가설과 다른 페르소나가 들어온 흔적이 있는가?

각 답변에 인용 번호를 표시해줘.`}
        </pre>
      </div>
    </>
  );
}
