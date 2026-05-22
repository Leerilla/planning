// Source: lectures/S3/lecture.md lines 106-116
// Type: comparison (5요소 한눈에, inline 5-row 표)

export default function S3TheoryC2Overview() {
  const rows = [
    { n: '1', name: '문제', desc: '누가 어떤 상황에서 무엇을 어려워하는가' },
    { n: '2', name: '페르소나', desc: '그 문제를 겪는 사용자는 누구인가' },
    { n: '3', name: '핵심 기능', desc: '그 문제를 어떻게 푸는가 (3개 이하)' },
    { n: '4', name: '성공 지표', desc: '문제 해결을 어떻게 측정하는가' },
    { n: '5', name: '사용자 스토리', desc: '페르소나가 어떤 가치를 어떤 이유로 받는가' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          5요소 한눈에 보기
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        다섯 요소가 모두 채워졌을 때 PRD로 기능한다
      </h2>

      <p className="text-base text-text-sub mb-6 max-w-3xl">
        좋은 PRD는 다섯 가지 요소가 모두 갖춰진 합의 문서이다.
      </p>

      <div className="rounded border border-divider overflow-hidden max-w-4xl">
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[60px_180px_1fr] items-center ${i < rows.length - 1 ? 'border-b border-divider' : ''}`}
          >
            <div className="px-5 py-4 text-2xl font-bold text-accent text-center">
              {r.n}
            </div>
            <div className="px-5 py-4 text-base font-bold text-text border-l border-divider">
              {r.name}
            </div>
            <div className="px-5 py-4 text-base text-text-sub border-l border-divider">
              {r.desc}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
