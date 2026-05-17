// Source: lectures/S6/lecture.md lines 364-369 (#### hook의 type 두 가지)
// Type: comparison (2-row table)

import Comparison from '@/components/slides/patterns/Comparison';

export default function S6TheoryC3HookTypes() {
  return (
    <Comparison
      title="hook의 type 두 가지"
      bad={{
        label: 'command',
        statement: '셸 명령 직접 실행',
        points: [
          '결정적',
        ],
      }}
      good={{
        label: 'agent',
        statement: 'sub-agent 호출',
        points: [
          '출력 구조는 결정적',
        ],
      }}
    />
  );
}
