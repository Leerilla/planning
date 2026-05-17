// Source: lectures/S3/lecture.md lines 857-876 (1-5 현재 대안 + 시드 6 결과 통합)
// Type: activity (inline 2-area — 좌 프롬프트 / 우 시드 6 현재 대안 3개)

export default function S3Activity_1_5_CurrentAlt() {
  const alternatives = [
    '경쟁 상품 상세페이지 5-10개 수동 응용',
    '크몽 외주 (건당 3-10만원)',
    '본인이 직접 1-2시간 작성',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-5 · 산출물: 현재 대안 3개 + 차별점
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        현재 대안 파악 — 프롬프트 + 시드 6 결과
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        차별점 = 도구의 핵심 가치 = <span className="highlight-mark">현재 대안을 어떻게 줄이는가</span>.
      </p>

      <div className="grid grid-cols-2 gap-8 max-w-6xl">
        <div>
          <div className="text-base font-semibold text-text-sub mb-3">
            두 번째 질문
          </div>
          <div className="rounded border-l-2 border-accent bg-bg-soft p-5">
            <p className="text-base text-text leading-relaxed">
              "이 사람들이 현재 어떤 방식으로 이 문제를 해결하고 있는가?"
            </p>
          </div>
        </div>

        <div>
          <div className="text-base font-semibold text-text-sub mb-3">
            시드 6번 현재 대안
          </div>
          <ol className="space-y-2 mb-3">
            {alternatives.map((a, i) => (
              <li key={i} className="flex gap-3 text-base border border-line rounded px-4 py-3">
                <span className="font-bold text-accent w-6 shrink-0">{i + 1}</span>
                <span className="text-text leading-relaxed">{a}</span>
              </li>
            ))}
          </ol>
          <p className="text-sm text-text-sub leading-relaxed font-medium">
            차별점: 수동 응용과 외주의 비용·시간을 자동으로 줄여줌.
          </p>
        </div>
      </div>

      {/* Manyfast 전달 흐름 — 다음 액션 */}
      <div className="mt-6 max-w-6xl">
        <div className="text-xs font-semibold tracking-wider uppercase text-accent mb-3">
          다음 액션 · Manyfast로 전달
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex-1 min-w-[180px] border border-line rounded p-3 bg-bg-soft">
            <div className="text-xs text-text-sub mb-1">NotebookLM 산출</div>
            <div className="text-sm text-text leading-snug">페인포인트 5개 + 현재 대안 3개 + 페르소나 검증</div>
          </div>
          <span className="text-accent text-xl font-bold">→</span>
          <div className="flex-1 min-w-[180px] border border-line rounded p-3 bg-bg-soft">
            <div className="text-xs text-text-sub mb-1">통합 정리</div>
            <div className="text-sm text-text leading-snug">NotebookLM 요약 + 페르소나 6줄을 한 블록으로 묶기</div>
          </div>
          <span className="text-accent text-xl font-bold">→</span>
          <div className="flex-1 min-w-[180px] border border-accent rounded p-3 bg-success-soft">
            <div className="text-xs text-accent font-semibold mb-1">Manyfast 입력</div>
            <div className="text-sm text-text leading-snug">Step 2-2 "AI 생성" 입력 영역에 붙여넣기 → PRD 초안 생성</div>
          </div>
        </div>
      </div>
    </>
  );
}
