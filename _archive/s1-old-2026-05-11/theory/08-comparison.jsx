// Source: lectures/S1/lecture.md § "기획이란 무엇인가" (lines 30, 38-39)
// Curator decision: Interactive 1 — 욕망 vs 기획 click-toggle
// Phase K: wrapper 내 useState로 active 패널 토글. 같은 시각 영역을 두 관점으로 비교

'use client';

import { useState } from 'react';

const PANELS = {
  desire: {
    label: '욕망',
    tone: 'danger',
    statement: '"쇼핑몰을 만들고 싶다"',
    points: [
      '누구를 위한 것인지 불명확',
      '어떤 문제를 푸는지 모름',
      '어떻게 만들지는 기능을 정해야 생김',
    ],
    note: '대상·문제·검증이 모두 비어 있다. 그래서 다음 단계를 시작할 수 없다.',
  },
  plan: {
    label: '기획',
    tone: 'success',
    statement: '"5-30인 스타트업 PM이 줌 회의 후 액션아이템 정리에 30분 이상 걸린다는 문제를 푼다"',
    points: [
      '페르소나 명확 (5-30인 PM)',
      '페인포인트 명확 (회의 후 30분 이상)',
      '솔루션 검증 가능 (실제 사용자에게 확인)',
    ],
    note: '한 문장에 누구·문제·검증 단서가 모두 담겨 있다. 다음 단계로 이어진다.',
  },
};

export default function S1Theory08Comparison() {
  const [active, setActive] = useState('desire');
  const current = PANELS[active];
  const accentClass = current.tone === 'danger'
    ? 'border-l-danger text-danger'
    : 'border-l-success text-success';

  return (
    <div className="flex flex-col gap-8 justify-center h-full max-w-5xl mx-auto w-full">
      <div className="flex flex-col gap-2">
        <div className="text-xs font-semibold tracking-widest uppercase text-text-muted">
          INTERACTIVE — 클릭하여 비교
        </div>
        <h3 className="text-4xl font-bold text-text">욕망 vs 기획</h3>
        <p className="text-base text-text-sub">정의를 따르지 않으면 욕망에 머문다 — 두 관점을 직접 토글해보자</p>
      </div>

      <div className="flex gap-3">
        {Object.entries(PANELS).map(([key, panel]) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActive(key)}
              className={`px-6 py-3 rounded-full border text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-accent text-white border-accent shadow-md'
                  : 'bg-bg text-text-sub border-divider hover:border-accent hover:text-accent'
              }`}
              aria-pressed={isActive}
            >
              {panel.label}
            </button>
          );
        })}
      </div>

      <div
        className={`flex flex-col gap-4 p-7 bg-bg-soft rounded-2xl border-l-4 ${accentClass.split(' ')[0]} transition-all duration-200`}
      >
        <div className={`text-xs font-semibold tracking-widest uppercase ${accentClass.split(' ')[1]}`}>
          {current.label}
        </div>
        <p className="text-2xl font-semibold text-text leading-snug">{current.statement}</p>
        <ul className="flex flex-col gap-2 mt-2">
          {current.points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-text-sub">
              <span className={`mt-2 w-1.5 h-1.5 rounded-full ${current.tone === 'danger' ? 'bg-danger' : 'bg-success'} shrink-0`} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-text-muted mt-2 pt-3 border-t border-divider">{current.note}</p>
      </div>
    </div>
  );
}
