'use client';

import { useState } from 'react';

/**
 * FalsePatternValidator — 단일 영역 단계 교체 방식
 *
 * Phase L2 재작성: 16:9 SlideFrame 안에 들어가도록 컴팩트.
 * 한 번에 한 단계만 메인 영역에 표시 + 단계 이동은 명시적 다음/이전 버튼.
 * 진행 인디케이터(상단) + 메인 영역(현재 단계) + 하단 액션 버튼.
 *
 * 단계 흐름:
 *   0: claim (AI 답변 읽기) → "출처 검증" 버튼 클릭
 *   1: 검증 결과 (URL fetch) → "패턴 분류" 버튼 클릭
 *   2: 패턴 선택 → 정답 시 결과 reveal
 *   3: 결과 (정답/오답 + 이유) → "다음 샘플" 버튼
 *
 * Props:
 *   - samples: Array<{claim, url, correctPattern, reason}>
 *   - onComplete?: (info) => void
 */
const DEFAULT_SAMPLES = [
  {
    claim: '"한국 20-30대 PM의 78%가 회의록 정리에 30분 이상 쓴다"',
    url: 'https://stat-research.kr/survey/2024',
    correctPattern: '그럴듯한통계',
    reason: '출처 URL이 실제 존재하지 않는 도메인입니다.',
  },
  {
    claim: '"Marc Andreessen: AI의 본질은 패턴 인식이다"',
    url: 'https://twitter.com/pmarca',
    correctPattern: '가짜인용',
    reason: 'Marc Andreessen의 실제 글에는 이 표현이 없습니다.',
  },
  {
    claim: '"www.research-institute.kr/article/2024-06-15"',
    url: 'https://research-institute.kr/article/2024-06-15',
    correctPattern: '출처조작',
    reason: '이 URL은 404 오류를 반환하거나 다른 내용의 페이지입니다.',
  },
];

const PATTERN_OPTIONS = [
  {
    id: '그럴듯한통계',
    label: '그럴듯한 통계',
    description: '숫자가 정확해 보이지만 출처가 없거나 다른 모집단',
    border: 'border-danger',
    bg: 'bg-danger/10',
    text: 'text-danger',
  },
  {
    id: '가짜인용',
    label: '가짜 인용',
    description: '유명인의 발언을 마음대로 인용',
    border: 'border-warning',
    bg: 'bg-warning/10',
    text: 'text-warning',
  },
  {
    id: '출처조작',
    label: '출처 조작',
    description: 'URL이 그럴듯하지만 404 또는 무관한 내용',
    border: 'border-accent',
    bg: 'bg-accent/10',
    text: 'text-accent',
  },
];

const STAGES = ['AI 답변', '출처 검증', '패턴 분류', '결과'];

function ResultIcon({ correct }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 48 48"
      className={`shrink-0 ${correct ? 'text-success' : 'text-danger'}`}
      style={{ animation: 'fpvPop 420ms cubic-bezier(0.34, 1.56, 0.64, 1) both' }}
    >
      <circle cx="24" cy="24" r="22" fill="currentColor" opacity="0.12" />
      <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2" />
      {correct ? (
        <path
          d="M14 24 L21 31 L34 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ strokeDasharray: 32, strokeDashoffset: 32, animation: 'fpvDraw 420ms ease-out 120ms forwards' }}
        />
      ) : (
        <>
          <line x1="16" y1="16" x2="32" y2="32" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"
            style={{ strokeDasharray: 24, strokeDashoffset: 24, animation: 'fpvDraw 320ms ease-out 120ms forwards' }} />
          <line x1="32" y1="16" x2="16" y2="32" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"
            style={{ strokeDasharray: 24, strokeDashoffset: 24, animation: 'fpvDraw 320ms ease-out 240ms forwards' }} />
        </>
      )}
    </svg>
  );
}

export default function FalsePatternValidator({ samples = DEFAULT_SAMPLES, onComplete }) {
  const [sampleIdx, setSampleIdx] = useState(0);
  const [stage, setStage] = useState(0); // 0: claim, 1: 검증 결과, 2: 패턴 선택, 3: 결과
  // 샘플별 선택 기록 — 샘플 전환 시 이전 선택 유지
  const [choices, setChoices] = useState(() => samples.map(() => null));

  const sample = samples[sampleIdx];
  const userChoice = choices[sampleIdx];
  const correctOption = PATTERN_OPTIONS.find((p) => p.id === sample.correctPattern);
  const isCorrect = userChoice === sample.correctPattern;

  const selectSample = (idx) => {
    setSampleIdx(idx);
    setStage(0);
  };

  const goNextSample = () => {
    if (sampleIdx < samples.length - 1) {
      selectSample(sampleIdx + 1);
    } else {
      onComplete?.({ samplesCompleted: samples.length });
    }
  };

  const handlePatternChoice = (id) => {
    setChoices((prev) => {
      const next = [...prev];
      next[sampleIdx] = id;
      return next;
    });
    setStage(3);
  };

  const goPrevStage = () => {
    if (stage > 0) setStage(stage - 1);
  };

  const goNextStage = () => {
    // stage 0 → 1, 1 → 2 (직접 이동). stage 2 → 3은 패턴 선택을 통해서만.
    if (stage < 2) setStage(stage + 1);
    else if (stage === 2 && userChoice) setStage(3);
  };

  const canGoNext = stage < 2 || (stage === 2 && userChoice);

  return (
    <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto h-full justify-center">
      <style jsx global>{`
        @keyframes fpvPop {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fpvDraw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fpvFadeIn {
          from { transform: translateY(8px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      <header className="flex items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono text-text-muted uppercase tracking-widest mb-1">
            샘플 {sampleIdx + 1} / {samples.length}
          </div>
          <h3 className="text-2xl font-bold text-text leading-tight">거짓 패턴 검증 시뮬레이션</h3>
        </div>
        <div className="flex gap-2 items-center shrink-0" role="tablist" aria-label="샘플 선택">
          {samples.map((_, idx) => {
            const isCurrent = idx === sampleIdx;
            const isAnswered = choices[idx] !== null;
            return (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={isCurrent}
                onClick={() => selectSample(idx)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider transition-all ${
                  isCurrent
                    ? 'bg-accent text-white border border-accent'
                    : isAnswered
                      ? 'bg-success/10 text-success border border-success/40 hover:bg-success/15'
                      : 'bg-bg text-text-sub border border-divider hover:border-accent hover:text-accent'
                }`}
              >
                문제 {idx + 1}
              </button>
            );
          })}
        </div>
      </header>

      {/* 단계 인디케이터 */}
      <div className="flex items-center gap-2">
        {STAGES.map((label, i) => {
          const active = stage === i;
          const passed = stage > i;
          return (
            <div key={i} className="flex items-center gap-2 flex-1 last:flex-none">
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-300 ${
                  active
                    ? 'bg-accent text-white'
                    : passed
                      ? 'bg-success/15 text-success'
                      : 'bg-bg-soft text-text-muted'
                }`}
              >
                <span>{String(i + 1).padStart(2, '0')}</span>
                <span>{label}</span>
              </div>
              {i < STAGES.length - 1 && (
                <div className={`h-px flex-1 transition-colors duration-300 ${passed ? 'bg-success/40' : 'bg-divider'}`} />
              )}
            </div>
          );
        })}
      </div>

      {/* 메인 영역 — 단일 카드 교체 */}
      <div
        key={`${sampleIdx}-${stage}`}
        className="rounded-2xl border border-divider bg-bg-soft p-7 min-h-[260px] flex flex-col gap-4"
        style={{ animation: 'fpvFadeIn 360ms cubic-bezier(0.16, 1, 0.3, 1) both' }}
      >
        {stage === 0 && (
          <>
            <div className="text-xs font-mono text-text-muted uppercase tracking-widest">AI 답변</div>
            <p className="text-2xl font-semibold text-text leading-snug">{sample.claim}</p>
            <p className="text-sm text-text-sub mt-auto">
              이 답변이 거짓 패턴인지 검증해보자. 다음 단계에서 출처 URL을 확인한다.
            </p>
          </>
        )}

        {stage === 1 && (
          <>
            <div className="text-xs font-mono text-text-muted uppercase tracking-widest">출처 검증 결과</div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-text-sub break-all">{sample.url}</span>
            </div>
            <div className="rounded-xl border border-l-4 border-l-danger border-y-divider border-r-divider bg-bg p-4">
              <div className="text-xs font-mono uppercase tracking-widest text-danger mb-1.5">검증 실패</div>
              <p className="text-sm text-text leading-relaxed">
                {sample.correctPattern === '출처조작'
                  ? '404 오류 — 페이지를 찾을 수 없습니다.'
                  : sample.correctPattern === '가짜인용'
                    ? '페이지가 열렸지만 인용된 내용이 본문에 없습니다.'
                    : '페이지는 존재하지만 통계 출처가 불명확하고 다른 모집단을 가리킵니다.'}
              </p>
            </div>
          </>
        )}

        {stage === 2 && (
          <>
            <div className="text-xs font-mono text-text-muted uppercase tracking-widest">거짓 패턴 분류</div>
            <p className="text-sm text-text-sub">검증 결과를 보고 어느 거짓 패턴에 해당하는지 선택하라.</p>
            <div className="grid grid-cols-1 gap-2.5 mt-1">
              {PATTERN_OPTIONS.map((p) => {
                const selected = userChoice === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handlePatternChoice(p.id)}
                    className={`text-left p-4 rounded-xl border-2 transition-all ${
                      selected
                        ? `${p.border} ${p.bg}`
                        : 'border-divider bg-bg hover:border-accent hover:-translate-y-0.5 hover:shadow-md'
                    }`}
                  >
                    <div className={`text-base font-semibold mb-0.5 ${selected ? p.text : 'text-text'}`}>
                      {p.label}
                    </div>
                    <div className="text-xs text-text-sub leading-relaxed">{p.description}</div>
                  </button>
                );
              })}
            </div>
          </>
        )}

        {stage === 3 && (
          <div className="flex items-start gap-4">
            <ResultIcon correct={isCorrect} />
            <div className="flex-1">
              <div className={`text-xl font-bold mb-2 ${isCorrect ? 'text-success' : 'text-danger'}`}>
                {isCorrect ? '정답입니다' : '다시 보세요'}
              </div>
              <p className="text-sm text-text leading-relaxed mb-2">
                이것은 <strong className="font-semibold">{correctOption?.label}</strong> 패턴입니다.
              </p>
              <p className="text-sm text-text-sub leading-relaxed">{sample.reason}</p>
            </div>
          </div>
        )}
      </div>

      {/* 액션 버튼 — 단계 이전/다음 양방향 + stage 3에서 다음 샘플 */}
      <div className="flex justify-between items-center gap-3">
        <button
          type="button"
          onClick={goPrevStage}
          disabled={stage === 0}
          className="px-5 py-2.5 rounded-full border border-divider bg-bg text-text-sub text-sm font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:border-accent hover:text-accent transition-all"
        >
          이전 단계
        </button>

        <div className="flex gap-3">
          {stage < 3 && (
            <button
              type="button"
              onClick={goNextStage}
              disabled={!canGoNext}
              className="px-6 py-2.5 rounded-full bg-accent text-white text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              {stage === 0 ? '출처 URL 확인' : stage === 1 ? '패턴 분류로 이동' : '결과 보기'}
            </button>
          )}
          {stage === 3 && sampleIdx < samples.length - 1 && (
            <button
              type="button"
              onClick={goNextSample}
              className="px-6 py-2.5 rounded-full bg-accent text-white text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              다음 샘플
            </button>
          )}
          {stage === 3 && sampleIdx === samples.length - 1 && (
            <button
              type="button"
              onClick={goNextSample}
              className="px-6 py-2.5 rounded-full bg-success text-white text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              시뮬레이션 완료
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
