// Source: lectures/S7/lecture.md L736-751 (3-2. scenario-verifier 첫 호출)
// Type: example (inline JSX — 명시 호출 프롬프트)
// S7 T16d (2026-05-25): 강사 요구 — pre 우측 / aside 좌측 (#19와 동일 패턴)
//                       aside 한 줄 → 의미 분해 3줄 (A3 한 줄 footer 금지 충족)

export default function S7Activity_3_2_FirstCall() {
  return (
    <>
      <div className="flex items-center gap-3 mb-2 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-2 · 첫 호출
        </span>
      </div>

      <h2 className="text-2xl font-bold text-text leading-snug mb-1">
        3-2. scenario-verifier 첫 호출
      </h2>

      <p className="text-xs text-text-sub mb-3 max-w-4xl leading-snug">
        <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">
          @scenario-verifier
        </code>{' '}
        명시 호출 + 시나리오 +{' '}
        <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">
          docs/prd.md
        </code>{' '}
        점검 위임
      </p>

      <div className="grid grid-cols-[280px_1fr] gap-3 max-w-5xl">
        <aside className="border-l-4 border-accent bg-accent-soft rounded-r px-4 py-3 self-start">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
            명시 호출의 의미
          </p>
          <ul className="text-xs text-text leading-snug space-y-1">
            <li>- <code className="text-accent">@scenario-verifier</code> 직접 호출</li>
            <li>- 자동 트리거 X (작업자 시점)</li>
            <li>- 호출 시점: 빌드 완료 후</li>
            <li>- 입력: 시나리오 1개 + docs/prd.md 위임</li>
          </ul>
        </aside>

        <pre className="bg-bg border border-divider rounded px-4 py-3 text-xs whitespace-pre-wrap leading-snug text-text overflow-auto">
{`@scenario-verifier 다음 시나리오를 검증해줘:

"셀러가 카피 입력 화면에 상품 사진과 키워드 5개를 입력하고
 '카피 생성' 버튼을 클릭하면 결과 화면에 차별화 카피 3개가
 표시되고, 복사 버튼을 클릭하면 카피 1개가 클립보드에 복사된다"

docs/prd.md를 읽고 현재 코드가 이 시나리오를
처음부터 끝까지 동작시킬 수 있는지 점검해줘.`}
        </pre>
      </div>
    </>
  );
}
