// Source: lectures/S7/lecture.md L926-936 (#### prd-reviewer와 책임 분리 + Manyfast MCP 사용 안 함 + 검증은 단발이 아닌 루프)
// Type: concept (3-col tips)

export default function S7ActivityTips4Content() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 Tip 4 · scenario-verifier
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text mb-6">
        scenario-verifier 팁
      </h2>

      <div className="flex flex-col gap-3 max-w-5xl">
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">
            Tip 제목
          </div>
          <p className="text-base text-text leading-relaxed">
            prd-reviewer와 책임 분리
          </p>
        </div>

        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <p className="text-base text-text leading-relaxed">
            prd-reviewer는 코드 단위(자동), <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">scenario-verifier</code>는 시나리오 단위(명시 호출). Agent 설계 단일 책임 원칙.
          </p>
        </div>

        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">
            Tip 제목
          </div>
          <p className="text-base text-text leading-relaxed">
            Manyfast MCP 사용 안 함
          </p>
        </div>

        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <p className="text-base text-text leading-relaxed">
            <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">docs/prd.md</code>를 Read로 직접 읽음. 외부 MCP 의존 없이 작동. 자료 4-6과 일관.
          </p>
        </div>

        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">
            Tip 제목
          </div>
          <p className="text-base text-text leading-relaxed">
            검증은 단발이 아닌 루프
          </p>
        </div>

        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <p className="text-base text-text leading-relaxed">
            검증 → 수정 → 재검증을 통과까지 반복. 한 번 호출하고 결과 그대로 수용 금지.
          </p>
        </div>
      </div>
    </>
  );
}
