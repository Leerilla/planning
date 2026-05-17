// Source: lectures/S1/lecture.md line 33
// Strength: 5
// Profile: linear / comparison / strong

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S1TheorySlide06() {
  return (
      <KeyMessage
        eyebrow="첫 단정"
        message={[
          '기능을 정하기 전에',
          '사람과 문제를 정한다',
        ]}
        highlight="사람과 문제"
        footer="검증 가능 vs 검증 불가능"
      />
  );
}
