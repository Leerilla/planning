// Source: lectures/S7/lecture.md L752-787 (3-2. 시드6 첫 보고서 + 3단 구조)
// Type: example (inline JSX — 시나리오 검증 보고서)

export default function S7Activity_3_2_FirstReport() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-2 · 시드6 첫 보고서
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text mb-1">
        시드 6번 scenario-verifier 첫 보고서
      </h2>

      <p className="text-sm text-text-sub mb-6">
        3단 구조: 통과 여부 / 막힘 지점 / 수정 제안
      </p>

      <div className="flex flex-col gap-5 max-w-5xl">
        {/* Section 1: 통과 여부 */}
        <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-5 py-3">
          <div className="text-warning font-bold text-sm mb-1">
            [시나리오 통과 여부]
          </div>
          <div className="text-text text-base font-medium">
            부분 통과
          </div>
        </div>

        {/* Section 2: 막힘 지점 */}
        <div className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-5 py-3">
          <div className="text-text font-bold text-sm mb-2">
            [막힘 지점]
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm text-text leading-relaxed">
              단계 1 (입력): <code className="text-accent font-semibold bg-bg px-1.5 py-0.5 rounded text-xs">src/components/InputForm.tsx</code> 정상 동작 (통과)
            </div>
            <div className="text-sm text-text leading-relaxed">
              단계 2 (생성): <code className="text-accent font-semibold bg-bg px-1.5 py-0.5 rounded text-xs">src/app/api/generate/route.ts</code>에서 OpenAI 응답을 JSON.parse 실패 시 에러 처리 누락
            </div>
            <div className="text-sm text-text leading-relaxed">
              단계 3 (복사): <code className="text-accent font-semibold bg-bg px-1.5 py-0.5 rounded text-xs">src/components/CopyButton.tsx</code>에서 navigator.clipboard 호출만 있고 실패 시 fallback 없음
            </div>
          </div>
        </div>

        {/* Section 3: 수정 제안 */}
        <div className="border-l-4 border-success bg-success-soft rounded-r-xl px-5 py-3">
          <div className="text-success font-bold text-sm mb-2">
            [수정 제안]
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm text-text leading-relaxed">
              1. route.ts에 try-catch와 에러 응답 추가
            </div>
            <div className="text-sm text-text leading-relaxed">
              2. CopyButton에서 clipboard 실패 시 textarea fallback
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
