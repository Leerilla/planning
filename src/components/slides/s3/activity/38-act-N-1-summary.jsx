// Source: lectures/S3/lecture.md lines 1305-1312 (N-1 결과 정리 4-row 표)
// Type: activity (4-card 산출물 매핑)
// 강사 결정 5: L1311 셀 "MCP 연동" → "prd.md 연동" (강사 작업 완료)

export default function S3Activity_N_1_Summary() {
  const items = [
    { n: '1', name: 'NotebookLM 노트북', use: '마지막 노출 단계 재오픈' },
    { n: '2', name: 'Manyfast 프로젝트', use: '다음 단계 prd.md 연동' },
    { n: '3', name: 'docs/prd.md', use: '빌드 환경 핵심 입력' },
    { n: '4', name: '빌드 프로젝트 폴더', use: 'Claude Code 작업 환경' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 N-1 · 산출물 4개 매핑
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        결과 정리 — 산출물 × 다음 단계 활용처
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-6 max-w-4xl">
        네 산출물이 모두 손에 있어야 다음 세션으로 자신 있게 넘어간다.
      </p>

      <div className="grid grid-cols-2 gap-4 max-w-5xl">
        {items.map((it, i) => (
          <div key={i} className="border border-line rounded p-5">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-3xl font-bold text-accent leading-none">{it.n}</span>
              <span className="text-lg font-bold text-text">{it.name}</span>
            </div>
            <div className="text-xs uppercase tracking-wider text-text-sub mb-1">
              다음 단계 활용처
            </div>
            <div className="text-sm text-text-sub leading-relaxed">{it.use}</div>
          </div>
        ))}
      </div>
    </>
  );
}
