// Source: lectures/S2/lecture.md L396-404 (Tips 7불릿)
// Type: example (Tips — 함정과 처방)
// D-035: emoji "⭐" 제거 → "Tips" 텍스트

export default function S2ActivityTips() {
  const tips = [
    {
      trap: '메타 프롬프팅 한 줄 공식',
      remedy: '"[X]를 잘 하는 법 3가지를 먼저 알려줘. 그 다음 [Y]를 만들어줘." 이 공식은 카피, PRD 검토, 코드 명령에 모두 적용된다. 본 학습 전체에서 재사용된다.',
    },
    {
      trap: '첫 줄 후크에 페인포인트 키워드를 넣는다',
      remedy: '페르소나가 자기 어려움을 즉시 인식하는 단어가 첫 줄에 있어야 본문이 읽힌다. "상품 카피 한 건 쓰는데 1-2시간, 시간이 아깝지 않으세요?"가 "안녕하세요. 인터뷰 요청 드립니다"보다 응답률이 높다.',
    },
    {
      trap: '응답 0%인 작업자도 다음 단계 진입 가능',
      remedy: '수동 데이터 50건 이상이면 페인포인트 분석에 충분하다. 능동 응답이 0건이어도 좌절하지 않는다.',
    },
    {
      trap: '카피의 첫 줄이 응답률을 결정',
      remedy: '후크 한 줄이 평범하면 본문은 안 읽힌다. 메타 프롬프팅으로 후크 후보 5개를 만든 뒤 가장 강한 것을 선택한다.',
    },
    {
      trap: '응답 즉시 답하지 않는다',
      remedy: '누적해서 처리하면 응답자 간 패턴이 보인다. 단, 24시간 안에는 답해야 신뢰가 유지된다.',
    },
    {
      trap: '저작권과 이용약관 주의',
      remedy: '공개 글의 페인포인트 인용은 학습 목적으로 가능하지만, 글 전체를 본인 서비스에 게재하는 것은 별개이다. 수집 단계에서 출처를 함께 기록한다.',
    },
    {
      trap: '카피와 데이터를 같이 본다',
      remedy: '카피의 가설과 스크래핑의 신호가 일치하지 않으면 페르소나 또는 가설 중 하나가 모호한 것이다. 일치 점검은 다음 단계 분석에서 본격화한다.',
    },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-warning rounded-full" />
        <span className="text-warning text-sm font-semibold tracking-wider uppercase">
          Tips · 함정과 처방
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        놓치기 쉬운 7가지
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        함정 — 처방. 작업 중 막히면 이 페이지로 돌아온다.
      </p>

      {/* 7 Tips 2-col grid */}
      <ul className="grid grid-cols-2 gap-2.5 max-w-6xl">
        {tips.map((t, i) => (
          <li
            key={i}
            className="grid grid-cols-[36px_1fr] gap-3 items-start p-3 rounded-xl border-l-4 border-warning bg-bg-soft hover:bg-warning-soft transition-colors group"
          >
            <span className="text-warning text-base font-bold tabular-nums tracking-wider mt-0.5">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <div className="text-sm font-bold text-text leading-snug tracking-tight">
                {t.trap}
              </div>
              <div className="text-xs text-text-sub leading-relaxed mt-1.5 tracking-tight">
                {t.remedy}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
