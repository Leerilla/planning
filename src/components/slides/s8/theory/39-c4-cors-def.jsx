// Source: lectures/S8/captures/lecture.md L504-520 (자동 매핑, concept 정의)
// Type: ConceptSlide
// D-053: CORS (Cross-Origin Resource Sharing) 정식 정의 inline
// S8 T19c (2026-05-25): 강사 요구 — 높이 축소 / 밀집도 강화

export default function S8TheoryC4CORSDef() {
  return (
    <div className="flex flex-col gap-3 h-full justify-center">
      <div className="flex items-baseline gap-3">
        <span className="h-1 w-12 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          이론 4 · 정의
        </span>
      </div>

      <h2 className="text-2xl font-bold text-text leading-snug">CORS의 정의</h2>

      <p className="text-sm text-text-sub max-w-4xl leading-snug">
        <strong className="text-accent">CORS (Cross-Origin Resource Sharing)</strong>: 서로 다른 도메인 간 통신을 <em>제한</em>하는 브라우저 보안 정책.
      </p>

      <pre className="bg-bg-soft border border-divider rounded-xl px-4 py-3 text-xs leading-snug whitespace-pre-line max-w-4xl text-text overflow-x-auto">
{`도메인이 다름:
- FE: myapp.vercel.app
- BE: myapp-production.up.railway.app
       ↓
브라우저가 통신 차단
       ↓
"blocked by CORS policy" 에러`}
      </pre>

      <aside className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-4 py-2.5 max-w-4xl">
        <p className="text-xs text-text leading-snug">
          2 챕터에서 다룬 "도메인" 개념과 직접 연결. 도메인이 다르면 CORS 정책이 발동.
        </p>
      </aside>
    </div>
  );
}
