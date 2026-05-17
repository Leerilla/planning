// Source: lectures/S6/lecture.md lines 1161-1169 (#### N-2. /cost 비교)
// Type: example (code snippet + aside meta message)
// Profile: hierarchical / comparison / medium-high / balanced
// Emphasis: default (시나리오 + 코드 예시)

export default function S6ActivityStepNCost() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 N-2 · 비용 비교
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        N-2. /cost 비교
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-6 max-w-4xl">
        본 sprint 자동화 도구 개발 비용 (토큰)을 확인
      </p>

      <pre className="bg-bg-soft border border-divider rounded-md px-6 py-4 mb-6 text-sm font-semibold text-text leading-relaxed overflow-x-auto max-w-4xl">
        <code>/cost</code>
      </pre>

      <div className="mt-6 max-w-4xl border-l-4 border-accent bg-bg-soft px-7 py-5 rounded-r-md">
        <p className="text-sm font-medium text-text leading-relaxed">
          Sub-agent의 컨텍스트 격리 덕분에, 같은 tool을 여러 단계에서 호출해도 각 단계의 토큰 비용이 누적되지 않는다. 이것이 자동화 설계의 핵심 이득이다.
        </p>
      </div>
    </>
  );
}
