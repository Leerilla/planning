// Source: lectures/S6/lecture.md lines 55-58 (#### 첫 단정)
// Type: concept / key-message
// D-042: KeyMessage size='sm' 적용

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S6TheoryC1FirstAssertion() {
  return (
    <KeyMessage
      eyebrow="첫 단정"
      size="sm"
      message={[
        '자동화는 반복을',
        '발견하는 데서 시작한다',
      ]}
      highlight="발견"
    />
  );
}
