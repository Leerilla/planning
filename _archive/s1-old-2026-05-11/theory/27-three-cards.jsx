// Source: lectures/S1/lecture.md § "변하지 않은 것: 판단은 사람이 한다" (lines 114-118)
// Curator decision: Interactive 3 — hover-expand. 카드 hover 시 "위임 금지" 마커 + 상세 popover
// Phase K: §2 마무리 — AI 활용의 올바른 자세 3가지. 각 카드 위임 금지 이유를 hover로 펼침

'use client';

import { useState } from 'react';

const CARDS = [
  {
    num: '01',
    title: '페르소나 판단',
    desc: 'AI가 후보 5-10명을 빠르게 제안하면, 작업자가 그중 1명을 채택한다.',
    detail:
      '페르소나 1명을 머릿속에 그리는 일은 작업자의 직관과 경험이 필요하다. AI는 후보를 빠르게 제안하지만, 그중 1명을 채택하는 결정은 작업자가 해야 한다. 위임하면 시간이 흐른 뒤에도 페르소나가 누구인지 모른다.',
  },
  {
    num: '02',
    title: '페인포인트 신호',
    desc: 'AI가 자료에서 패턴을 보여주면, 본인 시장에 적용되는지 작업자가 판단한다.',
    detail:
      '페인포인트가 진짜 시장 신호인지 판단하는 일도 마찬가지다. AI는 자료에서 패턴을 보여주지만 그 패턴이 본인 시장에 적용되는지는 작업자의 몫이다. 위임하면 가짜 신호를 진짜로 착각한다.',
  },
  {
    num: '03',
    title: '가설 형식',
    desc: 'AI가 가설 초안을 쓰면, 검증 가능한 형식인지 작업자가 점검한다.',
    detail:
      '가설이 검증 가능한 형식인지 점검하는 일은 작업자의 정의에 달려 있어서 AI가 대신할 수 없다. "쓸 만하다"는 검증 불가능, "월 1만원 이상 지불할 의향이 있다"는 검증 가능 — 이 구분은 사람이 한다.',
  },
];

export default function S1Theory27ThreeCards() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex flex-col gap-8 justify-center h-full max-w-6xl mx-auto w-full">
      <div className="flex flex-col gap-2">
        <div className="text-xs font-semibold tracking-widest uppercase text-text-muted">
          INTERACTIVE — 카드에 마우스를 올리면 위임 금지 이유가 펼쳐집니다
        </div>
        <h3 className="text-4xl font-bold text-text">AI 활용의 올바른 자세</h3>
        <p className="text-base text-text-sub">
          모으는 일은 가속하고, 판단하는 일은 깊게 한다. 다음 세 영역은 위임 금지.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {CARDS.map((card, i) => {
          const isActive = hovered === i;
          return (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`relative p-7 rounded-2xl border bg-bg-soft transition-all duration-200 cursor-default ${
                isActive
                  ? 'border-danger -translate-y-1 shadow-xl'
                  : 'border-divider hover:border-accent'
              }`}
            >
              <div className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-danger text-white tracking-wide">
                위임 금지
              </div>
              <div className="text-xs font-mono text-text-muted tracking-widest mb-2">
                {card.num}
              </div>
              <h4 className="text-xl font-semibold text-text mb-3">{card.title}</h4>
              <p className="text-sm text-text-sub leading-relaxed mb-3">{card.desc}</p>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  isActive ? 'max-h-72 opacity-100 mt-3 pt-3 border-t border-divider' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-sm text-text leading-relaxed">{card.detail}</p>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-sm text-text-muted">
        작업자는 AI를 속도의 도구로 쓰고 판단의 도구로 쓰지 않는다.
      </p>
    </div>
  );
}
