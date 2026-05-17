// Source: lectures/S3/lecture.md lines 420-433 (Manyfast 특징 4 + 장점 통합)
// Type: concept (inline 2-area — 특징 표 + 장점 리스트)
// 강사 결정 5: L425 "MCP 연동" 행 보존 (소개) / L433 "빌드 연결" 삭제 → 장점 2개

export default function S3TheoryC4Manyfast() {
  const features = [
    { feat: '4 in 1 통합', diff: 'PRD, 기능명세, 유저플로우, 와이어프레임 한 프로젝트' },
    { feat: 'Claude Code MCP 연동', diff: 'Claude Code가 프로젝트를 직접 조회' },
    { feat: '한국어 네이티브', diff: '영어 도구의 번역체 어색함 없음' },
    { feat: 'AI 자동 검토', diff: '누락·모호한 표현 자동 지적' },
  ];

  const benefits = [
    '양식 일관성 — PRD 5요소 자동 정형화',
    '동기화 자동 — PRD 수정 시 기능명세에 자동 반영',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          Manyfast
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        특징과 장점
      </h2>

      <div className="grid grid-cols-2 gap-6 max-w-6xl items-stretch">
        <div className="flex flex-col">
          <div className="text-sm font-semibold text-text-sub mb-3">
            특징 (일반 LLM과의 차이)
          </div>
          <div className="rounded border border-line overflow-hidden flex-1">
            {features.map((f, i) => (
              <div
                key={i}
                className={`grid grid-cols-[160px_1fr] ${i < features.length - 1 ? 'border-b border-line' : ''}`}
              >
                <div className="px-4 py-3 text-sm font-medium text-text">{f.feat}</div>
                <div className="px-4 py-3 text-sm text-text-sub border-l border-line">{f.diff}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-sm font-semibold text-text-sub mb-3">
            장점
          </div>
          <ul className="space-y-3">
            {benefits.map((b, i) => (
              <li key={i} className="border-l-2 border-accent pl-4 py-2 text-base text-text leading-relaxed">
                {b}
              </li>
            ))}
          </ul>
          <p className="text-sm text-text-sub mt-auto pt-5 leading-relaxed">
            Claude Code 연동은 유료 기능. 본 강의에서는 prd.md export 방식으로 빌드에 연결한다.
          </p>
        </div>
      </div>
    </>
  );
}
