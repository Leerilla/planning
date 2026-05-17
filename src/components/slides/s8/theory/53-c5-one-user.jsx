// Source: lectures/S8/captures/lecture.md (#### 5️⃣ 분석 도구 — 1명 사용자)
// Type: comparison
// Pattern: 2-section side-by-side pre blocks

export default function S8TheoryC5OneUser() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 5 · 1명 사용자
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        1명 사용자 = 회수 불가능한 자산
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-6 max-w-4xl">
        셋업 안 한 상태 vs 셋업 한 상태
      </p>

      {/* Two-Section Comparison */}
      <div className="flex flex-col gap-4 max-w-5xl w-full">
        {/* Section 1: Without Setup */}
        <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-5 py-4">
          <label className="text-warning font-bold text-sm uppercase tracking-widest mb-2 block">
            셋업 안 한 상태
          </label>
          <pre className="bg-bg border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text leading-relaxed font-sans">
사용자 1명 진입 → 사용 → 떠남
       ↓
그 1명이 어디서 막혔는지 영원히 모름
       ↓
다음 사용자가 같은 곳에서 막혀도
같은 문제 반복
          </pre>
        </div>

        {/* Section 2: With Setup */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <label className="text-accent font-bold text-sm uppercase tracking-widest mb-2 block">
            셋업 한 상태
          </label>
          <pre className="bg-bg border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text leading-relaxed font-sans">
사용자 1명 진입 → 모든 행동 자동 기록
       ↓
나중에 세션 영상 재생 가능
       ↓
막힌 지점 발견 → 수정 → 다음 사용자에 적용
          </pre>
        </div>
      </div>
    </>
  );
}
