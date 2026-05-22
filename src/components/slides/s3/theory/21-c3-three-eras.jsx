// Source: lectures/S3/lecture.md lines 319-325 (PRD 제작의 3시대)
// Type: process (3-card 타임라인)

export default function S3TheoryC3ThreeEras() {
  const eras = [
    {
      label: '과거',
      era: '~ 2022',
      analysis: 'PM이 직접 자료 읽기',
      refinement: 'PM이 직접 작성',
      limit: '시간 소요, 편향',
    },
    {
      label: '과도기',
      era: '2023 ~ 2024',
      analysis: 'PM + 일반 LLM',
      refinement: 'PM + 일반 LLM',
      limit: '환각, 일관성 부족',
    },
    {
      label: '현재',
      era: '2025 ~',
      analysis: '출처 기반 AI (NotebookLM)',
      refinement: '기획 전용 AI (Manyfast)',
      limit: '도구 분리 필요',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          PRD 제작의 3시대
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-8">
        분석과 정제는 시대마다 다르게 결합되어 왔다
      </h2>

      <div className="grid grid-cols-3 gap-5 max-w-6xl">
        {eras.map((e, i) => (
          <div
            key={i}
            className={`border rounded p-5 ${i === 2 ? 'border-accent' : 'border-divider'}`}
          >
            <div className={`text-2xl font-bold mb-1 leading-tight ${i === 2 ? 'text-accent' : 'text-text'}`}>
              {e.label}
            </div>
            <div className="text-sm text-text-sub mb-4">
              {e.era}
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <div className="text-text-sub uppercase text-xs tracking-wider mb-1">분석</div>
                <div className="text-text">{e.analysis}</div>
              </div>
              <div>
                <div className="text-text-sub uppercase text-xs tracking-wider mb-1">정제</div>
                <div className="text-text">{e.refinement}</div>
              </div>
              <div>
                <div className="text-text-sub uppercase text-xs tracking-wider mb-1">한계</div>
                <div className="text-text-sub">{e.limit}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
