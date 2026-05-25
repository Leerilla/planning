// Source: lectures/S8/captures/lecture.md (#### 셋업 시점이 중요한 이유)
// Type: comparison
// Pattern: 2-block pre + aside
// D-050: lecture.md 원문 보존 (다음단계 직전 vs 발송 후)
// S8 T19e (2026-05-25): 강사 요구 — 높이 축소 / 밀집도 강화

export default function S8TheoryC5SetupTiming() {
  return (
    <>
      <div className="flex items-center gap-3 mb-2">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 5 · 셋업 시점
        </span>
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-text leading-snug mb-1">
        셋업 시점이 중요한 이유
      </h2>

      <p className="text-sm text-text-sub mb-3 max-w-4xl leading-snug">
        다음 단계 직전 vs 발송 후
      </p>

      <div className="flex flex-col gap-2 max-w-5xl">
        {/* Box 1: Before */}
        <div>
          <div className="text-accent font-bold text-xs uppercase tracking-widest mb-1">
            [다음 단계(노출) 직전 셋업]
          </div>
          <div className="bg-accent-soft border-l-4 border-accent rounded-r-xl px-4 py-2.5">
            <pre className="text-xs leading-snug whitespace-pre-line text-text font-normal">
              {`사용자 진입 → 모든 행동 기록
       ↓
다음 사이클의 의사결정 근거 확보`}
            </pre>
          </div>
        </div>

        {/* Box 2: After */}
        <div>
          <div className="text-warning font-bold text-xs uppercase tracking-widest mb-1">
            [다음 단계 발송 후 셋업]
          </div>
          <div className="bg-warning-soft border-l-4 border-warning rounded-r-xl px-4 py-2.5">
            <pre className="text-xs leading-snug whitespace-pre-line text-text font-normal">
              {`사용자 진입 → 행동 기록 X
       ↓
그 사용자 데이터 영원히 회수 불가
       ↓
"왜 안 썼는가" 추측만 가능`}
            </pre>
          </div>
        </div>
      </div>

      <div className="mt-3 border-l-4 border-accent bg-accent-soft rounded-r-xl px-4 py-2.5 max-w-5xl">
        <p className="text-xs text-text leading-snug">
          1명의 사용자가 1개 세션을 만들면 그 세션은 한 번뿐. 셋업 안 된 상태로 흘려보내면 평생 못 본다.
        </p>
      </div>
    </>
  );
}
