// Source: lectures/S6/lecture.md lines 352-354 (#### 세 번째 단정)
// Type: concept / key-message
// D-042: KeyMessage size='sm' 적용

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S6TheoryC3ThirdAssertion() {
  return (
    <KeyMessage
      eyebrow="세 번째 단정"
      size="sm"
      message={[
        'hook은',
        '결정적 동작을 보장한다',
      ]}
      highlight="결정적 동작"
      examples={[
        {
          label: '효과',
          text: '잊어버림을 방지하고 일관성을 유지한다',
        },
      ]}
    />
  );
}
