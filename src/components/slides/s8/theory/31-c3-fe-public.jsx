// Source: lectures/S8/captures/lecture.md L418-430 (#### 2종류: FE 공개 정보)
// Type: concept
// D-050: lecture.md 원문 보존 + D-054: NEXT_PUBLIC_API_URL accent code + aside

export default function S8TheoryC3FePublic() {
  return (
    <div className="flex flex-col gap-6 justify-center h-full max-w-4xl">
      {/* Header marker + label */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-lg">3</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 3 · 환경 변수 2종
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text mb-2">
        2종류: FE 공개 정보
      </h2>

      {/* Subtitle with code */}
      <p className="text-base text-text-sub leading-relaxed">
        <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
          NEXT_PUBLIC_API_URL
        </code> 같은 공개 정보
      </p>

      {/* Content pre-block */}
      <pre className="bg-bg-soft border border-divider rounded-xl p-4 text-sm whitespace-pre-line max-w-3xl text-text">
{`- Vercel 대시보드 Environment Variables에 등록
- NEXT_PUBLIC_ 접두사 = 브라우저로 노출되는 변수
- 비밀 정보는 절대 이 접두사로 두지 않음`}
      </pre>

      {/* Aside: 공개의 의미 */}
      <aside className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-6 py-3 max-w-3xl">
        <p className="text-sm text-text leading-relaxed">
          공개라고 해서 적어도 된다는 뜻은 아님. 공개되어도 무관한 것만 둔다. BE URL은 공개되어도 무관 (어차피 누구나 호출 시도 가능).
        </p>
      </aside>
    </div>
  );
}
