// Source: lectures/S8/captures/lecture.md (#### 이벤트 추적 표준 3개)
// Type: comparison
// Pattern: 3-row 3-col table + aside
// D-050: lecture.md 원문 보존 (이벤트/시드6번/질문)

export default function S8TheoryC5EventStandards() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 5 · 표준 이벤트
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        이벤트 추적 표준 3개
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-6 max-w-4xl">
        본 학습에서 추적할 핵심 이벤트
      </p>

      {/* Table */}
      <div className="w-full overflow-hidden rounded-xl border border-divider">
        {/* Header Row */}
        <div className="grid grid-cols-[200px_1fr_1fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">이벤트</div>
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">시드 6번 적용</div>
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">답하는 질문</div>
        </div>

        {/* Data Rows */}
        {[
          {
            event: '페이지 진입',
            seed: '카피 입력 화면 방문',
            question: '누가 들어오는가',
          },
          {
            event: '핵심 버튼 클릭',
            seed: '"카피 생성" 클릭',
            question: '핵심 기능 시도하는가',
          },
          {
            event: '핵심 기능 완료',
            seed: '카피 1개 복사',
            question: '가설 통과하는가',
          },
        ].map((row, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[200px_1fr_1fr] px-5 py-4 border-b border-divider last:border-b-0"
          >
            <div className="font-bold text-accent text-center text-sm">{row.event}</div>
            <div className="text-text-sub text-sm">{row.seed}</div>
            <div className="text-text-sub text-sm">{row.question}</div>
          </div>
        ))}
      </div>

      {/* Aside */}
      <div className="mt-4 border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-5xl">
        <p className="text-sm text-text leading-relaxed">
          시드 6번 가설 검증: 100명 진입 → 70명이 카피 생성 클릭 → 50명이 복사까지 진행. 50/100 = 50% 완료율. PRD 목표 70% 미달 → PRD 갱신 또는 UX 수정 결정.
        </p>
      </div>
    </>
  );
}
