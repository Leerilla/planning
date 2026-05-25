// Source: lectures/S7/lecture.md lines 419-459
// Type: example, 2-area inline JSX (명령 비교 + 시드 6 보고서)
// Profile: hierarchical, simulation, balanced
// S7 T15 (2026-05-25): 강사 요구 — 화면 겹침 → 컴팩트화 (gap/p/text/leading 축소)
//                       부수: A5 위반 "자료 6/7" → 학생 친화 표현, D21 위반 "§" 제거

export default function Slide36({ deckMeta }) {
  return (
    <div className="w-full h-full bg-bg flex flex-col gap-3 p-7 justify-center">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          검증 명령 + 보고서 예시
        </span>
      </div>

      <h2 className="text-2xl font-bold text-text leading-snug">
        시나리오 검증 명령
      </h2>

      <div className="grid grid-cols-2 gap-3 max-w-5xl">
        <div className="border-l-4 border-divider bg-bg-soft rounded-r px-4 py-2.5">
          <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-1.5">
            직전 prd-reviewer (코드 단위)
          </p>
          <pre className="bg-bg border border-divider rounded px-3 py-2 text-xs leading-snug whitespace-pre-line text-text">
{`@prd-reviewer src/components/InputForm.jsx를 검토해줘`}
          </pre>
        </div>

        <div className="border-l-4 border-accent bg-bg-soft rounded-r px-4 py-2.5">
          <p className="text-accent font-semibold text-xs uppercase tracking-wider mb-1.5">
            scenario-verifier (시나리오 단위)
          </p>
          <pre className="bg-bg border border-divider rounded px-3 py-2 text-xs leading-snug whitespace-pre-line text-text">
{`@scenario-verifier 다음 시나리오를 검증해줘:

"셀러가 카피 입력 화면에 상품 사진과
 키워드 5개를 입력하고 '카피 생성' 버튼을 클릭하면
 결과 화면에 차별화 카피 3개가 표시된다"

docs/prd.md를 읽고 현재 코드가 이 시나리오를
처음부터 끝까지 동작시킬 수 있는지 점검해줘.`}
          </pre>
        </div>
      </div>

      <div className="mt-1 max-w-5xl">
        <p className="text-accent font-semibold text-xs uppercase tracking-wider mb-1.5">
          예시 보고서 (시드 6번 첫 검증)
        </p>
        <div className="bg-bg-soft border border-divider rounded px-3 py-2 grid grid-cols-1 gap-2">
          <div className="border-l-4 border-success bg-success-soft rounded-r px-3 py-1.5">
            <p className="text-success font-bold text-xs mb-0.5">[시나리오 통과 여부]</p>
            <p className="text-xs text-text leading-snug">부분 통과</p>
          </div>

          <div className="border-l-4 border-accent bg-accent-soft rounded-r px-3 py-1.5">
            <p className="text-accent font-bold text-xs mb-1">[막힘 지점]</p>
            <ul className="text-xs text-text-sub space-y-0.5 leading-snug">
              <li>- 단계 1 (입력): src/components/InputForm.jsx에서 정상 동작</li>
              <li>- 단계 2 (라우팅): src/app/page.jsx의 onSubmit이 &apos;/result&apos;로 이동하지만 입력값을 query로 안 넘김</li>
              <li>- 단계 3 (결과 표시): src/app/result/page.jsx가 입력값을 받지 못해 빈 화면 표시</li>
            </ul>
          </div>

          <div className="border-l-4 border-accent bg-accent-soft rounded-r px-3 py-1.5">
            <p className="text-accent font-bold text-xs mb-1">[수정 제안]</p>
            <ol className="text-xs text-text-sub space-y-0.5 leading-snug">
              <li>1. page.jsx의 onSubmit에 router.push 시 query 파라미터 추가</li>
              <li>2. result/page.jsx에서 useSearchParams로 입력값 수신</li>
              <li>3. 수신한 입력값을 OpenAI API 호출에 전달</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
