// Source: lectures/S8/captures/lecture.md line 563-565 (#### 네 번째 단정)
// Type: quote / key-message
// Pattern: KeyMessage (강도 5 단정)
// Profile: logic=hierarchical / visual=comparison / tone=strong

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S8TheoryC4FourthAssertion() {
  return (
    <KeyMessage
      eyebrow="단정 4"
      size="sm"
      message={[
        'CORS는 보안을 위해 막히는데',
        '이것은 정상이다.',
      ]}
      highlight="정상이다"
    />
  );
}
