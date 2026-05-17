// MetaPromptingFlow.jsx
// Role: Interactive 6 — 메타 프롬프팅 5단계 워크플로우 체험
// CLAUDE.md 준수: E1(실제 통합) / E2(애니메이션 보조) / A3(콘텐츠 충실) / D(디자인 토큰)
// 강사 결함 #13, #14: 가독성 색상 대비. 가이드라인 → 카피 적용 과정 명시

'use client';

import { useState } from 'react';

export default function MetaPromptingFlow({
  personaOptions = [],
  targetOptions = [],
  sampleData = [],
  onComplete,
}) {
  const [step, setStep] = useState(0);
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [selectedTarget, setSelectedTarget] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userChoice, setUserChoice] = useState(null);

  const matched = sampleData.find(
    (s) => s.persona === selectedPersona && s.target === selectedTarget
  );

  const advanceWithLoading = (next) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(next);
    }, 1000);
  };

  const reset = () => {
    setStep(0);
    setSelectedPersona(null);
    setSelectedTarget(null);
    setUserChoice(null);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Step 0: 페르소나 선택 */}
      {step === 0 && (
        <div className="space-y-4">
          <div className="text-xs font-semibold text-accent uppercase tracking-wide">
            STEP 1 / 5 · 페르소나 선택
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personaOptions.map((p) => (
              <button
                type="button"
                key={p.name}
                onClick={() => {
                  setSelectedPersona(p.name);
                  setStep(1);
                }}
                className="p-7 text-left rounded-xl border-2 border-divider bg-bg hover:border-accent hover:bg-bg-soft transition-all duration-200"
              >
                <div className="text-base font-semibold text-text mb-2">{p.name}</div>
                <div className="text-sm text-text-muted">{p.description}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 1: 대상 선택 */}
      {step === 1 && (
        <div className="space-y-4">
          <div className="text-xs font-semibold text-accent uppercase tracking-wide">
            STEP 2 / 5 · 페인포인트 선택
          </div>
          <div className="text-sm text-text-muted">
            선택한 페르소나: <span className="font-semibold text-text">{selectedPersona}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targetOptions.map((t) => (
              <button
                type="button"
                key={t.name}
                onClick={() => {
                  setSelectedTarget(t.name);
                  advanceWithLoading(2);
                }}
                className="p-7 text-left rounded-xl border-2 border-divider bg-bg hover:border-accent hover:bg-bg-soft transition-all duration-200"
              >
                <div className="text-base font-semibold text-text mb-2">{t.name}</div>
                <div className="text-sm text-text-muted">{t.description}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 로딩 */}
      {isLoading && (
        <div className="flex items-center justify-center gap-3 p-7 rounded-xl bg-bg-soft border border-divider">
          <div className="h-4 w-4 rounded-full border-2 border-accent border-t-transparent animate-spin" />
          <span className="text-sm text-text-muted">메타 프롬프팅 가이드라인 생성 중...</span>
        </div>
      )}

      {/* Step 2: 가이드라인 결과 */}
      {step === 2 && !isLoading && matched && (
        <div className="space-y-4">
          <div className="text-xs font-semibold text-accent uppercase tracking-wide">
            STEP 3 / 5 · AI가 먼저 만든 가이드라인 (메타 프롬프팅 핵심)
          </div>
          <div className="p-7 rounded-xl border-2 border-accent bg-accent-soft">
            <ul className="space-y-3">
              {matched.guidelines.map((g, i) => (
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
              답을 만들기 전 "좋은 답의 기준"을 먼저 정의 — 작업자가 검토 가능
            </p>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => advanceWithLoading(3)}
              className="px-7 py-3 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-opacity-90 transition-all"
            >
              가이드라인 적용 → 카피 3개 생성
            </button>
          </div>
        </div>
      )}

      {/* Step 3: 카피 후보 3개 — 가이드라인 적용 표시 */}
      {step === 3 && !isLoading && matched && (
        <div className="space-y-4">
          <div className="text-xs font-semibold text-accent uppercase tracking-wide">
            STEP 4 / 5 · 가이드라인 적용 카피 — 마음에 드는 것 선택
          </div>
          {/* 가이드라인 요약 reminder */}
          <div className="p-4 rounded-xl border border-accent border-opacity-30 bg-accent-soft">
            <div className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">
              위에서 정의한 가이드라인 (적용 기준)
            </div>
            <ul className="flex flex-wrap gap-2">
              {matched.guidelines.map((g, i) => (
                <li
                  key={i}
                  className="text-xs text-text bg-bg px-3 py-1 rounded-full border border-divider"
                >
                  {String(i + 1).padStart(2, '0')} {g.split(':')[0]}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {matched.copies.map((c, i) => (
              <button
                type="button"
                key={i}
                onClick={() => {
                  setUserChoice(c);
                  setStep(4);
                  if (onComplete) onComplete(c);
                }}
                className="p-7 text-left rounded-xl border-2 border-divider bg-bg hover:border-accent hover:bg-bg-soft transition-all duration-200"
                style={{ animation: `fadeUp 300ms var(--easing) ${i * 100}ms both` }}
              >
                <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">
                  옵션 {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-sm text-text leading-relaxed">{c}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: 완료 */}
      {step === 4 && userChoice && matched && (
        <div className="space-y-4">
          <div className="text-xs font-semibold text-success uppercase tracking-wide">
            STEP 5 / 5 · 완료
          </div>
          <div className="p-7 rounded-xl border-2 border-success bg-bg">
            <div className="text-xs font-semibold text-success uppercase tracking-wide mb-3">
              선택한 카피
            </div>
            <p className="text-sm text-text leading-relaxed mb-4">{userChoice}</p>
            <div className="pt-3 border-t border-divider">
              <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">
                가이드라인 → 카피 적용 매핑
              </div>
              <ul className="space-y-1">
                {matched.guidelines.map((g, i) => (
                  <li key={i} className="text-xs text-text-muted">
                    <span className="font-mono text-accent">{String(i + 1).padStart(2, '0')}</span>{' '}
                    {g.split(':')[0]} → 카피에 반영됨
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs text-text-muted mt-3">
              일반 프롬프팅 응답률 5%대 → 메타 프롬프팅 10~15%대 (3가지 요인 모두 적용)
            </p>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={reset}
              className="px-7 py-3 rounded-xl border border-divider text-text-muted text-sm font-semibold hover:border-accent hover:text-accent transition-all"
            >
              다시 시도
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
