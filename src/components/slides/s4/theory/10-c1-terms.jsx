// Source: lectures/S4/lecture.md lines 83-90 (#### 1️⃣ 챕터 용어 해설)
// Type: terms (4행 용어 표)

export default function S4TheoryC1Terms() {
  const terms = [
    { term: '컨텍스트', definition: '에이전트가 명령을 처리할 때 참조하는 정보의 집합' },
    { term: '무상태성', definition: '매 세션마다 백지 상태로 시작하는 성질' },
    { term: '컨텍스트 앵커링', definition: '핵심 정보를 자동 로드되게 하는 기법' },
    { term: '자동 로드', definition: '매 세션 시작 시 자동으로 읽힘' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          챕터 용어 해설 — AI 에이전트와 대화하는 법
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        핵심 용어 정리
      </h2>

      <div className="grid grid-cols-2 gap-x-6 gap-y-4 max-w-5xl">
        {terms.map((t, i) => (
          <div key={i} className="border-l-2 border-accent pl-4 py-2">
            <div className="text-lg font-bold text-text tracking-tight leading-snug">
              {t.term}
            </div>
            <div className="text-base text-text-sub tracking-tight leading-relaxed mt-1.5">
              {t.definition}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
