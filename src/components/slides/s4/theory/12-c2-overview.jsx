// Source: lectures/S4/lecture.md lines 98-111 (#### 4영역 한눈에 보기)
// Type: comparison (4-row 표)

export default function S4TheoryC2Overview() {
  const rows = [
    { n: '1', area: '프로젝트 개요', q: '무엇을 만드는가', size: '한 단락' },
    { n: '2', area: '기술 스택과 파일 구조', q: '어떤 도구로 만드는가', size: '5-7줄' },
    { n: '3', area: '코딩 가이드라인', q: '어떻게 작성하는가', size: '5-10줄' },
    { n: '4', area: '제약사항', q: '무엇을 안 하는가', size: '3-5줄' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          4영역 한눈에 보기
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        CLAUDE.md = 4영역 × 200줄 미만
      </h2>

      <p className="text-base text-text-sub mb-6 max-w-3xl">
        매 명령마다 자동 로드 — 길수록 비용 증가. 200줄 미만이 균형.
      </p>

      <div className="rounded border border-divider overflow-hidden max-w-5xl">
        <div className="grid grid-cols-[60px_1.6fr_2fr_1fr] bg-bg-soft border-b border-divider">
          <div className="px-4 py-3 text-sm uppercase tracking-wider text-text-sub text-center">#</div>
          <div className="px-4 py-3 text-sm uppercase tracking-wider text-text-sub border-l border-divider">영역</div>
          <div className="px-4 py-3 text-sm uppercase tracking-wider text-text-sub border-l border-divider">답하는 질문</div>
          <div className="px-4 py-3 text-sm uppercase tracking-wider text-text-sub border-l border-divider">분량</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[60px_1.6fr_2fr_1fr] ${i < rows.length - 1 ? 'border-b border-divider' : ''}`}
          >
            <div className="px-4 py-4 text-2xl font-bold text-accent text-center">{r.n}</div>
            <div className="px-4 py-4 text-base text-text font-bold border-l border-divider">{r.area}</div>
            <div className="px-4 py-4 text-base text-text-sub border-l border-divider">{r.q}</div>
            <div className="px-4 py-4 text-sm text-text-sub border-l border-divider">{r.size}</div>
          </div>
        ))}
      </div>
    </>
  );
}
