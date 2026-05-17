// Source: lectures/S8/captures/lecture.md L1339-1352
// Type: Concept (3-1: CORS 에러 메시지 구조)
// D-054: railway.app / vercel.app / Access-Control-Allow-Origin inline code + accent

export default function S8ActivityStep3ErrorStructure() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 3-1 · 에러 구조
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          3-1. CORS 에러 메시지 구조
        </h1>
        <p className="text-base text-text-sub mb-4 max-w-4xl">
          복사한 에러는 보통 이렇게 생김:
        </p>

        {/* Pre block with error example (warning soft background) */}
        <pre className="bg-warning-soft border-l-4 border-warning rounded-r-xl px-5 py-4 text-sm whitespace-pre-line max-w-4xl text-text leading-relaxed font-inherit">
{`Access to fetch at 'https://...railway.app/api/generate'
from origin 'https://...vercel.app'
has been blocked by CORS policy:
No 'Access-Control-Allow-Origin' header is present...`}
        </pre>

        {/* Subtitle for core info */}
        <h2 className="mt-4 text-base font-semibold text-text-sub mb-3">
          핵심 정보:
        </h2>

        {/* 3 info items with dots */}
        <div className="flex flex-col gap-2 max-w-4xl">
          {/* Item 1 */}
          <div className="flex items-start gap-3 p-3 border border-divider bg-bg-soft rounded-xl">
            <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
            <p className="text-sm text-text">
              <strong className="text-text">어디로 요청</strong>: <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">railway.app</code> (BE)
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3 p-3 border border-divider bg-bg-soft rounded-xl">
            <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
            <p className="text-sm text-text">
              <strong className="text-text">어디서 요청</strong>: <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">vercel.app</code> (FE)
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-3 p-3 border border-divider bg-bg-soft rounded-xl">
            <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
            <p className="text-sm text-text">
              <strong className="text-text">왜 차단</strong>: <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">Access-Control-Allow-Origin</code> 헤더 없음
            </p>
          </div>
        </div>
    </>
  );
}
