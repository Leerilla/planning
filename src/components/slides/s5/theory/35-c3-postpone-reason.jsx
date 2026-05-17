// Source: lectures/S5/lecture.md lines 341-350 (#### 디자인 정제를 다음으로 미루는 이유)
// Type: concept (이중 손실)

export default function S5TheoryC3PostponeReason() {
  const losses = [
    {
      label: '[1]',
      text: '빌드 시간 부족 → 핵심 기능 미완성',
    },
    {
      label: '[2]',
      text: '정제한 디자인이 페르소나 행동과 맞지 않을 위험',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          디자인 정제를 다음으로 미루는 이유
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        이중 손실 방지 — 디자인 정제에 시간 쏟으면
      </h2>

      <div className="space-y-4 max-w-4xl mb-6">
        {losses.map((l, i) => (
          <div key={i} className="flex items-start gap-4 border-l-2 border-danger pl-4 py-2">
            <span className="text-base font-bold text-danger shrink-0">{l.label}</span>
            <p className="text-base text-text leading-relaxed">{l.text}</p>
          </div>
        ))}
      </div>

      <div className="border-l-2 border-accent pl-5 py-3 max-w-4xl">
        <p className="text-base text-text leading-relaxed">
          따라서 빌드 단계에서는 <strong className="text-accent">동작이 합격선</strong>, 디자인은 시안 수준에서 멈춤.
        </p>
      </div>
    </>
  );
}
