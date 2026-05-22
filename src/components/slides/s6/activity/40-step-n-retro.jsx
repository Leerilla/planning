// Source: lectures/S6/lecture.md lines 1170-1189 (#### N-3. 회고: 좋은 답 vs 나쁜 답)
// Type: comparison (3-column table, 3 rows)
// Profile: hierarchical / comparison / medium-high / balanced
// Emphasis: key-message (자동화 본질 인식)

export default function S6ActivityStepNRetro() {
  const rows = [
    {
      question: 'Issue #1 vs Issue #2 시간 차이',
      good: '"절반 줄어듦. 명령 복사 + hook 자동"',
      bad: '"빨라졌다"',
    },
    {
      question: 'PRD 검증 보고 불일치',
      good: '"Issue #7에서 영어 카피 임의 추가 발견. 거부"',
      bad: '"별 거 없었다"',
    },
    {
      question: 'Stop hook 자동 커밋 효과',
      good: '"커밋 메시지 작성 시간 0. 형식도 자동 일관"',
      bad: '"편했다"',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 N-3 · 회고
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        N-3. 회고: 좋은 답 vs 나쁜 답
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-6 max-w-4xl">
        자동화의 본질을 인식하기 위한 회고 기준
      </p>

      <div className="max-w-5xl overflow-hidden rounded-xl border border-divider">
        <div className="grid grid-cols-[36%_32%_32%] bg-bg-soft px-6 py-3 border-b border-divider">
          <span className="text-xs font-semibold uppercase tracking-wider text-text-sub">질문</span>
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">좋은 답</span>
          <span className="text-xs font-semibold uppercase tracking-wider text-text-sub">나쁜 답</span>
        </div>
        {rows.map((row, idx) => (
          <div
            key={row.question}
            className={`grid grid-cols-[36%_32%_32%] px-6 py-4 items-start gap-4 ${
              idx === rows.length - 1 ? '' : 'border-b border-divider'
            }`}
          >
            <span className="text-sm font-medium text-text">{row.question}</span>
            <span className="text-sm font-bold text-accent leading-relaxed">{row.good}</span>
            <span className="text-sm font-medium text-text-sub leading-relaxed">{row.bad}</span>
          </div>
        ))}
      </div>
    </>
  );
}
