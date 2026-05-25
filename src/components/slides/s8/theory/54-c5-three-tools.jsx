// Source: lectures/S8/captures/lecture.md (#### 5️⃣ 분석 도구 — 3 도구)
// Type: comparison
// Pattern: 3-row 3-col table with header

export default function S8TheoryC5ThreeTools() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 5 · 3 도구
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        분석 도구 3종의 다른 질문
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-6 max-w-4xl">
        세 도구는 서로 다른 질문에 답함. 한 도구로 다 해결 안 됨.
      </p>

      {/* Comparison Table */}
      <div className="w-full max-w-5xl overflow-hidden rounded-xl border border-divider">
        {/* Header Row */}
        <div className="grid grid-cols-[200px_1fr_1fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">도구</div>
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">답하는 질문</div>
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">기획 가치</div>
        </div>

        {/* Data Rows */}
        {[
          {
            tool: 'Microsoft Clarity',
            question: '사용자가 어디서 막히는가?',
            value: 'UX 가설 검증',
          },
          {
            tool: 'Sentry',
            question: '우리가 모르는 에러가 얼마나 있는가?',
            value: '품질 신호',
          },
          {
            tool: '이벤트 추적',
            question: 'PRD 가설이 실제로 통과하는가?',
            value: '가설 검증',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[200px_1fr_1fr] px-5 py-4 border-b border-divider last:border-b-0"
          >
            <div className="font-bold text-accent">{item.tool}</div>
            <div className="text-text font-semibold">{item.question}</div>
            <div className="text-text-sub">{item.value}</div>
          </div>
        ))}
      </div>

      {/* Footer Aside */}
      <aside className="mt-4 border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-5xl">
        <p className="text-sm text-text leading-relaxed">
          세 질문이 각각 다른 의사결정 영역. UX 수정 / 코드 버그 수정 / PRD 갱신. 한 도구로 모든 결정을 내릴 수 없는 이유.
        </p>
      </aside>
    </>
  );
}
