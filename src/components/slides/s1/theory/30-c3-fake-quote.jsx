// Source: lectures/S1/lecture.md lines 369-383
// Type: example (거짓 패턴 2 — 가짜 인용, 위험도 중간)
// D-035: emoji "🟡" 제거  "위험도: 중간" 텍스트
// D-036: 시각 마커 — border-l-4 + grid 라벨 정렬
// D-040: inline custom (s29와 동일 구조, 색상만 warning)
// Fix: title 옆에 큰 number "02" 추가 (시각 균형)

export default function S1TheoryC3FakeQuote() {
  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-warning rounded-full" />
        <span className="text-warning text-sm font-semibold tracking-wider uppercase">
          거짓 패턴 2 · 위험도: 중간
        </span>
      </div>

      {/* Title + 큰 number — 좌우 균형 */}
      <div className="grid grid-cols-[auto_1fr] gap-6 items-center mb-4">
        <span
          className="font-bold tracking-tight text-warning leading-[0.85] tabular-nums opacity-70"
          style={{ fontSize: 'clamp(72px, 9vw, 120px)' }}
        >
          02
        </span>
        <h2 className="text-5xl font-bold tracking-tight text-text leading-[1.1]">
          가짜 인용
        </h2>
      </div>

      <p className="text-xl font-medium text-text-sub tracking-tight leading-relaxed mb-6">
        AI는 유명인의 발언을 그럴듯하게 만들 수 있다. 검증이 가장 어려운 패턴이다.
      </p>

      {/* AI 답변 예시 — code block */}
      <div className="rounded-2xl border-l-4 border-warning bg-bg-soft p-5 mb-5 max-w-5xl">
        <div className="text-warning text-xs font-semibold tracking-wider uppercase mb-3">
          AI 답변 예시
        </div>
        <p className="text-base text-text leading-relaxed mb-4">
          "Marc Andreessen이 2010년에 Product-Market Fit을 다음과 같이 정의했다..."
        </p>
        <ul className="flex flex-col gap-2 text-sm text-text-sub leading-relaxed">
          <li className="grid grid-cols-[20px_1fr] gap-2">
            <span className="text-warning font-bold">→</span>
            <span>인용된 사람이 유명할수록 의심하지 않게 되는 함정</span>
          </li>
        </ul>
      </div>

      {/* 회피 */}
      <div className="grid grid-cols-[80px_1fr] gap-4 items-start max-w-5xl">
        <span className="text-success bg-success-soft border border-success text-xs font-semibold tracking-wider uppercase rounded-xl px-2 py-1 text-center">
          회피
        </span>
        <p className="text-base font-medium text-text tracking-tight leading-relaxed pt-1">
          가짜 인용을 만나면 <span className="highlight-mark">인용을 그냥 빼는 것이 안전하다.</span> 1차 가설은 인용으로 강화되지 않고 페르소나의 진짜 목소리로 강화된다.
        </p>
      </div>
    </>
  );
}
