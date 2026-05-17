// Source: lectures/S8/captures/lecture.md lines 97-112 (#### 안티패턴 vs 분리 배포)
// Type: example
// D-050: lecture.md 원문 보존 + D-051: pre 블록 text-xs 이상

export default function S8TheoryC1AntiVsSplit() {
  return (
    <div className="flex flex-col gap-8 h-full justify-center max-w-5xl">
      {/* Header marker + label */}
      <div className="flex items-baseline gap-3">
        <span className="h-1 w-12 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          이론 1 · 안티패턴 비교
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-text">안티패턴 vs 분리 배포</h2>

      {/* 2-section vertical comparison */}
      <div className="flex flex-col gap-6 max-w-4xl">

        {/* Section 1: Antipattern */}
        <div className="flex flex-col gap-3">
          <label className="text-warning font-bold text-sm uppercase tracking-widest">
            안티패턴
          </label>
          <pre className="bg-warning-soft border-l-4 border-warning rounded-r-xl px-5 py-4 text-sm whitespace-pre-line text-text leading-relaxed overflow-x-auto">
{`"OpenAI API 키를 FE 코드에 넣고
 .env.local로 관리하면 안전하지 않은가"
→ .env.local의 NEXT_PUBLIC_* 변수는 브라우저로 노출됨
→ 위험`}
          </pre>
        </div>

        {/* Section 2: Split Deploy */}
        <div className="flex flex-col gap-3">
          <label className="text-accent font-bold text-sm uppercase tracking-widest">
            분리 배포
          </label>
          <pre className="bg-accent-soft border-l-4 border-accent rounded-r-xl px-5 py-4 text-sm whitespace-pre-line text-text leading-relaxed overflow-x-auto">
{`"API 키는 BE에만 둔다.
 FE는 BE의 엔드포인트에 요청하고,
 BE가 LLM을 호출한다"`}
          </pre>
        </div>

      </div>
    </div>
  );
}
