// Source: lectures/S7/lecture.md L696-704 (Step 2 검증 4항목)
// Type: activity (4-check list)
// S7 T16b (2026-05-25): 강사 요구 — h-px divider 기준 분리 (기존 17 하단부)

export default function S7Activity_2_Validation() {
  const items = [
    '자율 디버깅 3원칙 명령을 사용했는가',
    '에이전트가 분석·수정·재실행 흐름을 따랐는가',
    '테스트가 통과했는가 (또는 막힘 메모가 있는가)',
    '무한 루프에 빠진 경우 정리 명령을 사용했는가',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-검증 · Step 2 통과 기준
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text mb-2">
        Step 2 검증 기준
      </h2>

      <p className="text-text-sub text-base mb-4 max-w-4xl">
        4항목 모두 통과 시 Step 3 (scenario-verifier 작성) 진입
      </p>

      <div className="flex flex-col gap-2 max-w-5xl">
        {items.map((label, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-3 border border-divider bg-bg-soft rounded-xl"
          >
            <div className="w-5 h-5 mt-0.5 border-2 border-divider rounded-full shrink-0" />
            <div className="text-sm text-text leading-relaxed">{label}</div>
          </div>
        ))}
      </div>
    </>
  );
}
