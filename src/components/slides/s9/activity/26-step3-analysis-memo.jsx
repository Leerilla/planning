// Source: lectures/S9/lecture.md L783-803 (#### 3-5 분석 메모, example pre + D-054 inline code)
// Type: ExampleSlide

export default function S9ActivityStep3AnalysisMemo() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 3-5 · 분석 메모
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          3-5. 분석 메모 정리
        </h2>

        {/* Subtitle with D-054 inline code */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          산출물: <code className="text-accent font-semibold">docs/analysis-memo.md</code> — Clarity·Sentry·이벤트 추적 3종 메모 통합
        </p>

        {/* Pre block - D-051 text-sm */}
        <pre className="bg-bg-soft border border-divider rounded-xl p-5 text-sm whitespace-pre-line max-w-4xl leading-relaxed">
{`[분석 도구 해석 메모]

[Clarity]
- 세션 N건 분석
- 막힘 패턴 1-2개: {위치와 빈도}
- 히트맵 발견 1-2개: {보이지 않는 영역}

[Sentry]
- 에러 발생 N건
- 가장 자주 발생: {에러명, 영향 사용자 수}

[이벤트 추적]
- 페이지 진입 N → 버튼 클릭 M → 완료 K
- 전환율: M/N = X%, K/M = Y%, K/N = Z%
- PRD 가설 통과: 통과 / 미통과 / 보류`}
        </pre>

        {/* Footer */}
        <p className="text-xs text-text-sub max-w-4xl mt-3">
          3종 도구 메모를 한 파일로 통합 — Step 4 NotebookLM 종합 분석의 입력
        </p>
      </div>
    </>
  );
}
