// Source: lectures/S7/lecture.md lines 42-44 (#### 첫 단정)
// Type: concept / key-message
// D-042: KeyMessage size='sm' 적용

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S7TheoryC1FirstAssertion() {
  return (
    <KeyMessage
      eyebrow="첫 단정"
      size="sm"
      message={[
        '동작한다의 정의는',
        '테스트가 통과한다이다',
      ]}
      highlight="테스트가 통과한다"
    />
  );
}
