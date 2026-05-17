// Source: lectures/S1/lecture.md lines 385-397
// Type: example (거짓 패턴 3 — 출처 조작, 위험도 경량)
// D-035: emoji "🟢" 제거  "위험도: 경량" 텍스트
// D-036: 시각 마커 — border-l-4 + grid 라벨 정렬
// D-040: inline custom (s29/s30과 동일 구조, 색상만 success)
// Fix: title 옆에 큰 number "03" 추가 (시각 균형)

export default function S1TheoryC3FakeSource() {
  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-success rounded-full" />
        <span className="text-success text-sm font-semibold tracking-wider uppercase">
          거짓 패턴 3 · 위험도: 경량
        </span>
      </div>

      {/* Title + 큰 number — 좌우 균형 */}
      <div className="grid grid-cols-[auto_1fr] gap-6 items-center mb-4">
        <span
          className="font-bold tracking-tight text-success leading-[0.85] tabular-nums opacity-70"
          style={{ fontSize: 'clamp(72px, 9vw, 120px)' }}
        >
          03
        </span>
        <h2 className="text-5xl font-bold tracking-tight text-text leading-[1.1]">
          출처 조작
        </h2>
      </div>

      <p className="text-xl font-medium text-text-sub tracking-tight leading-relaxed mb-6">
        AI는 URL이나 출판물 이름을 가공한다. 가장 들키기 쉬운 패턴이다.
      </p>

      {/* AI 답변 예시 — code block */}
      <div className="rounded-2xl border-l-4 border-success bg-bg-soft p-5 mb-5 max-w-5xl">
        <div className="text-success text-xs font-semibold tracking-wider uppercase mb-3">
          AI가 만든 출처
        </div>
        <p className="text-base text-text leading-relaxed mb-4">
          https://kpma.or.kr/research/2023-pm-survey
        </p>
        <ul className="flex flex-col gap-2 text-sm text-text-sub leading-relaxed">
          <li className="grid grid-cols-[20px_1fr] gap-2">
            <span className="text-success font-bold">→</span>
            <span>클릭하면 404 또는 무관한 페이지</span>
          </li>
        </ul>
      </div>

      {/* 회피 */}
      <div className="grid grid-cols-[80px_1fr] gap-4 items-start max-w-5xl">
        <span className="text-accent bg-bg-soft border border-accent text-xs font-semibold tracking-wider uppercase rounded-xl px-2 py-1 text-center">
          처방
        </span>
        <p className="text-base font-medium text-text tracking-tight leading-relaxed pt-1">
          <span className="highlight-mark">클릭만 하면 즉시 들킨다.</span> 출처 검증의 1단계가 "출처 클릭"인 이유가 여기에 있다.
        </p>
      </div>
    </>
  );
}
