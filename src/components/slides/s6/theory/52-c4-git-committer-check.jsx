// Source: lectures/S6/lecture.md lines 563-572
// Type: comparison (6-row principle check table)
// Pattern: 2-column layout (원칙 | 적용)
// Interactive: static

export default function S6TheoryC4GitCommitterCheck() {
  const principles = [
    {
      number: '1',
      principle: '단일 책임',
      applied: '"git 커밋 자동화"',
    },
    {
      number: '2',
      principle: '최소 권한',
      applied: 'Bash, Read만',
    },
    {
      number: '3',
      principle: '결정적 출력',
      applied: '변경 파일/메시지/실행 결과 3단',
    },
    {
      number: '4',
      principle: '책임 분리',
      applied: '커밋만, 코드 수정 X',
    },
    {
      number: '5',
      principle: '호출 시점',
      applied: '"응답 종료 시"',
    },
    {
      number: '6',
      principle: '입출력 계약',
      applied: '본문에 명시',
    },
  ];

  return (
    <div className="flex flex-col gap-8 h-full justify-center">
      <h2 className="text-4xl font-bold tracking-tight text-text">
        git-committer의 6원칙 점검
      </h2>

      <div className="grid grid-cols-2 gap-6 max-w-5xl">
        {/* Header */}
        <div className="col-span-2 grid grid-cols-2 gap-6 border-b border-divider pb-3">
          <div className="text-sm font-bold text-text-sub uppercase tracking-wider">
            원칙
          </div>
          <div className="text-sm font-bold text-text-sub uppercase tracking-wider">
            적용
          </div>
        </div>

        {/* Rows */}
        {principles.map((p, i) => (
          <div key={i} className="col-span-2 grid grid-cols-2 gap-6 border-b border-divider py-4">
            <div className="flex items-start gap-3">
              <span className="inline-block w-6 h-6 rounded bg-accent text-white text-xs font-bold flex items-center justify-center shrink-0">
                {p.number}
              </span>
              <span className="text-base font-bold text-text">
                {p.principle}
              </span>
            </div>
            <div className="text-base text-text-sub leading-relaxed">
              {p.applied}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
