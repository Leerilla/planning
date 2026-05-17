// Source: lectures/S8/captures/lecture.md (#### 5️⃣ 분석 도구 — Microsoft Clarity 행동 분석)
// Type: concept
// Pattern: concept (3-row table + aside)
// D-053: Microsoft Clarity 본격 정의

export default function S8TheoryC5Clarity() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 5 · 도구 1 · Clarity
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        Microsoft Clarity — 행동 분석
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-6 max-w-4xl">
        <span className="font-bold text-text">답하는 질문</span>: <em className="text-accent italic">"사용자가 어디서 막히는가?"</em>
      </p>

      {/* Features Table */}
      <div className="w-full overflow-hidden rounded-xl border border-divider">
        {/* Header Row */}
        <div className="grid grid-cols-[280px_1fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">기능</div>
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">의사결정 활용</div>
        </div>

        {/* Data Rows */}
        {[
          {
            feature: '세션 리플레이 (화면 영상)',
            usage: '막힌 지점 정확한 위치 발견',
          },
          {
            feature: '히트맵 (클릭/스크롤 분포)',
            usage: '어느 버튼이 안 보이는지 확인',
          },
          {
            feature: '페이지 체류 시간',
            usage: '어디서 머뭇거리는지',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[280px_1fr] px-5 py-4 border-b border-divider last:border-b-0"
          >
            <div className="font-semibold text-text">{item.feature}</div>
            <div className="text-text-sub">{item.usage}</div>
          </div>
        ))}
      </div>

      {/* Footer Aside */}
      <aside className="mt-4 border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-5xl">
        <p className="text-sm text-text leading-relaxed">
          시드 6번 예시: 셀러가 "키워드 5개 입력" 단계에서 3개만 입력하고 머뭇거리는 영상이 보이면 → 5개 강제 규칙이 너무 빡빡한 신호. PRD의 가설 수정 근거.
        </p>
      </aside>
    </>
  );
}
