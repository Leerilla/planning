// Source: lectures/S1/lecture.md line 110
// Strength: 5
// Profile: linear / comparison / strong

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S1TheorySlide11() {
  return (
      <KeyMessage
        eyebrow="두 번째 단정"
        message={[
          'AI는 기획을 대신하지 않는다',
          '기획의 속도만 바꾼다',
        ]}
        highlight="속도"
        footer="판단은 사람이 한다"
      />
  );
}
