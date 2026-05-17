// Source: lectures/S2/lecture.md L386-392
// Type: example (과제 안내 — 3-row 표 + 결론)

export default function S2ActivityAssignment() {
  const rows = [
    { label: '목표', text: '능동·수동 검증 작업을 본격 가동하고 데이터 자산을 누적' },
    { label: '마감', text: '다음 학습 단계 시작 전' },
    { label: '핵심 산출물', text: '카피 발송 완료 10명 이상 · 스크래핑 데이터 50건 이상' },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          과제 안내
        </span>
      </div>

      {/* Title */}
      <h2 className="text-5xl font-bold tracking-tight text-text leading-[1.1] mb-2">
        과제 안내
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-6 max-w-4xl">
        본 자료의 과제는 별도 파일(<span className="text-text">assignment.md</span>)에 정리되어 있다.
      </p>

      {/* 3 행 표 */}
      <div className="flex flex-col gap-3 max-w-4xl mb-6">
        {rows.map((r, i) => (
          <div
            key={i}
            className="grid grid-cols-[160px_1fr] gap-4 items-center p-4 rounded-2xl border-l-4 border-accent bg-bg-soft hover:bg-success-soft hover:border-success transition-colors"
          >
            <span className="text-accent text-xs font-semibold tracking-wider uppercase">
              {r.label}
            </span>
            <span className="text-base font-semibold text-text tracking-tight leading-relaxed">
              {r.text}
            </span>
          </div>
        ))}
      </div>

      {/* 결론 */}
      <div className="border-l-4 border-success pl-5 max-w-5xl">
        <p className="text-lg font-bold text-text leading-relaxed">
          본 활동의 산출물(카피 1건 + CSV 30건 + 페인포인트 메모)이 <span className="highlight-mark">과제의 출발점</span>이다.
          <br />
          활동에서 만든 자산을 그대로 가져가서 발송 10명·스크래핑 50건으로 확장하면 과제 완성이다.
        </p>
      </div>
    </>
  );
}
