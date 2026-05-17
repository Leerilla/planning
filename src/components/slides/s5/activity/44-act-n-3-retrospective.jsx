// Source: lectures/S5/lecture.md lines 946-952 (N-3 회고 좋은 답 vs 나쁜 답 3 질문)
// Type: comparison (3 질문, 좋은 답 vs 나쁜 답)

export default function S5Activity_N_3_Retrospective() {
  const rows = [
    {
      q: '화면 분석 효과',
      good: '"기능 단위 Task가 화면 단위로 다시 묶이면서 빌드 순서가 명확해짐"',
      bad: '"도움이 됐다"',
    },
    {
      q: '위임 3원칙 효과',
      good: '"한 파일만 수정하라는 범위 좁힘이 결과의 일관성 만들었음"',
      bad: '"좋았다"',
    },
    {
      q: '다음 Task 패턴',
      good: '"Issue #2 이미지 업로드도 같은 위임 양식으로 명령 가능"',
      bad: '"이어가면 된다"',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 N-3 · 산출물: 회고 3 답변
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        회고 — 좋은 답 vs 나쁜 답
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        구체성이 회고의 품질을 결정.
      </p>

      <div className="rounded border border-line overflow-hidden max-w-6xl">
        <div className="grid grid-cols-[1fr_2fr_1fr] bg-bg-soft border-b border-line">
          <div className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-text-sub">질문</div>
          <div className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-accent border-l border-line">좋은 답 (구체)</div>
          <div className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-text-sub border-l border-line">나쁜 답 (추상)</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_2fr_1fr] ${i < rows.length - 1 ? 'border-b border-line' : ''}`}
          >
            <div className="px-4 py-3 text-sm font-semibold text-text">{r.q}</div>
            <div className="px-4 py-3 text-sm text-text border-l border-line">{r.good}</div>
            <div className="px-4 py-3 text-sm text-text-sub border-l border-line italic">{r.bad}</div>
          </div>
        ))}
      </div>
    </>
  );
}
