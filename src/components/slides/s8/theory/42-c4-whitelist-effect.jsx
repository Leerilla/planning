// Source: lectures/S8/captures/lecture.md L549-561 (자동 매핑, process ASCII flow)
// Type: ProcessSlide
// D-051: pre text-sm (12px minimum)

export default function S8TheoryC4WhitelistEffect() {
  return (
    <div className="flex flex-col gap-6 h-full justify-center">
      {/* Header marker + label */}
      <div className="flex items-baseline gap-3">
        <span className="h-1 w-12 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          이론 4 · 화이트리스트 효과
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text">화이트리스트 정책의 효과</h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub max-w-4xl leading-relaxed mb-2">
        허용 도메인 명시 → 다른 도메인 자동 차단 → BE 자원 보호
      </p>

      {/* Pre block with flow */}
      <pre className="bg-bg-soft border border-divider rounded-xl p-5 text-sm whitespace-pre-line max-w-4xl text-text overflow-x-auto">
{`허용 도메인 정의:
- https://myapp.vercel.app (배포된 FE)
- http://localhost:3000 (로컬 개발)
       ↓
다른 도메인에서 호출 시도
       ↓
브라우저가 자동 차단
       ↓
본인 BE 자원 보호`}
      </pre>
    </div>
  );
}
