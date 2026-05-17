// Source: lectures/S1/lecture.md lines 967-978
// Type: example (Tips — 10 함정과 처방 불릿)
// D-035: emoji "⭐" 제거 → "Tips" 텍스트

export default function S1ActivityTips() {
  const tips = [
    { trap: '1차 가설은 틀려도 된다', remedy: '첫 가설이 그대로 살아남는 비율은 평균 30% 미만. "확실한 것만 적자"는 자세가 가설 작성을 가장 많이 막는다.' },
    { trap: '5 Whys는 3번이면 충분하다', remedy: '5번까지 가는 게 목표가 아니다. 답이 막히는 지점이 진짜 문제이며, 거기서 멈추면 된다.' },
    { trap: '출처 검증은 한 번에 익히지 않는다', remedy: '한 주에 한 번씩 직접 클릭해 보는 습관. 첫 한 달이면 거짓을 알아보는 직관이 생긴다.' },
    { trap: '페르소나는 좁을수록 검증이 쉽다', remedy: '좁히는 것은 페르소나의 수를 줄이는 것이 아니라 윤곽을 명확하게 만드는 일.' },
    { trap: '동기/목표가 빠진 페르소나는 인구통계 카드일 뿐', remedy: '"왜 이 문제를 해결하고 싶은가"가 채워져야 한다.' },
    { trap: '시드는 출발점이지 종착점이 아니다', remedy: '페르소나 또는 상황만 본인 관심사에 맞춰 변형하면 본인 자료가 된다.' },
    { trap: '컨택 리스트는 만나본 적 있는 사람부터', remedy: '콜드 메일 응답률은 5-15%. 친구의 친구가 페르소나면 그 한 명이 가장 강한 컨택.' },
    { trap: 'AI에게 페르소나 묘사를 맡기지 않는다', remedy: 'AI는 평균을 만든다. 작업자가 직접 한 명을 그려야 검증 가능한 페르소나가 된다.' },
    { trap: '1차 가설을 한 줄로 적었으면 절반은 끝난 것', remedy: '두 줄 이상이면 페르소나·문제·가설 중 하나가 모호한 것.' },
    { trap: '거짓 0개 발견은 자랑이 아니다', remedy: 'AI 답변 5개 중 1-2개에 거짓이 섞여 있는 게 평균. 0개라면 검증을 너무 빨리 끝낸 신호.' },
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
        놓치기 쉬운 10가지
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        함정 — 처방. 작업 중에 막히면 이 페이지로 돌아온다.
      </p>

      {/* 10 Tips 2-column */}
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
