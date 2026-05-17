// Source: lectures/S1/lecture.md lines 507-525
// Type: example (시드 활용 가이드 — 복잡도 + 작업자 + 변형)
// D-035: emoji 0건
// D-040: inline 3-area (복잡도 정렬 + 작업자 가이드 + 변형 3건)

export default function S1ActivitySeedsGuide() {
  // 복잡도 정렬: 5 < 1 < 2 < 3 < 6 < 4
  const complexityOrder = ['5', '1', '2', '3', '6', '4'];

  const audience = [
    { label: '비개발자', recommendation: '1번 또는 5번', tone: 'good' },
    { label: '주니어 개발자', recommendation: '어느 것도 가능', tone: 'neutral' },
    { label: '4번 (최난도)', recommendation: '멀티모달 LLM API + 데이터 저장 필요', tone: 'warning' },
  ];

  const transforms = [
    { type: '페르소나 변형', before: '5-30인 스타트업 PM', after: '10-50인 컨설팅 회사의 컨설턴트' },
    { type: '상황 변형', before: '줌 회의', after: '1:1 인터뷰 녹음' },
    { type: '카테고리 변형', before: '회의록 정리', after: '강의 영상 요약' },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          시드 활용 가이드
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        시드는 출발점이지 종착점이 아니다
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5">
        그대로 가져가지 않아도 된다. 페르소나·상황·카테고리 변형이 가능하다.
      </p>

      {/* 복잡도 정렬 — 가로 비교 */}
      <div className="mb-5 max-w-5xl">
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
          복잡도 순위 (낮음 → 높음)
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {complexityOrder.map((num, i) => (
            <span key={num} className="flex items-center gap-2">
              <span className={`inline-flex items-center justify-center w-9 h-9 rounded-xl text-base font-bold tabular-nums ${
                num === '4' ? 'border-2 border-danger text-danger bg-danger-soft' :
                num === '5' ? 'border-2 border-success text-success bg-success-soft' :
                'border border-divider text-text bg-bg-soft'
              }`}>
                {num}
              </span>
              {i < complexityOrder.length - 1 ? (
                <span className="text-text-muted text-sm font-bold">{'<'}</span>
              ) : null}
            </span>
          ))}
        </div>
      </div>

      {/* 작업자 가이드 + 변형 — 2-col grid */}
      <div className="grid grid-cols-2 gap-6 max-w-5xl">
        {/* 좌: 작업자 가이드 */}
        <div>
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-3">
            작업자 가이드
          </div>
          <ul className="flex flex-col gap-2">
            {audience.map((a, i) => {
              const styles = {
                good: { border: 'border-success', bg: 'bg-success-soft', text: 'text-success' },
                warning: { border: 'border-danger', bg: 'bg-danger-soft', text: 'text-danger' },
                neutral: { border: 'border-divider', bg: 'bg-bg-soft', text: 'text-text-sub' },
              }[a.tone];
              return (
                <li
                  key={i}
                  className={`rounded-xl border-l-4 ${styles.border} ${styles.bg} p-3`}
                >
                  <div className={`${styles.text} text-xs font-semibold tracking-wider uppercase mb-1`}>
                    {a.label}
                  </div>
                  <div className="text-sm font-medium text-text tracking-tight leading-snug">
                    {a.recommendation}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 우: 변형 가이드 */}
        <div>
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-3">
            시드 변형 (3가지)
          </div>
          <ul className="flex flex-col gap-2">
            {transforms.map((t, i) => (
              <li key={i} className="rounded-xl border border-divider bg-bg-soft p-3">
                <div className="text-accent text-xs font-semibold tracking-wider uppercase mb-1">
                  {t.type}
                </div>
                <div className="grid grid-cols-[1fr_20px_1fr] gap-2 items-center text-xs leading-snug">
                  <span className="text-text-sub">{t.before}</span>
                  <span className="text-accent font-bold text-center">→</span>
                  <span className="text-text font-semibold">{t.after}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
