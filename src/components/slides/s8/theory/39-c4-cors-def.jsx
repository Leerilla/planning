// Source: lectures/S8/captures/lecture.md L504-520 (자동 매핑, concept 정의)
// Type: ConceptSlide
// D-053: CORS (Cross-Origin Resource Sharing) 정식 정의 inline

export default function S8TheoryC4CORSDef() {
  return (
    <div className="flex flex-col gap-8 h-full justify-center">
      {/* Header marker + label */}
      <div className="flex items-baseline gap-3">
        <span className="h-1 w-12 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          이론 4 · 정의
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text">CORS의 정의</h2>

      {/* Subtitle with D-053 inline definition */}
      <p className="text-base text-text-sub mb-6 max-w-4xl leading-relaxed">
        <strong className="text-accent">CORS (Cross-Origin Resource Sharing)</strong>: 서로 다른 도메인 간 통신을 <em>제한</em>하는 브라우저 보안 정책.
      </p>

      {/* Pre block with flow */}
      <pre className="bg-bg-soft border border-divider rounded-xl p-5 text-sm whitespace-pre-line max-w-4xl text-text overflow-x-auto">
{`도메인이 다름:
- FE: myapp.vercel.app
- BE: myapp-production.up.railway.app
       ↓
브라우저가 통신 차단
       ↓
"blocked by CORS policy" 에러`}
      </pre>

      {/* Aside note */}
      <aside className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-6 py-3 max-w-4xl">
        <p className="text-sm text-text leading-relaxed">
          2 챕터에서 다룬 "도메인" 개념과 직접 연결. 도메인이 다르면 CORS 정책이 발동.
        </p>
      </aside>
    </div>
  );
}
