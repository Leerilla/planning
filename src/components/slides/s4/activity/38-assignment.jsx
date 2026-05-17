// Source: lectures/S4/lecture.md lines 985-997 (## 과제)
// Type: activity (표 — 목표 / 산출물 / 마감)

export default function S4ActivityAssignment() {
  const rows = [
    { axis: '목표', detail: '빌드 진입 가능한 상태로 환경 안정화' },
    { axis: '산출물', detail: 'CLAUDE.md, docs/, rules/, settings.json, GitHub 저장소 초기 커밋' },
    { axis: '마감', detail: '다음 학습 단계 시작 전' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          과제 · assignment.md 참조
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        본 자료의 과제
      </h2>

      <p className="text-base text-text-sub mb-6 max-w-3xl">
        다음 단계(자료 5)에서 본 산출물을 입력으로 받아 화면 분석과 Task 재구성을 진행한다.
      </p>

      <div className="rounded border border-line overflow-hidden max-w-5xl">
        <div className="grid grid-cols-[140px_1fr] bg-bg-soft border-b border-line">
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub">항목</div>
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub border-l border-line">내용</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[140px_1fr] ${i < rows.length - 1 ? 'border-b border-line' : ''}`}
          >
            <div className="px-5 py-4 text-base text-text font-bold">{r.axis}</div>
            <div className="px-5 py-4 text-base text-text-sub border-l border-line">{r.detail}</div>
          </div>
        ))}
      </div>
    </>
  );
}
