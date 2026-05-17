// Source: lectures/S9/lecture.md L963-977 (#### 6-1 3 갈래 결정 명령, example pre)
// Type: ExampleSlide

export default function S9ActivityStep6DecisionCommand() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 6-1 · 3 갈래 결정 명령
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          6-1. 3 갈래 결정 명령
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          Claude Code에 데이터 기반 의사결정 분석 의뢰
        </p>

        {/* Pre block - D-051 text-sm */}
        <pre className="bg-bg-soft border border-divider rounded-xl p-5 text-sm whitespace-pre-line max-w-5xl text-text-sub font-normal leading-relaxed">
{`다음 데이터를 기반으로 Pivot · Persevere · Kill 중
어느 결정이 적절한지 분석해줘.

[종합 분석 메모]
[페르소나 갱신 결과]
[PRD 갱신 결과]
[이벤트 추적 전환율]
[응답 응답률]

각 결정의 근거와 본 학습 시드에 적용한 결과를 정리해줘.
최종 추천 결정을 제시해줘.`}
        </pre>
      </div>
    </>
  );
}
