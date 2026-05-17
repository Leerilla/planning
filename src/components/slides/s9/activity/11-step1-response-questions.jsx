// Source: lectures/S9/lecture.md L625-635 (#### 1-2 응답 질문, example pre + aside)
// Type: ExampleSlide

export default function S9ActivityStep1ResponseQuestions() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 1-2 · 응답 질문
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          응답 질문 3개
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-4xl">
          재피드백 메일 핵심 — 가설 검증 데이터 포인트
        </p>

        {/* Pre block */}
        <pre className="bg-bg-soft border border-divider rounded-xl p-5 text-sm whitespace-pre-line max-w-4xl">
          1. 출시 시 사용 의향 (1-5점)
2. 유료라면 월 얼마까지 낼 수 있는가
3. 개선되면 좋을 점 1개
        </pre>

        {/* Aside note */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-4xl mt-5">
          <p className="text-sm text-text leading-relaxed">
            응답 질문 3개는 변경 X. 가설 검증의 핵심 데이터 포인트이다.
          </p>
        </div>
      </div>
    </>
  );
}
