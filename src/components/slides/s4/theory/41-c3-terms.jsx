// Source: lectures/S4/lecture.md lines 435-444 (#### 3️⃣ 챕터 용어 해설)
// Type: terms (6행)

export default function S4TheoryC3Terms() {
  const terms = [
    { term: 'OODA 루프', definition: 'Observe-Orient-Decide-Act 의사결정 사이클' },
    { term: 'settings.json', definition: '프로젝트별 Claude Code 설정 파일' },
    { term: 'Permissions', definition: '자율 권한 정의. 자동 / 확인 / 금지' },
    { term: 'allow', definition: '확인 없이 사용 가능' },
    { term: 'ask', definition: '사용 전 확인 필요' },
    { term: 'deny', definition: '권한 자체 차단' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          챕터 용어 해설 — OODA 루프와 Permissions
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
