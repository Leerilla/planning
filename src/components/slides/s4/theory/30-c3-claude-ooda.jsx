// Source: lectures/S4/lecture.md lines 307-331 (#### Claude Code의 OODA 루프)
// Type: process (4단계 sequential reveal — Claude Code 적용)

export default function S4TheoryC3ClaudeOoda() {
  const stages = [
    {
      n: '1',
      en: 'Observe',
      items: ['CLAUDE.md 자동 로드', '폴더 구조 인식', '명령 텍스트 수신'],
    },
    {
      n: '2',
      en: 'Orient',
      items: ['4영역 정보로 상황 정렬', '페르소나·기술 스택 인식', '현재 명령이 어느 기능인지 판단'],
    },
    {
      n: '3',
      en: 'Decide',
      items: ['어떤 도구를 쓸지 결정', '어떤 파일을 수정할지 결정', 'Permissions에 따라 분류'],
    },
    {
      n: '4',
      en: 'Act',
      items: ['결정한 도구 실행', '파일 수정, 명령 실행'],
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          Claude Code의 OODA 루프
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        매 명령마다 4단계를 거친다
      </h2>

      <div className="grid grid-cols-4 gap-3 max-w-6xl">
        {stages.map((s, i) => (
          <div key={i} className="border border-divider rounded p-4">
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-bold text-accent leading-none">{s.n}</span>
              <span className="text-base font-bold text-text">{s.en}</span>
            </div>
            <ul className="space-y-1.5">
              {s.items.map((it, j) => (
                <li key={j} className="text-xs text-text-sub leading-relaxed">· {it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-sm text-text-sub mt-4 max-w-6xl">
        ↻ (Act 이후 새 상태가 다시 Observe로 순환)
      </p>
    </>
  );
}
