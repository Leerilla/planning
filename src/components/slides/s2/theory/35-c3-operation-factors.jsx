// Source: lectures/S2/lecture.md lines 160-164 + NextUnicorn 인용 (팔로우업 50%↑)
// Type: example (inline 2-area — 운영 + 3 요인 통합)
// External ref: nextunicorn.kr insight 23e6cd6df02f25f5
// Fix (2026-05-12): 좌우 비중 동등화 — 동일 컨테이너 + items-stretch

export default function S2TheoryC3OperationFactors() {
  const rules = [
    { tone: 'accent', text: '능동 응답 대기 중 ', bold: '수동 데이터 동시 수집' },
    { tone: 'accent', text: '응답 도착 후 ', bold: '24시간 안 답변 (신뢰 유지)' },
    { tone: 'success', text: '', bold: '팔로우업 3회 이상 → 응답률 50% 이상 상승', highlight: true },
    { tone: 'accent', text: '응답 누적 처리 → 응답자 간 패턴 비교 가능', bold: '' },
  ];

  const factors = [
    { num: '1', title: '시간대', desc: '평일 오전 9-11시 또는 저녁 7-9시' },
    { num: '2', title: '신뢰 표시', desc: '첫 줄 후크 + 짧은 자기소개 + 연결고리' },
    { num: '3', title: '부담 없는 옵션', desc: '15분 통화 / 텍스트 답변 / 5분 설문 중 선택' },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          응답률 운영 + 3 요인
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-5">
        발송 후 시계는 돌고 있다
      </h2>

      {/* 2-area grid — 좌우 동등 (items-stretch + 동일 컨테이너) */}
      <div className="grid grid-cols-2 gap-5 max-w-5xl items-stretch">
        {/* 좌: 운영 룰 */}
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-6 flex flex-col">
          <div className="text-accent text-sm font-semibold tracking-wider uppercase mb-5">
            운영 룰
          </div>
          <ul className="flex flex-col gap-4 flex-1">
            {rules.map((r, i) => {
              const dotColor = r.tone === 'success' ? 'text-success' : 'text-accent';
              return (
                <li
                  key={i}
                  className="grid grid-cols-[24px_1fr] gap-3 items-start"
                >
                  <span className={`${dotColor} font-bold text-xl leading-tight`}>·</span>
                  <p className="text-base font-medium text-text leading-relaxed tracking-tight">
                    {r.text}
                    {r.bold ? (
                      r.highlight ? (
                        <span className="highlight-mark">{r.bold}</span>
                      ) : (
                        <span className="font-bold">{r.bold}</span>
                      )
                    ) : null}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 우: 응답률 3 요인 */}
        <div className="rounded-2xl border-l-4 border-success bg-success-soft p-6 flex flex-col">
          <div className="text-success text-sm font-semibold tracking-wider uppercase mb-5">
            응답률 3 요인 — 메타 가이드라인 반영
          </div>
          <ul className="flex flex-col gap-3 flex-1">
            {factors.map((f) => (
              <li
                key={f.num}
                className="grid grid-cols-[44px_1fr] gap-4 items-center flex-1 p-4 rounded-xl border border-divider bg-bg hover:border-success transition-colors group"
              >
                <span className="text-success text-2xl font-bold tabular-nums tracking-wider">
                  {f.num}
                </span>
                <div>
                  <div className="text-lg font-bold text-text tracking-tight leading-snug">
                    {f.title}
                  </div>
                  <div className="text-sm text-text-sub leading-relaxed tracking-tight mt-1">
                    {f.desc}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 외부 자료 메타 */}
      <div className="absolute top-6 right-8 text-text-muted text-xs tracking-wider">
        참고: NextUnicorn 인용 (팔로우업 부분)
      </div>
    </>
  );
}
