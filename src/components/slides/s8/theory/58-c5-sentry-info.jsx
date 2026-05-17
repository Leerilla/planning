// Source: lectures/S8/captures/lecture.md (#### 5️⃣ 분석 도구 — Sentry가 알려주는 것)
// Type: concept
// Pattern: concept (3-row table + aside)

export default function S8TheoryC5SentryInfo() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 5 · Sentry 정보
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        Sentry가 알려주는 것
      </h2>

      {/* Information Table */}
      <div className="max-w-4xl overflow-hidden rounded-xl border border-divider">
        {/* Header Row */}
        <div className="grid grid-cols-[260px_1fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">항목</div>
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">의사결정 활용</div>
        </div>

        {/* Data Rows */}
        {[
          {
            item: '에러 발생 횟수와 영향 사용자 수',
            usage: '우선순위 결정',
          },
          {
            item: '스택 트레이스 (정확한 코드 위치)',
            usage: '자율 디버깅 즉시 적용',
          },
          {
            item: '발생 컨텍스트 (페이지, 입력값)',
            usage: '재현 가능성 확보',
          },
        ].map((row, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[260px_1fr] px-5 py-4 border-b border-divider last:border-b-0"
          >
            <div className="font-semibold text-text">{row.item}</div>
            <div className="text-text-sub">{row.usage}</div>
          </div>
        ))}
      </div>

      {/* Footer Aside */}
      <aside className="mt-4 border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-4xl">
        <p className="text-sm text-text leading-relaxed">
          시드 6번 예시: OpenAI API 호출이 5% 사용자에게 timeout 발생 → Sentry가 알려주면 retry 로직 추가 결정. 알리지 않았다면 5% 사용자는 "안 됨"만 경험하고 떠남.
        </p>
      </aside>
    </>
  );
}
