// Source: lectures/S1/lecture.md lines 290-304
// Type: comparison (3행 표 — 판단 영역/AI 역할/작업자 역할)
// D-040: 표 형식 → inline 3-row grid

export default function S1TheoryC2JudgmentDomain() {
  const rows = [
    {
      domain: '페르소나 1명 그리기',
      ai: '후보 5-10명 빠르게 제안',
      human: '1명을 채택하는 결정',
    },
    {
      domain: '페인포인트의 시장 신호 판단',
      ai: '자료에서 패턴 추출',
      human: '본인 시장 적용성 판단',
    },
    {
      domain: '가설의 검증 가능성 점검',
      ai: '(대신할 수 없음)',
      human: '검증 가능 형식 정의',
    },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          변하지 않은 것 — 판단의 영역
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        가속해도 깊이가 깊어지지 않는 세 영역
      </h2>

      {/* Table */}
      <div className="max-w-6xl mt-6">
        {/* Header */}
        <div className="grid grid-cols-[1.5fr_1.5fr_1.5fr] gap-4 px-4 py-3 border-b-2 border-divider">
          <span className="text-text-muted text-xs font-semibold tracking-wider uppercase">판단 영역</span>
          <span className="text-text-muted text-xs font-semibold tracking-wider uppercase">AI의 역할</span>
          <span className="text-accent text-xs font-semibold tracking-wider uppercase">작업자의 역할</span>
        </div>

        {/* Rows */}
        {rows.map((r, i) => (
          <div
            key={i}
            className="grid grid-cols-[1.5fr_1.5fr_1.5fr] gap-4 px-4 py-4 border-b border-divider items-start"
          >
            <span className="text-base font-bold text-text">{r.domain}</span>
            <span className="text-base text-text-sub">{r.ai}</span>
            <span className="text-base font-semibold text-accent">{r.human}</span>
          </div>
        ))}
      </div>

      {/* Core principle */}
      <div className="border-l-4 border-accent bg-success-soft pl-5 py-4 mt-6 max-w-5xl">
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-1">
          핵심 원칙
        </div>
        <p className="text-lg font-bold text-text leading-snug">
          모으는 일은 <span className="text-accent">가속</span>하고, 판단하는 일은 <span className="text-accent">깊게</span> 한다
        </p>
      </div>
    </>
  );
}
