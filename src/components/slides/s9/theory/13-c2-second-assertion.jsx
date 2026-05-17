// Source: lectures/S9/lecture.md L121-123 (#### 두 번째 단정)
// Type: concept (emphasis: key-message)

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S9TheoryC2SecondAssertion() {
  return (
    <KeyMessage
      eyebrow="단정 2"
      size="sm"
      message={[
        '한 사용자의 한 행동은 신호가 아니다.',
        '패턴이 신호다.',
      ]}
      highlight="패턴이 신호다"
    />
  );
}
