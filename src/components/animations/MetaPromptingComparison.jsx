// MetaPromptingComparison.jsx
// Role: Interactive 5 — 일반 vs 메타 프롬프팅 비교 시뮬레이션
// CLAUDE.md 준수: E1(실제 통합) / E2(애니메이션 보조) / A3(콘텐츠 충실) / D(디자인 토큰)
// 강사 결함 #11, #12: 메타 프롬프팅의 과정(가이드라인 → 카피)을 명시. 가독성 색상 대비

'use client';

import { useState } from 'react';

export default function MetaPromptingComparison({ personaExamples = [], onComplete }) {
  const [step, setStep] = useState(0);
  const [selectedPersona, setSelectedPersona] = useState(null);

  const persona = selectedPersona
    ? personaExamples.find((p) => p.name === selectedPersona)
    : null;

  const selectPersona = (name) => {
    setSelectedPersona(name);
    setStep(1);
  };

  const reset = () => {
    setSelectedPersona(null);
    setStep(0);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Step 0: 페르소나 선택 */}
      {step === 0 && (
        <div className="space-y-4">
          <p className="text-sm text-text-muted text-center">페르소나를 선택하세요</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personaExamples.map((p) => (
              <button
                type="button"
                key={p.name}
                onClick={() => selectPersona(p.name)}
                className="p-7 text-left rounded-xl border-2 border-divider bg-bg hover:border-accent hover:bg-bg-soft transition-all duration-200"
              >
                <div className="text-base font-semibold text-text mb-2">{p.name}</div>
                <div className="text-sm text-text-muted">{p.scenario}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step >= 1 && persona && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-text">
              {persona.name} <span className="text-text-muted font-normal">— {persona.scenario}</span>
            </div>
            <button
              type="button"
              onClick={reset}
              className="text-xs text-text-muted hover:text-accent transition-colors"
            >
              다른 페르소나
            </button>
          </div>

          {/* 일반 프롬프팅 결과 */}
          <div className="p-7 rounded-xl border-2 border-divider bg-bg">
            <div className="text-xs font-semibold text-warning uppercase tracking-wide mb-3">
              STEP 1 · 일반 프롬프팅 결과
            </div>
            <p className="text-sm text-text leading-relaxed">{persona.general}</p>
            <p className="text-xs text-text-muted mt-3 pt-3 border-t border-divider">
              평범한 카피. 페르소나의 페인포인트가 구체화되지 않음. 응답률 5%대.
            </p>
          </div>

          {/* Step 2 진입 버튼 */}
          {step === 1 && (
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-7 py-3 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-opacity-90 transition-all"
              >
                메타 프롬프팅 가이드라인 보기
              </button>
            </div>
          )}

          {/* Step 2: 가이드라인 (과정의 핵심) */}
          {step >= 2 && (
            <div className="p-7 rounded-xl border-2 border-accent bg-accent-soft">
              <div className="text-xs font-semibold text-accent uppercase tracking-wide mb-4">
                STEP 2 · AI가 먼저 만든 가이드라인 (메타 프롬프팅의 핵심)
              </div>
              <ul className="space-y-3">
                {persona.guidelines.map((g, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-text leading-relaxed"
                    style={{ animation: `fadeUp 300ms var(--easing) ${i * 100}ms both` }}
                  >
                    <span className="text-accent font-mono font-semibold shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-text-muted mt-4 pt-3 border-t border-accent border-opacity-30">
                답을 만들기 전에 "어떤 답이 좋은 답인가"를 먼저 정의 — 작업자가 검토할 기회 발생
              </p>
            </div>
          )}

          {/* Step 3 진입 */}
          {step === 2 && (
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => {
                  setStep(3);
                  if (onComplete) onComplete(persona.name);
                }}
                className="px-7 py-3 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-opacity-90 transition-all"
              >
                가이드라인 적용 → 카피 생성
              </button>
            </div>
          )}

          {/* Step 3: 메타 카피 결과 (가이드라인 적용) */}
          {step === 3 && (
            <div className="p-7 rounded-xl border-2 border-success bg-bg">
              <div className="text-xs font-semibold text-success uppercase tracking-wide mb-3">
                STEP 3 · 가이드라인 위에서 만든 메타 프롬프팅 카피
              </div>
              <p className="text-sm text-text leading-relaxed">{persona.meta}</p>
              <p className="text-xs text-text-muted mt-3 pt-3 border-t border-divider">
                가이드라인 3가지가 모두 반영됨 — 첫 줄 후크(시간/빈도) + 신뢰 표시 + 부담 옵션. 응답률 10~15%대.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
