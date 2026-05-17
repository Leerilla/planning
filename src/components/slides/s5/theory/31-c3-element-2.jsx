// Source: lectures/S5/lecture.md lines 300-306 (#### 요소 2: 핵심 인터랙션 작동)
// Type: concept (3-row check)

export default function S5TheoryC3Element2() {
  const checks = [
    '버튼을 클릭할 수 있음',
    '입력 필드에 텍스트를 입력할 수 있음',
    '클릭이나 입력에 화면이 반응',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          요소 2 · 핵심 인터랙션 작동
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        사용자 행동이 화면에 닿는다
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        클릭·입력 같은 인터랙티브 요소가 작동하는지 확인.
      </p>

      <div className="space-y-4 max-w-4xl">
        {checks.map((c, i) => (
          <div key={i} className="flex items-start gap-4 border-l-2 border-accent pl-4 py-3">
            <span className="text-lg font-bold text-accent tabular-nums shrink-0">
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="text-lg text-text leading-relaxed">{c}</p>
          </div>
        ))}
      </div>
    </>
  );
}
