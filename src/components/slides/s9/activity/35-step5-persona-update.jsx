// Source: lectures/S9/lecture.md L890-904 (#### 5-1 persona.md 갱신 명령, example pre + D-054 inline code)
// Type: ExampleSlide

export default function S9ActivityStep5PersonaUpdate() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 5-1 · persona 갱신
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          5-1. persona.md 갱신 명령
        </h2>

        {/* Subtitle with D-054 inline code */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          <code className="text-accent font-semibold">docs/persona.md</code> 갱신 — 종합 분석 메모 입력 + 30% 기준 적용
        </p>

        {/* Pre block - D-051 text-sm */}
        <pre className="bg-bg-soft border border-divider rounded-xl p-5 text-sm whitespace-pre-line max-w-5xl leading-relaxed">
          {`docs/persona.md를 분석 결과 기반으로 갱신해줘.

다음 종합 분석 메모를 참조:
[종합 분석 메모 붙여넣기]

갱신 기준:
- 30% 이상 사용자에서 보인 패턴만 페르소나에 반영
- 가설이었지만 데이터에서 안 보인 특성은 제거 또는 약화
- 새로 발견된 특성은 추가 (근거 데이터 메모 포함)

갱신된 페르소나의 변경 사항을 변경 전·후로 정리해서 보여줘.`}
        </pre>

        {/* Footer - D-054 설명 */}
        <p className="mt-3 text-xs text-text-sub max-w-5xl">
          D-044 신규 docs: persona.md (4번째)
        </p>
      </div>
    </>
  );
}
