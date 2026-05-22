// Source: lectures/S3/lecture.md lines 1141-1153 (4-2 페르소나·페인포인트 정리 작업 3 STEP)
// Type: activity (3 STEP — 작업 절차)

export default function S3Activity_4_2_Organize() {
  const steps = [
    { n: '1', target: 'docs/persona.md', content: '페르소나 6줄 (Step 1 시작 시 워크시트)' },
    { n: '2', target: 'docs/painpoints.md', content: '페인포인트 5개 + 출처 (Step 1 NotebookLM 결과)' },
    { n: '3', target: 'data/', content: '원본 CSV·인터뷰 파일 복사' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-2 · 산출물: docs/ 3종 + data/ 원본
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        페르소나·페인포인트 정리 — 3 STEP
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        Step 1~3에서 만든 자료를 <span className="highlight-mark">표준 위치</span>로 옮긴다.
      </p>

      <div className="space-y-3 max-w-5xl">
        {steps.map((s, i) => (
          <div key={i} className="grid grid-cols-[50px_2fr_3fr] items-center gap-4 border border-divider rounded px-4 py-4">
            <span className="text-2xl font-bold text-accent leading-none">{s.n}</span>
            <span className="text-base text-text font-bold">{s.target}</span>
            <span className="text-base text-text-sub leading-relaxed">{s.content}</span>
          </div>
        ))}
      </div>
    </>
  );
}
