// Source: lectures/S3/lecture.md lines 627-635 (표준 3개 구성)
// Type: concept (inline 3-card sequential — 입력 → 처리 → 출력)

export default function S3TheoryC5StandardThree() {
  const parts = [
    { role: '입력', n: '기능 1', desc: '사용자가 무엇을 입력하는가' },
    { role: '핵심 처리', n: '기능 2', desc: '가장 강한 페인포인트를 해결하는 작업' },
    { role: '출력', n: '기능 3', desc: '결과를 어떻게 출력하는가' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          표준 3개 구성
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        입력 1 + 핵심 처리 1 + 출력 1
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        MVP 핵심 기능 3개는 한 데이터 흐름의 세 마디로 설계된다.
      </p>

      <div className="flex items-stretch gap-4 max-w-5xl">
        {parts.map((p, i) => (
          <div key={i} className="contents">
            <div className="flex-1 border border-line rounded p-5">
              <div className="text-xs uppercase tracking-wider text-accent mb-2">{p.role}</div>
              <div className="text-lg font-bold text-text mb-2">{p.n}</div>
              <div className="text-sm text-text-sub leading-relaxed">{p.desc}</div>
            </div>
            {i < parts.length - 1 && (
              <div className="flex items-center text-2xl text-text-sub">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
