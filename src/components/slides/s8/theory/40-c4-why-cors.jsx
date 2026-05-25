// Source: lectures/S8/captures/lecture.md L522-534 (자동 매핑, comparison 2-col)
// Type: ComparisonSlide
// D-050: lecture.md 원문 100% 보존
// S8 T19c (2026-05-25): 강사 요구 — 높이 축소 / 밀집도 강화

export default function S8TheoryC4WhyCORS() {
  const rows = [
    {
      cause: '악성 사이트가 본인 BE 호출 가능',
      effect: '사용자가 본인 사이트 로그인 상태에서 다른 탭의 악성 페이지가 본인 BE를 마음대로 호출',
    },
    {
      cause: '본인 API 무단 사용',
      effect: '다른 사이트가 본인 BE를 자기 서비스에 무료로 활용',
    },
    {
      cause: '청구서 폭발',
      effect: '누가 호출하는지 통제 불가',
    },
  ];

  return (
    <div className="flex flex-col gap-3 h-full justify-center">
      <div className="flex items-baseline gap-3">
        <span className="h-1 w-12 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          이론 4 · 보안 기획
        </span>
      </div>

      <h2 className="text-2xl font-bold text-text leading-snug">CORS가 왜 존재하는가</h2>

      <p className="text-sm text-text-sub max-w-4xl leading-snug">
        CORS는 불편한 제약이 아니라 필요한 보호 장치.
      </p>

      <div className="max-w-5xl overflow-hidden rounded-xl border border-divider">
        <div className="grid grid-cols-[300px_1fr] bg-bg-soft px-4 py-2 border-b-2 border-divider">
          <span className="text-xs font-bold text-text-muted uppercase tracking-wide">CORS가 없으면</span>
          <span className="text-xs font-bold text-text-muted uppercase tracking-wide">일어나는 일</span>
        </div>

        {rows.map((row, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-[300px_1fr] px-4 py-2 ${idx < rows.length - 1 ? 'border-b border-divider' : ''}`}
          >
            <span className="text-xs font-semibold text-warning leading-snug">{row.cause}</span>
            <span className="text-xs text-text-sub leading-snug">{row.effect}</span>
          </div>
        ))}
      </div>

      <aside className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-4 py-2.5 max-w-4xl">
        <p className="text-xs text-text leading-snug">
          브라우저가 기본으로 차단하는 이유: 사용자 보호. 본인 사이트가 신뢰할 도메인을 명시해야 통신 허용.
        </p>
      </aside>
    </div>
  );
}
