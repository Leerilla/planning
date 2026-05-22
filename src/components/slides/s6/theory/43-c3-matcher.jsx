// Source: lectures/S6/lecture.md lines 438-451
// Type: comparison, 4-row matcher 정규식 패턴
// Profile: hierarchical logic / comparison visual / balanced tone

'use client';

import { useState } from 'react';

export default function S6TheoryC3Matcher() {
  const [activeIndex, setActiveIndex] = useState(0);

  const matcherExamples = [
    {
      label: 'Edit만',
      pattern: '"Edit"',
      description: 'Edit 도구만 트리거',
      color: 'bg-info-soft',
      borderColor: 'border-info',
    },
    {
      label: 'Edit 또는 Write',
      pattern: '"Edit|Write"',
      description: 'Edit 또는 Write 도구 트리거 (공백 없음)',
      color: 'bg-success-soft',
      borderColor: 'border-success',
    },
    {
      label: 'Bash만',
      pattern: '"Bash"',
      description: 'Bash 도구만 트리거',
      color: 'bg-warning-soft',
      borderColor: 'border-warning',
    },
    {
      label: '모든 도구',
      pattern: '"."',
      description: '모든 도구 매칭 (권장 안 함)',
      color: 'bg-danger-soft',
      borderColor: 'border-danger',
    },
  ];

  return (
    <div className="flex flex-col gap-4 h-full">
      <h2 className="text-4xl font-bold tracking-tight text-text">
        matcher 정규식
      </h2>

      {/* 도구 설명 (D-053 - 첫 등장 도구 이름 짧은 설명) */}
      <div className="border-l-4 border-accent bg-bg-soft rounded-r-md px-4 py-3 max-w-4xl">
        <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
          Claude Code 도구 5가지
        </div>
        <p className="text-sm text-text-sub leading-relaxed">
          <span className="font-bold text-text">Edit</span>·<span className="font-bold text-text">Write</span>: 파일 수정/생성 · <span className="font-bold text-text">Bash</span>: 셸 명령 실행 (git, npm 등) · <span className="font-bold text-text">Read</span>: 파일 읽기 · <span className="font-bold text-text">Grep</span>·<span className="font-bold text-text">Glob</span>: 검색
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 flex-1">
        {matcherExamples.map((example, idx) => (
          <div
            key={idx}
            className={`${example.color} ${example.borderColor} border-l-4 rounded-xl p-4 cursor-pointer transition-all duration-200 hover:shadow-lg`}
            onClick={() => setActiveIndex(idx)}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-base font-bold text-text tracking-tight">
                  {example.label}
                </h3>
                <p className="text-sm text-text-sub mt-1 tracking-tight font-semibold">
                  {example.pattern}
                </p>
              </div>
              <div className="text-xs font-semibold text-text-sub uppercase tracking-wider">
                {idx + 1}
              </div>
            </div>
            <p className="text-sm text-text-sub mt-2">
              {example.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-3 rounded-xl border-l-4 border-accent bg-bg-soft p-3">
        <p className="text-sm text-text leading-relaxed">
          <span className="font-semibold text-accent">주의: </span>
          공백 넣으면 안 됨. <code className="text-accent">"Edit | Write"</code>는 잘못된 정규식. PreToolUse와 PostToolUse 모두 필요.
        </p>
      </div>
    </div>
  );
}
