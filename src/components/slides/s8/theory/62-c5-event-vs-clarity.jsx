// Source: lectures/S8/captures/lecture.md (#### 이벤트 추적 vs Clarity)
// Type: comparison
// Pattern: 3-row 3-col table + footer
// D-050: lecture.md 원문 보존 (항목/이벤트추적/Clarity)

export default function S8TheoryC5EventVsClarity() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 5 · 보완 관계
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        이벤트 추적 vs Clarity
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-6 max-w-4xl">
        두 도구는 상호 보완 — 숫자 + 영상
      </p>

      {/* Table */}
      <div className="w-full max-w-4xl overflow-hidden rounded-xl border border-divider">
        {/* Header Row */}
        <div className="grid grid-cols-[180px_1fr_1fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">항목</div>
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">이벤트 추적</div>
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">Clarity</div>
        </div>

        {/* Data Rows */}
        {[
          {
            item: '데이터 형태',
            eventTracking: '숫자 (몇 명이 했는가)',
            clarity: '영상 (어떻게 했는가)',
          },
          {
            item: '답하는 차원',
            eventTracking: '가설 통과율',
            clarity: '막힌 지점',
          },
          {
            item: '의사결정',
            eventTracking: 'PRD 갱신',
            clarity: 'UX 개선',
          },
        ].map((row, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[180px_1fr_1fr] px-5 py-4 border-b border-divider last:border-b-0"
          >
            <div className="font-semibold text-text text-sm">{row.item}</div>
            <div className="text-text-sub text-sm">{row.eventTracking}</div>
            <div className="text-text-sub text-sm">{row.clarity}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 text-base text-text-sub leading-relaxed max-w-5xl">
        두 도구가 상호 보완. 이벤트 추적이 가설 미달을 알려주면 → Clarity로 왜 미달했는지 영상 확인.
      </div>
    </>
  );
}
