// Source: lectures/S1/lecture.md line 200
// Strength: 5
// Profile: linear / comparison / strong

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S1TheorySlide15() {
  return (
      <KeyMessage
        eyebrow="세 번째 단정"
        message={[
          'AI가 만든 답은',
          '출처를 검증하지 않으면',
          '사용 불가하다',
        ]}
        highlight="출처 검증"
        footer="검증 우선주의"
      />
  );
}
