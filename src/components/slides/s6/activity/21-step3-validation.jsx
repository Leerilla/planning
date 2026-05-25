// Source: lectures/S6/lecture.md lines 983-989
// Type: activity (Checklist), § 2.20.1 Step 3 검증 기준
// Profile: hierarchical logic / activity visual / balanced tone
// S6 T9 (2026-05-24): 강사 요구 — "mcpServers 필드 제거" 항목이 갑자기 등장하는 이유 불분명
//                     → S5 추가 mcpServers와 hooks 공존 확인으로 명확화

'use client';

import { useState } from 'react';

export default function S6ActivityStep3Validation() {
  const [checklist, setChecklist] = useState([false, false, false, false, false]);

  const items = [
    'settings.json에 hooks 필드 추가됐는가',
    'S5에서 추가한 mcpServers 필드가 보존됐는가',
    '코드 수정 후 prd-reviewer가 자동 호출됐는가',
    '응답 종료 후 git-committer가 자동 호출됐는가',
    'GitHub에 자동 커밋이 도착했는가'
  ];

  const toggleItem = (idx) => {
    const newChecklist = [...checklist];
    newChecklist[idx] = !newChecklist[idx];
    setChecklist(newChecklist);
  };

  const completedCount = checklist.filter(Boolean).length;
  const progressPercent = (completedCount / items.length) * 100;

  return (
    <div className="flex flex-col gap-8 h-full">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-text mb-2">
          Step 3 검증 기준
        </h2>
        <p className="text-text-sub leading-relaxed">
          아래 5개 항목을 모두 확인하면 Step 3 완료
        </p>
      </div>

      <div className="flex-1 flex flex-col gap-6">
        <div className="space-y-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => toggleItem(idx)}
              className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                checklist[idx]
                  ? 'bg-success-soft border border-success'
                  : 'bg-bg-soft border border-divider hover:border-accent'
              }`}
            >
              <div
                className={`mt-1 w-5 h-5 rounded-xl border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                  checklist[idx]
                    ? 'bg-success border-success'
                    : 'border-divider'
                }`}
              >
                {checklist[idx] && (
                  <svg
                    className="w-3 h-3 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <p
                className={`text-base leading-relaxed transition-all duration-200 ${
                  checklist[idx]
                    ? 'text-success line-through'
                    : 'text-text-sub'
                }`}
              >
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-text-sub">진행률</span>
            <span className="text-base font-bold text-text">
              {completedCount}/{items.length}
            </span>
          </div>
          <div className="w-full h-2 bg-bg-soft rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {completedCount === items.length && (
        <div className="flex items-start gap-3 rounded-xl bg-success-soft border border-success p-4">
          <svg
            className="w-5 h-5 text-success mt-0.5 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          <p className="text-sm font-semibold text-success">
            Step 3 완료! 모든 항목을 확인했습니다.
          </p>
        </div>
      )}
    </div>
  );
}
