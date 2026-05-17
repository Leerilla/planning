'use client';

import { useState } from 'react';

/**
 * ChecklistValidator — 자가 검증 체크리스트
 *
 * UX: 학생이 5개 항목을 체크하면서 진행률 시각화 + 결과 표시
 * 사용처: Slide 24 (5개 점검 체크리스트 자가검증)
 *
 * Props:
 *   - items: Array<{label, title, desc}>
 *   - onComplete?: (checkedItems) => void
 */
export default function ChecklistValidator({ items = [], onComplete }) {
  const [checked, setChecked] = useState(new Set());

  const toggleItem = (idx) => {
    const next = new Set(checked);
    if (next.has(idx)) {
      next.delete(idx);
    } else {
      next.add(idx);
    }
    setChecked(next);
    if (next.size === items.length && onComplete) {
      onComplete(next);
    }
  };

  const progress = items.length > 0 ? (checked.size / items.length) * 100 : 0;
  const isComplete = checked.size === items.length;

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Progress Bar */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-end">
          <span className="text-xs font-semibold text-text">검증 진행률</span>
          <span className="text-sm font-bold text-accent">
            {checked.size}/{items.length}
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-bg-soft overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Checklist Items */}
      <div className="flex flex-col gap-2">
        {items.map((item, idx) => {
          const isChecked = checked.has(idx);
          return (
            <button
              key={idx}
              type="button"
              onClick={() => toggleItem(idx)}
              className={`flex gap-3 p-3 rounded-xl border-2 transition-all cursor-pointer text-left ${
                isChecked
                  ? 'bg-accent-soft border-accent'
                  : 'bg-bg-soft border-divider hover:border-accent'
              }`}
            >
              {/* Checkbox */}
              <div
                className={`flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all mt-0.5 ${
                  isChecked
                    ? 'bg-accent border-accent'
                    : 'border-divider'
                }`}
              >
                {isChecked && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-[10px] font-bold text-text-muted uppercase tracking-widest">
                    {item.label || `CHECK ${String(idx + 1).padStart(2, '0')}`}
                  </span>
                  <h4 className="font-semibold text-sm text-text">{item.title}</h4>
                </div>
                {item.desc && (
                  <p className="text-xs text-text-sub mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Result Message */}
      {isComplete && (
        <div className="p-3 rounded-xl bg-accent-soft border border-accent">
          <p className="text-center text-sm font-bold text-accent">
            5개 항목 모두 통과 — prd.md export 가능
          </p>
        </div>
      )}
    </div>
  );
}
