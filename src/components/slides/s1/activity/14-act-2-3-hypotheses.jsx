// Source: lectures/S1/lecture.md lines 805-855
// Type: example (활동 2-3 — 핵심 가설 3개)
// D-035: emoji ❌/✅ → BAD/GOOD 라벨

export default function S1Activity_2_3_Hypotheses() {
  const hypotheses = [
    {
      num: '1',
      mapping: '키워드 자연화 부담',
      text: '"1인 스마트스토어 셀러는 키워드를 자연스러운 카피로 바꿔주는 도구에 월 2만원 이상 지불할 의향이 있을 것이다."',
    },
    {
      num: '2',
      mapping: '카테고리별 키워드 트렌드 추적',
      text: '"셀러는 카피 생성보다 카테고리별 키워드 추천에 더 큰 가치를 느낄 것이다."',
    },
    {
      num: '3',
      mapping: 'ROAS 직결 카피 품질 압박',
      text: '"셀러는 AI 자동 작성 전체보다 키워드 제안 + 본인 작성을 더 선호할 것이다."',
    },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-3 · 25분 · 산출물: 검증 가능 가설 3개
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        가설은 직감으로 만들지 않는다
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        검증된 페인포인트 1-2개를 가져와 "<span className="highlight-mark">이 페르소나가 ~할 의향이 있는가</span>"를 물을 수 있는 형태로 변환.
      </p>

      {/* 형식 2가지 + 검증 가능성 비교 — 2-col */}
      <div className="grid grid-cols-2 gap-4 mb-5 max-w-5xl">
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-accent text-xs font-semibold tracking-wider uppercase mb-3">
            가설 형식 2가지
          </div>
          <p className="text-sm font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`형식 1: "이 사람들은 ~할 의향이 있을 것이다"
형식 2: "이 사람들은 ~보다 ~를 더 선호할 것이다"`}
          </p>
        </div>
        <div className="rounded-2xl border border-divider bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-3">
            검증 가능성 비교
          </div>
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-[64px_1fr] gap-3 items-center">
              <span className="text-danger bg-danger-soft border border-danger text-xs font-semibold tracking-wider uppercase rounded-xl px-2 py-1 text-center">
                BAD
              </span>
              <span className="text-sm font-medium text-text-sub leading-relaxed tracking-tight">
                "쓸 만하다" → 검증 불가능
              </span>
            </div>
            <div className="grid grid-cols-[64px_1fr] gap-3 items-center">
              <span className="text-success bg-success-soft border border-success text-xs font-semibold tracking-wider uppercase rounded-xl px-2 py-1 text-center">
                GOOD
              </span>
              <span className="text-sm font-medium text-text leading-relaxed tracking-tight">
                "월 1만원 이상 지불할 의향이 있다" → 검증 가능
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 시드 6 가설 3개 */}
      <div className="max-w-5xl">
        <div className="text-success text-xs font-semibold tracking-wider uppercase mb-2">
          시드 6 적용 — 가설 3개
        </div>
        <ul className="flex flex-col gap-2.5">
          {hypotheses.map((h) => (
            <li
              key={h.num}
              className="grid grid-cols-[32px_1fr] gap-3 items-start p-4 rounded-xl border-l-4 border-success bg-bg-soft"
            >
              <span className="text-success text-xl font-bold tabular-nums tracking-wider mt-0.5">
                {h.num}
              </span>
              <div>
                <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">
                  페인포인트 매핑: {h.mapping}
                </div>
                <p className="text-sm font-medium text-text leading-relaxed tracking-tight">
                  {h.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
