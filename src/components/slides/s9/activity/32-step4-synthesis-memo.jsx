// Source: lectures/S9/lecture.md L858-877 (#### 4-4 종합 분석 메모, example pre + D-054 inline code)
// Type: ExampleSlide

export default function S9ActivityStep4SynthesisMemo() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 4-4 · 종합 분석 메모
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          4-4. 종합 분석 메모
        </h2>

        {/* Subtitle with D-054 inline code */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          산출물: <code className="text-accent font-semibold">docs/synthesis-memo.md</code> — 페르소나·페인포인트·가설 3섹션 구조
        </p>

        {/* Pre block */}
        <pre className="bg-bg-soft border border-divider rounded-xl p-5 text-sm whitespace-pre-line max-w-4xl leading-relaxed">
          {`[종합 분석 메모]

[페르소나]
- 가설 페르소나와 실제 사용자의 차이: {추가/제거할 특성}

[페인포인트]
- 검증된 페인포인트 (응답 + 행동 데이터 모두): {목록}
- 검증 실패 페인포인트 (가설이었지만 데이터에서 안 보임): {목록}
- 새로 발견된 페인포인트 (가설에 없었지만 나옴): {목록}

[가설 통과 여부]
- PRD 가설 1: {통과/미통과/보류}, 근거: {데이터}
- PRD 가설 2: {통과/미통과/보류}, 근거: {데이터}
- PRD 가설 3: {통과/미통과/보류}, 근거: {데이터}`}
        </pre>

        {/* Footer */}
        <p className="mt-3 text-xs text-text-sub max-w-4xl">
          Step 5 persona.md + prd.md 갱신의 직접 입력 — D-044 7종 신규 docs 3번째
        </p>
      </div>
    </>
  );
}
