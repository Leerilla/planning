// Source: lectures/S7/lecture.md L892-898 (#### 시나리오 통과가 동작의 진짜 정의 + E2E 통과 + scenario-verifier 통과 두 증거)
// Type: concept (2-col tips)

export default function S7ActivityTips1Content() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 Tip 1 · 테스트 단계
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text mb-6">
        테스트 단계 팁
      </h2>

      <div className="flex flex-col gap-3 max-w-5xl">
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">
            Tip 제목
          </div>
          <p className="text-base text-text leading-relaxed">
            시나리오 통과가 동작의 진짜 정의
          </p>
        </div>

        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <p className="text-base text-text leading-relaxed">
            화면 떴다고 통과 아님. 사용자가 처음부터 끝까지 흐름 완수해야 통과.
          </p>
        </div>

        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">
            Tip 제목
          </div>
          <p className="text-base text-text leading-relaxed">
            E2E 통과 + scenario-verifier 통과 두 증거
          </p>
        </div>

        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <p className="text-base text-text leading-relaxed">
            E2E는 <span className="italic">실행 증거</span>, <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">scenario-verifier</code>는 <span className="italic">PRD 일치 증거</span>. 두 증거가 모두 있어야 다음 단계.
          </p>
        </div>
      </div>
    </>
  );
}
