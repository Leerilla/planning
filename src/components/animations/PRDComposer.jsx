// PRDComposer.jsx
// Role: Interactive 1 (S3 Slide 8) — PRD 5요소 직접 조립 시뮬
// CLAUDE.md 준수: E1(실제 통합) / E7(웹 장점) / A3(콘텐츠 충실) / D1(emoji 0건) / D11(특수문자 0건)

'use client';

import { useState } from 'react';

const STEPS = [
  {
    key: 'problem',
    label: '문제',
    prompt: '누구의 어떤 페인포인트를 해결하는가?',
    candidates: [
      { id: 'a', text: '시간이 오래 걸린다', valid: false, hint: '주체와 수치가 모호 — 검증 불가' },
      { id: 'b', text: 'PM이 회의 정리에 매주 5시간 소비', valid: true, hint: '주체 + 수치 명확 — 검증 가능' },
      { id: 'c', text: '회의록 정리가 어렵다', valid: false, hint: '추상적 — 어떤 어려움인지 불명확' },
    ],
  },
  {
    key: 'persona',
    label: '페르소나',
    prompt: '구체적인 사용자 한 명',
    candidates: [
      { id: 'a', text: '직장인', valid: false, hint: '직군 / 환경 / 도구 등 5축 부재' },
      { id: 'b', text: '5-30인 PM, 회의 주 5회, 슬랙·노션 사용, 정리 미루는 성향', valid: true, hint: '5축 충실 — 직군/환경/도구/빈도/성향' },
      { id: 'c', text: '바쁜 PM', valid: false, hint: '단일 형용사 — 페르소나 5축 부재' },
    ],
  },
  {
    key: 'feature',
    label: '핵심 기능',
    prompt: '3개만 (입력 1 + 처리 1 + 출력 1)',
    candidates: [
      { id: 'a', text: '음성 녹음 / 화자 분리 / 액션아이템 추출 / 요약 / 공유 / 검색', valid: false, hint: '6개 — 빌드 시간 폭증' },
      { id: 'b', text: '음성 녹음 (입력) / AI 회의록 변환 (처리) / 액션아이템 추출 (출력)', valid: true, hint: '3개 — 입력/처리/출력 명확' },
      { id: 'c', text: '회의록 자동화', valid: false, hint: '단일 — 입력/처리/출력 분리 X' },
    ],
  },
  {
    key: 'metric',
    label: '성공 지표',
    prompt: '측정 가능한 숫자',
    candidates: [
      { id: 'a', text: '사용자 만족도 향상', valid: false, hint: '측정 방법 없음' },
      { id: 'b', text: '정리 시간 95% 단축 (수동 60분 → 자동 3분)', valid: true, hint: '비교 + 수치 명확' },
      { id: 'c', text: 'NPS 70 이상', valid: true, hint: '단일 수치 — 측정 가능' },
    ],
  },
  {
    key: 'constraint',
    label: '제약사항',
    prompt: '하지 말아야 할 일 — 범위 한정',
    candidates: [
      { id: 'a', text: '많은 사용자가 쓸 수 있게', valid: false, hint: '범위 미한정' },
      { id: 'b', text: '5명 이하 소회의 / 한국어만 / 비공개 회의 미지원', valid: true, hint: '범위 명확 한정' },
      { id: 'c', text: '잘 만들기', valid: false, hint: '추상' },
    ],
  },
];

export default function PRDComposer({ onComplete }) {
  const [step, setStep] = useState(0);
  const [choices, setChoices] = useState({});
  const [showFeedback, setShowFeedback] = useState(null);

  const current = STEPS[step];
  const allValid = STEPS.every((s) => choices[s.key]?.valid);

  const select = (candidate) => {
    setShowFeedback(candidate);
    setChoices({ ...choices, [current.key]: candidate });
    if (candidate.valid) {
      setTimeout(() => {
        setShowFeedback(null);
        if (step < STEPS.length - 1) setStep(step + 1);
        else if (onComplete) onComplete(choices);
      }, 1500);
    }
  };

  const reset = () => {
    setStep(0);
    setChoices({});
    setShowFeedback(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold text-accent uppercase tracking-wide">
          STEP {step + 1} / {STEPS.length} · {current.label}
        </div>
        <div className="text-xs text-text-muted">
          {Object.keys(choices).filter((k) => choices[k]?.valid).length} / {STEPS.length} 완성
        </div>
      </div>

      {step < STEPS.length && !allValid && (
        <div className="space-y-4">
          <div className="text-base font-semibold text-text">{current.prompt}</div>
          <div className="grid grid-cols-1 gap-4">
            {current.candidates.map((c) => {
              const isSelected = showFeedback?.id === c.id;
              const showResult = isSelected;
              return (
                <button
                  type="button"
                  key={c.id}
                  onClick={() => select(c)}
                  className={`p-7 text-left rounded-xl border-2 transition-all duration-200 ${
                    showResult && c.valid
                      ? 'border-success bg-bg'
                      : showResult && !c.valid
                        ? 'border-warning bg-bg'
                        : 'border-divider bg-bg hover:border-accent hover:bg-bg-soft'
                  }`}
                >
                  <p className="text-sm text-text leading-relaxed">{c.text}</p>
                  {showResult && (
                    <p
                      className={`text-xs mt-3 pt-3 border-t border-divider ${
                        c.valid ? 'text-success' : 'text-warning'
                      }`}
                    >
                      {c.valid ? '통과 — ' : '재시도 — '}
                      {c.hint}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {allValid && (
        <div className="p-7 rounded-xl border-2 border-success bg-bg space-y-4">
          <div className="text-xs font-semibold text-success uppercase tracking-wide">
            5요소 조립 완료 — PRD 1차안
          </div>
          <ul className="space-y-3">
            {STEPS.map((s, i) => (
              <li key={s.key} className="text-sm text-text leading-relaxed">
                <span className="font-mono text-accent mr-3">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-semibold">{s.label}:</span> {choices[s.key]?.text}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={reset}
            className="px-7 py-3 rounded-xl border border-divider text-text-muted text-sm font-semibold hover:border-accent hover:text-accent transition-all"
          >
            다시 시도
          </button>
        </div>
      )}
    </div>
  );
}
