// Source: lectures/S8/captures/lecture.md (#### 5️⃣ 챕터 용어 해설)
// Type: terms
// Pattern: 6 terms → 2-col grid (D-052 분할 의무)
// D-050: lecture.md 원문 보존 (용어 정의)
// D-035: emoji 제거 ("5️⃣" → "5️⃣ 챕터" 텍스트로)

export default function S8TheoryC5Terms() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 5 · 용어 해설
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        5️⃣ 챕터 용어 해설
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-6 max-w-4xl">
        6개 어휘 — 본 챕터의 핵심
      </p>

      {/* D-052: 2-col grid for 6 terms */}
      <div className="grid grid-cols-2 gap-4 w-full">
        {/* Left Column - 3 terms */}
        <div className="flex flex-col gap-3">
          {[
            {
              term: 'Microsoft Clarity',
              def: '무료 행동 분석 도구. 세션 리플레이',
            },
            {
              term: 'Sentry',
              def: '에러 자동 수집과 알림 도구',
            },
            {
              term: '이벤트 추적',
              def: '사용자의 특정 행동을 데이터로 기록',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col gap-1 p-4 border border-divider bg-bg-soft rounded-xl">
              <div className="text-sm font-bold text-text mb-1">
                {item.term}
              </div>
              <div className="text-xs text-text-sub leading-relaxed">
                {item.def}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - 3 terms */}
        <div className="flex flex-col gap-3">
          {[
            {
              term: '세션 리플레이',
              def: '사용자 화면을 영상처럼 재생',
            },
            {
              term: '히트맵',
              def: '클릭/스크롤 분포 시각화',
            },
            {
              term: '가설 검증',
              def: 'PRD 가설을 실제 행동 데이터로 측정',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col gap-1 p-4 border border-divider bg-bg-soft rounded-xl">
              <div className="text-sm font-bold text-text mb-1">
                {item.term}
              </div>
              <div className="text-xs text-text-sub leading-relaxed">
                {item.def}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
