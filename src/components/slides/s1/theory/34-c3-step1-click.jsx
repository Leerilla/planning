// Source: lectures/S1/lecture.md lines 414-426
// Type: title + content hybrid (### 섹션 표지 = 1단계 클릭 콘텐츠 자체)
// D-035: emoji 0건
// D-036: accent-bar 3px / dot w-2.5
// D-037: eyebrow + title + body + principle code + warning grid 활용
// Fix: title 옆에 큰 step number "01" 추가 (시각 균형)

export default function S1TheoryC3Step1Click() {
  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          출처 검증 3단계 · Step 1
        </span>
      </div>

      {/* Title + 큰 step number — 좌우 균형 */}
      <div className="grid grid-cols-[auto_1fr] gap-6 items-center mb-6">
        <span
          className="font-bold tracking-tight text-accent leading-[0.85] tabular-nums opacity-70"
          style={{ fontSize: 'clamp(80px, 10vw, 140px)' }}
        >
          01
        </span>
        <h2 className="text-6xl font-bold tracking-tight text-text leading-[1.05]">
          클릭
        </h2>
      </div>

      {/* Lead description */}
      <p className="text-xl font-medium text-text tracking-tight leading-relaxed mb-6 max-w-4xl">
        AI 답변의 인용 또는 링크를 <span className="highlight-mark">직접 클릭한다.</span>
      </p>

      {/* 원칙 — code block */}
      <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-5 mb-6 max-w-5xl">
        <div className="text-accent text-xs font-semibold tracking-wider uppercase mb-3">
          원칙
        </div>
        <p className="text-lg text-text leading-relaxed">
          클릭하지 않은 출처는 없는 것과 같다
        </p>
      </div>

      {/* 함정 grid */}
      <div className="grid grid-cols-[80px_1fr] gap-4 items-start max-w-5xl">
        <span className="text-warning bg-warning-soft border border-warning text-xs font-semibold tracking-wider uppercase rounded-xl px-2 py-1 text-center">
          함정
        </span>
        <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed pt-1">
          AI가 출처를 첨부했다는 사실 자체는 검증 통과 신호가 아니다. 본 적 없는 출처가 거짓일 가능성이 더 높으므로 그것을 <span className="font-bold text-text">우선 클릭한다.</span>
        </p>
      </div>
    </>
  );
}
