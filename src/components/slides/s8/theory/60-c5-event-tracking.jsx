// Source: lectures/S8/captures/lecture.md (#### 이벤트 추적 — PRD 가설 검증)
// Type: concept, emphasis: key-message
// Pattern: intro + 2 blockquote boxes
// D-050: lecture.md 원문 보존 (PRD 가설 예시 + 이벤트 추적 없으면)

export default function S8TheoryC5EventTracking() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 5 · 도구 3 · 이벤트 추적
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        이벤트 추적 — PRD 가설 검증
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-4 max-w-4xl">
        <span className="font-bold text-text">답하는 질문</span>: <em className="text-accent">"PRD 가설이 실제로 통과하는가?"</em>
      </p>

      {/* Intro */}
      <p className="text-base text-text mb-4 max-w-4xl leading-relaxed">
        자료 2-3에서 만든 PRD 핵심 가설을 실제 사용자 행동 데이터로 검증.
      </p>

      {/* Box 1: PRD 가설 예시 */}
      <div className="bg-accent-soft border-l-4 border-accent rounded-r-xl px-5 py-4 max-w-3xl mb-3">
        <div className="text-accent font-bold text-xs uppercase tracking-widest mb-2">
          시드 6번 PRD 가설 예시:
        </div>
        <pre className="text-sm whitespace-pre-line text-text font-normal">
          {`"카피 작성 시간 1-2시간 → 5분 이내"
"카피 후보 사용률 70% 이상"`}
        </pre>
      </div>

      {/* Box 2: 이벤트 추적 없으면 */}
      <div className="bg-warning-soft border-l-4 border-warning rounded-r-xl px-5 py-4 max-w-3xl">
        <div className="text-warning font-bold text-xs uppercase tracking-widest mb-2">
          이벤트 추적 없으면:
        </div>
        <pre className="text-sm whitespace-pre-line text-text font-normal">
          {`사용자 진입 → 사용 → 떠남
       ↓
가설이 통과했는가? 모름
       ↓
PRD 갱신 근거 없음`}
        </pre>
      </div>
    </>
  );
}
