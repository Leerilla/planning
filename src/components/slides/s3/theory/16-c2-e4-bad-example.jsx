// Source: lectures/S3/lecture.md lines 246-252 (요소 4 잘못된 예시 3-row 비교)
// Type: comparison (BAD/이유 inline 표)

export default function S3TheoryC2E4BadExample() {
  const rows = [
    { bad: '"사용자 만족도 향상"', reason: '측정 방법 없음' },
    { bad: '"더 빠른 응답"', reason: '얼마나 빠른지 기준 없음' },
    { bad: '"많은 셀러가 사용"', reason: '"많은"의 기준 없음' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          5요소 · 4 — 잘못된 성공 지표
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        측정 불가능한 표현은 지표가 아니다
      </h2>

      <p className="text-base text-text-sub mb-6 max-w-3xl">
        지표는 Before·After·측정 방법 셋이 모두 갖춰져야 한다.
      </p>

      <div className="rounded border border-divider overflow-hidden max-w-4xl">
        <div className="grid grid-cols-[1fr_1fr] bg-bg-soft border-b border-divider">
          <div className="px-5 py-3 text-base font-semibold text-text-sub">
            잘못된 지표
          </div>
          <div className="px-5 py-3 text-base font-semibold text-text-sub border-l border-divider">
            왜 안 되는가
          </div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_1fr] ${i < rows.length - 1 ? 'border-b border-divider' : ''}`}
          >
            <div className="px-5 py-4 text-base text-text font-medium">
              {r.bad}
            </div>
            <div className="px-5 py-4 text-base text-text-sub border-l border-divider">
              {r.reason}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
