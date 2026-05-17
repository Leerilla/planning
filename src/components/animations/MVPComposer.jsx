'use client';

import { useState } from 'react';

/**
 * MVPComposer — MVP 기능 3개 좁히기 선택기 (옵션 C: 권장 + 자유)
 *
 * UX: 학습자가 자유롭게 3개 선택. 입력/처리/출력 강제 X.
 *     카드에 category 라벨 표시 + 선택 후 카테고리 분포 표시(자체 검증).
 *
 * Props:
 *   - candidates: Array<{label, title, desc, category?: '입력'|'처리'|'출력'}>
 *   - max: number (기본 3)
 *   - onComplete?: (selected) => void
 */
const CATEGORY_STYLE = {
  입력: 'border-accent text-accent',
  처리: 'border-warning text-warning',
  출력: 'border-success text-success',
};

export default function MVPComposer({
  candidates = [],
  max = 3,
  onComplete,
}) {
  const [selected, setSelected] = useState(new Set());
  const [reason, setReason] = useState('');

  const toggleCandidate = (idx) => {
    const next = new Set(selected);
    if (next.has(idx)) {
      next.delete(idx);
    } else if (next.size < max) {
      next.add(idx);
    }
    setSelected(next);
  };

  const isFull = selected.size === max;
  const isComplete = selected.size === max && reason.trim().length > 0;

  // 카테고리 분포 계산 (선택된 항목 기준)
  const distribution = { 입력: 0, 처리: 0, 출력: 0, 미분류: 0 };
  Array.from(selected).forEach((idx) => {
    const cat = candidates[idx]?.category;
    if (cat && distribution[cat] !== undefined) distribution[cat] += 1;
    else distribution.미분류 += 1;
  });
  const isStandardPattern =
    distribution.입력 === 1 && distribution.처리 === 1 && distribution.출력 === 1;

  const handleSubmit = () => {
    if (isComplete && onComplete) {
      const selectedItems = Array.from(selected).map((idx) => candidates[idx]);
      onComplete({ items: selectedItems, reason });
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-lg text-text">
          핵심 기능 {max}개 선택하기
        </h3>
        <p className="text-sm text-text-sub leading-relaxed">
          기능 3개를 좁혀 선택하세요. <span className="font-semibold text-accent">권장 표준: 입력 1 + 처리 1 + 출력 1</span> (페인포인트 본질에 따라 다를 수 있음)
        </p>
      </div>

      {/* Candidate Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {candidates.map((candidate, idx) => {
          const isSelected = selected.has(idx);
          const isDisabled = !isSelected && isFull;
          const cat = candidate.category;
          const catClass = cat ? CATEGORY_STYLE[cat] : 'border-divider text-text-muted';

          return (
            <button
              key={idx}
              type="button"
              onClick={() => toggleCandidate(idx)}
              disabled={isDisabled}
              className={`p-4 rounded-2xl border-2 transition-all text-left ${
                isSelected
                  ? 'bg-accent-soft border-accent'
                  : isDisabled
                    ? 'bg-bg-soft border-divider opacity-40 cursor-not-allowed'
                    : 'bg-bg-soft border-divider hover:border-accent cursor-pointer'
              }`}
            >
              {/* Header: label + category badge + selection */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-xs font-bold text-text-muted uppercase">
                    {candidate.label || `기능 ${String(idx + 1).padStart(2, '0')}`}
                  </span>
                  {cat && (
                    <span className={`font-mono text-[10px] font-semibold tracking-wider uppercase rounded-full border px-2 py-0.5 ${catClass}`}>
                      {cat}
                    </span>
                  )}
                </div>
                {isSelected && (
                  <span className="font-mono text-[10px] font-semibold tracking-wider uppercase rounded-full bg-accent text-white px-2 py-0.5 whitespace-nowrap">
                    선택됨
                  </span>
                )}
              </div>

              {/* Title */}
              <h4 className="font-semibold text-sm text-text">
                {candidate.title}
              </h4>

              {/* Description */}
              {candidate.desc && (
                <p className="text-xs text-text-sub mt-2 leading-relaxed">
                  {candidate.desc}
                </p>
              )}
            </button>
          );
        })}
      </div>

      {/* Selection Summary + Distribution */}
      {selected.size > 0 && (
        <div className="p-4 rounded-2xl bg-bg-soft border border-divider flex flex-col gap-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <p className="text-sm font-semibold text-text">
              선택됨: {selected.size} / {max}개
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono text-[10px] font-semibold tracking-wider uppercase text-text-muted">
                분포
              </span>
              <span className={`font-mono text-xs font-semibold ${distribution.입력 > 0 ? 'text-accent' : 'text-text-muted'}`}>
                입력 {distribution.입력}
              </span>
              <span className="text-text-muted">·</span>
              <span className={`font-mono text-xs font-semibold ${distribution.처리 > 0 ? 'text-warning' : 'text-text-muted'}`}>
                처리 {distribution.처리}
              </span>
              <span className="text-text-muted">·</span>
              <span className={`font-mono text-xs font-semibold ${distribution.출력 > 0 ? 'text-success' : 'text-text-muted'}`}>
                출력 {distribution.출력}
              </span>
            </div>
          </div>
          {isFull && (
            <p className="text-xs text-text-sub">
              {isStandardPattern
                ? '표준 골격(입력 1 + 처리 1 + 출력 1) 충족 — 빌드 시간 안에 완성 가능한 균형'
                : '표준 골격과 다른 조합 — 페인포인트 본질에 부합한다면 OK. 본인의 선택 이유를 명확히 적어보세요.'}
            </p>
          )}
        </div>
      )}

      {/* Reason Textarea */}
      {isFull && (
        <div className="flex flex-col gap-2">
          <label htmlFor="reason" className="text-sm font-semibold text-text">
            이 3개를 선택한 이유는?
          </label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="예: 가장 강한 페인포인트(업무 효율)를 직접 푸는 기능, 그 입력을 받는 기능, 결과 출력 기능 — 표준 골격에 맞춤"
            className="p-4 rounded-2xl border border-divider bg-bg text-text placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none"
            rows={4}
          />
        </div>
      )}

      {/* Submit Button */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={!isComplete}
        className={`py-3 px-6 rounded-2xl font-semibold text-center transition-all ${
          isComplete
            ? 'bg-accent text-white hover:bg-opacity-90 cursor-pointer'
            : 'bg-bg-soft text-text-muted opacity-40 cursor-not-allowed'
        }`}
      >
        {isComplete ? 'MVP 구성 완료' : selected.size === max ? '선택 이유를 적어주세요' : `${max}개를 모두 선택하세요`}
      </button>
    </div>
  );
}
