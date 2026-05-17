// Source: lectures/S5/lecture.md lines 290-298 (#### 요소 1: 페이지가 뜬다)
// Type: concept (3-row check)

export default function S5TheoryC3Element1() {
  const checks = [
    'CSS가 깨지지 않음',
    '텍스트와 버튼이 정상적으로 보임',
    '레이아웃이 무너지지 않음',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          요소 1 · 페이지가 뜬다
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        빈 화면이 아니라 디자인된 화면이 표시
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        브라우저 렌더링이 정상이라는 가장 기본 신호.
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
