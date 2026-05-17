// Source: lectures/S7/lecture.md L736-751 (3-2. scenario-verifier 첫 호출)
// Type: example (inline JSX — 명시 호출 프롬프트)

export default function S7Activity_3_2_FirstCall() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-2 · 첫 호출
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text mb-2">
        3-2. scenario-verifier 첫 호출
      </h2>

      <p className="text-base text-text-sub mb-4">
        <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
          @scenario-verifier
        </code>{' '}
        명시 호출 + 시나리오 + <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">docs/prd.md</code> 점검 위임
      </p>

      <pre className="bg-bg border border-divider rounded-xl p-4 text-sm whitespace-pre-wrap leading-relaxed max-w-4xl text-text">
{`@scenario-verifier 다음 시나리오를 검증해줘:

"셀러가 카피 입력 화면에 상품 사진과 키워드 5개를 입력하고
 '카피 생성' 버튼을 클릭하면 결과 화면에 차별화 카피 3개가
 표시되고, 복사 버튼을 클릭하면 카피 1개가 클립보드에 복사된다"

docs/prd.md를 읽고 현재 코드가 이 시나리오를
처음부터 끝까지 동작시킬 수 있는지 점검해줘.`}
      </pre>

      <aside className="mt-4 border-l-4 border-divider bg-bg-soft rounded-r-xl px-6 py-3 max-w-4xl">
        <p className="text-sm text-text leading-relaxed">
          명시 호출(@scenario-verifier) — 자동이 아닌 작업자 호출 시점.
        </p>
      </aside>
    </>
  );
}
