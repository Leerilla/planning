// Source: lectures/S7/lecture.md lines 419-459
// Type: example, 2-area inline JSX (명령 비교 + 시드 6 보고서)
// Profile: hierarchical, simulation, balanced

export default function Slide36({ deckMeta }) {
  return (
    <div className="w-full h-full bg-bg flex flex-col gap-6 p-7 justify-center">
      {/* Header marker */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-text-sub uppercase tracking-wider">
          자료 7 · §3-C
        </span>
        <span className="text-xs font-semibold text-accent uppercase tracking-wider">
          검증 명령 + 보고서 예시
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text leading-tight">
        시나리오 검증 명령
      </h2>

      {/* Command comparison grid */}
      <div className="grid grid-cols-2 gap-4 max-w-5xl">
        {/* Left: 자료 6 prd-reviewer */}
        <div className="border-l-4 border-divider bg-bg-soft rounded-r-md px-5 py-4">
          <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-2">
            자료 6 prd-reviewer (코드 단위)
          </p>
          <pre className="bg-bg border border-divider rounded-md p-3 text-sm whitespace-pre-line text-text">
{`@prd-reviewer src/components/InputForm.tsx를 검토해줘`}
          </pre>
        </div>

        {/* Right: 자료 7 scenario-verifier */}
        <div className="border-l-4 border-accent bg-bg-soft rounded-r-md px-5 py-4">
          <p className="text-accent font-semibold text-xs uppercase tracking-wider mb-2">
            자료 7 scenario-verifier (시나리오 단위)
          </p>
          <pre className="bg-bg border border-divider rounded-md p-3 text-sm whitespace-pre-line text-text">
{`@scenario-verifier 다음 시나리오를 검증해줘:

"셀러가 카피 입력 화면에 상품 사진과
 키워드 5개를 입력하고 '카피 생성' 버튼을 클릭하면
 결과 화면에 차별화 카피 3개가 표시된다"

docs/prd.md를 읽고 현재 코드가 이 시나리오를
처음부터 끝까지 동작시킬 수 있는지 점검해줘.`}
          </pre>
        </div>
      </div>

      {/* Seed 6 report example */}
      <div className="mt-4 max-w-5xl">
        <p className="text-accent font-semibold text-xs uppercase tracking-wider mb-2">
          시드 6번 첫 검증 후 보고서
        </p>
        <div className="bg-bg-soft border border-divider rounded-md p-4 grid grid-cols-1 gap-3">
          {/* Row 1: 통과 여부 */}
          <div className="border-l-4 border-success bg-success-soft rounded-r px-4 py-2">
            <p className="text-success font-bold text-xs mb-1">[시나리오 통과 여부]</p>
            <p className="text-sm text-text">부분 통과</p>
          </div>

          {/* Row 2: 막힘 지점 */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r px-4 py-2">
            <p className="text-accent font-bold text-xs mb-2">[막힘 지점]</p>
            <ul className="text-sm text-text-sub space-y-1">
              <li>• 단계 1 (입력): src/components/InputForm.tsx에서 정상 동작</li>
              <li>• 단계 2 (라우팅): src/app/page.tsx의 onSubmit이 &apos;/result&apos;로 이동하지만 입력값을 query로 안 넘김</li>
              <li>• 단계 3 (결과 표시): src/app/result/page.tsx가 입력값을 받지 못해 빈 화면 표시</li>
            </ul>
          </div>

          {/* Row 3: 수정 제안 */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r px-4 py-2">
            <p className="text-accent font-bold text-xs mb-2">[수정 제안]</p>
            <ol className="text-sm text-text-sub space-y-1">
              <li>1. page.tsx의 onSubmit에 router.push 시 query 파라미터 추가</li>
              <li>2. result/page.tsx에서 useSearchParams로 입력값 수신</li>
              <li>3. 수신한 입력값을 OpenAI API 호출에 전달</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
