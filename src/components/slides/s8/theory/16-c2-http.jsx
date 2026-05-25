// Source: lectures/S8/captures/lecture.md L162-184 (#### 1. HTTP 요청·응답)
// Type: process
// D-050: lecture.md 원문 보존 + D-051: pre text-sm + D-053: HTTP 메서드 설명
// S8 T18c (2026-05-25): 강사 요구 — 위 통신 박스(max-w-4xl)와 하단 5단계(max-w-6xl) 너비 통일 → max-w-5xl

export default function S8TheoryC2HTTP() {
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Header marker + label */}
      <div className="flex items-baseline gap-3">
        <span className="h-1 w-12 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          이론 2 · 1. HTTP
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text">1. HTTP 요청·응답</h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub max-w-4xl leading-relaxed mb-2">
        FE와 BE의 통신은 HTTP 요청·응답으로 일어남
      </p>

      {/* HTTP Concept Diagram */}
      <div className="flex items-center gap-4 max-w-5xl bg-bg-soft border border-divider rounded-xl p-5 mb-4">
        <div className="flex-1 text-center">
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide mb-2">FE</div>
          <div className="text-base text-text font-semibold">클라이언트</div>
        </div>
        <div className="flex flex-col items-center gap-1 text-text-muted">
          <div className="text-sm">→</div>
          <div className="text-xs font-semibold">Request</div>
          <div className="text-sm">←</div>
          <div className="text-xs font-semibold">Response</div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide mb-2">BE</div>
          <div className="text-base text-text font-semibold">서버</div>
        </div>
      </div>

      {/* Process Flow Diagram — Horizontal */}
      <div className="grid grid-cols-5 gap-2 max-w-5xl items-stretch">
        {/* Step 1 */}
        <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
          <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">1</span>
          <div className="text-sm text-text leading-snug flex-1">
            FE 사용자가 "카피 생성" 클릭
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
          <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">2</span>
          <div className="text-sm text-text leading-snug flex-1">
            HTTP 요청 발송
            <br />
            <code className="text-accent font-semibold text-xs break-all">POST /api/generate</code>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
          <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">3</span>
          <div className="text-sm text-text leading-snug flex-1">
            BE 요청 처리
            <br />
            <span className="text-text-sub text-xs">(OpenAI 호출)</span>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
          <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">4</span>
          <div className="text-sm text-text leading-snug flex-1">
            HTTP 응답
            <br />
            <code className="text-success font-semibold text-xs">200 OK</code>
          </div>
        </div>

        {/* Step 5 */}
        <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
          <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">5</span>
          <div className="text-sm text-text leading-snug flex-1">
            FE 화면에 카피 3개 표시
          </div>
        </div>
      </div>

      {/* Aside note with D-053 explanation */}
      <aside className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-4xl mt-2">
        <p className="text-sm text-text leading-relaxed">
          HTTP 메서드 4가지(GET/POST/PUT/DELETE) 중 본 학습은 주로 POST 사용. 데이터를 <strong>보내고 응답받는</strong> 패턴.
        </p>
      </aside>
    </div>
  );
}
