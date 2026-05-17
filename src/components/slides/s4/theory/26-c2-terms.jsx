// Source: lectures/S4/lecture.md lines 274-282 (#### 2️⃣ 챕터 용어 해설)
// Type: terms (5행 용어 표)

export default function S4TheoryC2Terms() {
  const terms = [
    { term: 'CLAUDE.md', definition: 'Claude Code가 모든 명령 전에 자동 로드하는 헌법' },
    { term: '4영역', definition: '프로젝트 개요, 기술 스택, 코딩 가이드, 제약사항' },
    { term: '헌법 위반', definition: '에이전트가 CLAUDE.md 규칙을 어긴 경우' },
    { term: '200줄 미만', definition: '권장 상한. 토큰 비용 통제' },
    { term: 'AI 검증 루프', definition: 'AI에게 요약을 시켜 의도와 일치 확인' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          챕터 용어 해설 — CLAUDE.md 4영역
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        핵심 용어 정리
      </h2>

      <div className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-5xl">
        {terms.map((t, i) => (
          <div key={i} className="border-l-2 border-accent pl-4 py-2">
            <div className="text-base font-bold text-text tracking-tight leading-snug">
              {t.term}
            </div>
            <div className="text-sm text-text-sub tracking-tight leading-relaxed mt-1">
              {t.definition}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
