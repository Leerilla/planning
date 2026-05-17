// Source: lectures/S5/lecture.md lines 250-261 (#### Stitch와 Claude Code 연결)
// Type: process (4단계 sequential)

export default function S5TheoryC3StitchConnection() {
  const steps = [
    { num: '1', text: 'Stitch에서 시안 생성' },
    { num: '2', text: '시안 export (이미지 또는 코드)' },
    { num: '3', text: 'Claude Code에 "이 디자인대로 [기술 스택]으로 구현해줘"' },
    { num: '4', text: '디자인의 시각 결정과 코드 구현이 분리됨' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          Stitch ↔ Claude Code 연결
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        시각 결정과 코드 구현의 분리
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        Stitch가 시각을, Claude Code가 코드를 — 역할 분리.
      </p>

      <div className="space-y-4 max-w-4xl">
        {steps.map((s, i) => (
          <div key={i} className="flex items-start gap-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl border-2 border-accent text-accent text-base font-bold tabular-nums shrink-0">
              {s.num}
            </span>
            <div className="flex-1 border border-line rounded p-4">
              <p className="text-base text-text leading-relaxed">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
