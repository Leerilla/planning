// Source: lectures/S9/lecture.md L498-505 (#### 4️⃣ 챕터 용어 해설 — 4 terms)
// Type: Terms — diagram format (4-card grid with circle markers + structured cards)
// D-035: emoji 제거 — title "4." 점만
// Phase 6: request.md #43 다이어그램 형식 디자인

export default function S9TheoryC4Terms() {
  const terms = [
    {
      term: 'Pivot',
      definition: '페르소나 또는 핵심 가설을 바꾸는 결정',
    },
    {
      term: 'Persevere',
      definition: 'PRD 일부만 갱신하고 같은 방향으로 빌드',
    },
    {
      term: 'Kill',
      definition: '본 시드를 폐기하고 다른 시드로 이동',
    },
    {
      term: '5단계 사슬의 약한 고리',
      definition: '본 학습에서 가장 약했던 단계',
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 4 · 용어 해설
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-2">
          4. 챕터 용어 해설
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-text-sub mb-8 max-w-4xl">
          4개 어휘 — 본 챕터의 핵심
        </p>

        {/* Diagram format: 2x2 card grid with circle markers */}
        <div className="grid grid-cols-2 gap-5 max-w-6xl">
          {terms.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 border border-divider bg-bg-soft rounded-2xl p-5"
            >
              {/* Circle marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-bg font-bold text-sm shrink-0 mt-1">
                {idx + 1}
              </div>

              {/* Term + Definition */}
              <div className="flex flex-col gap-2 flex-1">
                <div className="text-accent font-bold text-lg leading-tight">
                  {item.term}
                </div>
                <div className="text-text-sub text-sm font-medium leading-relaxed">
                  {item.definition}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
