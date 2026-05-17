'use client';

import { useState } from 'react';

/**
 * StepFrameRevealer — Stack carousel
 *
 * UX: 활성 1장 중앙 강조 + 좌우 인접 카드 흐림 (누적 좌→우 진행)
 * 사용처: Slide 17 (5단계 프레임), Slide 31 (검증 3단계)
 *
 * - overflow-hidden + transform translateX 기반 carousel (드래그/스크롤바 없음)
 * - 활성 카드: opacity 1 + scale 1
 * - 진행한 이전 카드: opacity 0.5 + scale 0.94 (누적 표시)
 * - 미래 카드: opacity 0.25 + scale 0.92
 * - 자체 키보드 핸들러 X (SlideDeck ←→ 충돌 방지) — 명시적 버튼·도트만
 *
 * Props:
 *   - steps: Array<{label, title, desc, output}>
 *   - cardWidth?: number (px) — 카드 폭 (기본 320)
 *   - gap?: number (px) — 카드 간격 (기본 24)
 *   - onStepChange?: (index) => void
 */
export default function StepFrameRevealer({
  steps = [],
  cardWidth = 320,
  gap = 24,
  onStepChange,
}) {
  const [activeStep, setActiveStep] = useState(0);
  const total = steps.length;

  const goTo = (idx) => {
    const next = Math.max(0, Math.min(total - 1, idx));
    setActiveStep(next);
    onStepChange?.(next);
  };

  const handlePrev = () => goTo(activeStep - 1);
  const handleNext = () => goTo(activeStep + 1);

  // 활성 카드 중앙 정렬: 트랙 left:50% 고정 + transform으로 활성 카드의 중심을 0,0 위치로
  const trackTranslate = -(activeStep * (cardWidth + gap)) - cardWidth / 2;

  return (
    <div className="flex flex-col gap-8 w-full" role="region" aria-label="단계별 노출">
      <div className="relative w-full overflow-hidden h-[260px]">
        <div
          className="absolute top-0 flex h-full transition-transform duration-500 ease-out"
          style={{
            left: '50%',
            gap: `${gap}px`,
            transform: `translateX(${trackTranslate}px)`,
          }}
        >
          {steps.map((step, idx) => {
            const isActive = idx === activeStep;
            const isPast = idx < activeStep;
            return (
              <article
                key={idx}
                style={{ width: `${cardWidth}px` }}
                className={`flex-shrink-0 h-full rounded-2xl p-7 flex flex-col gap-3 transition-all duration-500 ease-out ${
                  isActive
                    ? 'bg-accent text-white border border-accent shadow-2xl scale-100 opacity-100'
                    : isPast
                      ? 'bg-bg-soft border border-divider text-text scale-[0.94] opacity-50'
                      : 'bg-bg-soft border border-divider text-text scale-[0.92] opacity-25'
                }`}
                aria-current={isActive ? 'step' : undefined}
              >
                <div
                  className={`font-mono text-xs font-semibold tracking-widest uppercase ${
                    isActive ? 'text-white/75' : 'text-text-muted'
                  }`}
                >
                  {step.label || `STEP ${String(idx + 1).padStart(2, '0')}`}
                </div>
                <h4
                  className={`text-xl font-bold tracking-tight leading-snug ${
                    isActive ? 'text-white' : 'text-text'
                  }`}
                >
                  {step.title}
                </h4>
                {step.desc && (
                  <p
                    className={`text-sm font-medium leading-relaxed ${
                      isActive ? 'text-white/85' : 'text-text-sub'
                    }`}
                  >
                    {step.desc}
                  </p>
                )}
                {step.output && (
                  <div
                    className={`mt-auto text-xs font-medium pt-3 border-t ${
                      isActive ? 'border-white/20 text-white/70' : 'border-divider text-text-muted'
                    }`}
                  >
                    출력물: {step.output}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      <div className="flex gap-4 justify-center items-center">
        <button
          type="button"
          onClick={handlePrev}
          disabled={activeStep === 0}
          className="px-5 py-2.5 rounded-full border border-divider bg-bg-soft text-text font-medium text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:border-accent hover:text-accent transition-all"
          aria-label="이전 단계"
        >
          이전
        </button>

        <div className="flex gap-2 items-center">
          {steps.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goTo(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeStep
                  ? 'bg-accent w-8'
                  : idx < activeStep
                    ? 'bg-accent/50 w-2'
                    : 'bg-divider w-2'
              }`}
              aria-label={`${idx + 1}번 단계로 이동`}
              aria-current={idx === activeStep ? 'step' : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          disabled={activeStep === total - 1}
          className="px-5 py-2.5 rounded-full border border-divider bg-bg-soft text-text font-medium text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:border-accent hover:text-accent transition-all"
          aria-label="다음 단계"
        >
          다음
        </button>
      </div>

      <div className="text-center text-xs text-text-muted font-mono tracking-wider">
        {activeStep + 1} / {total}
      </div>
    </div>
  );
}
