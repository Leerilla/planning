// Source: lectures/S8/captures/lecture.md (#### 셋업 *시점*이 중요한 이유)
// Type: comparison
// Pattern: 2-block pre + aside
// D-050: lecture.md 원문 보존 (다음단계 직전 vs 발송 후)

export default function S8TheoryC5SetupTiming() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 5 · 셋업 시점
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        셋업 시점이 중요한 이유
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-6 max-w-4xl">
        다음 단계 직전 vs 발송 후
      </p>

      {/* Comparison Boxes */}
      <div className="flex flex-col gap-4 max-w-5xl">
        {/* Box 1: Before */}
        <div>
          <div className="text-accent font-bold text-sm uppercase tracking-widest mb-2">
            [다음 단계(노출) 직전 셋업]
          </div>
          <div className="bg-accent-soft border-l-4 border-accent rounded-r-xl px-5 py-4">
            <pre className="text-sm whitespace-pre-line text-text font-normal">
              {`사용자 진입 → 모든 행동 기록
       ↓
다음 사이클의 의사결정 근거 확보`}
            </pre>
          </div>
        </div>

        {/* Box 2: After */}
        <div>
          <div className="text-warning font-bold text-sm uppercase tracking-widest mb-2">
            [다음 단계 발송 후 셋업]
          </div>
          <div className="bg-warning-soft border-l-4 border-warning rounded-r-xl px-5 py-4">
            <pre className="text-sm whitespace-pre-line text-text font-normal">
              {`사용자 진입 → 행동 기록 X
       ↓
그 사용자 데이터 영원히 회수 불가
       ↓
"왜 안 썼는가" 추측만 가능`}
            </pre>
          </div>
        </div>
      </div>

      {/* Aside */}
      <div className="mt-4 border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-5xl">
        <p className="text-sm text-text leading-relaxed">
          1명의 사용자가 1개 세션을 만들면 그 세션은 한 번뿐. 셋업 안 된 상태로 흘려보내면 평생 못 본다.
        </p>
      </div>
    </>
  );
}
