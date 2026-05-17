// Source: lectures/S1/lecture.md (종료)
// Strength: 2
// Profile: linear / comparison / strong

import Outro from '@/components/slides/patterns/Outro';

export default function S1TheorySlide22() {
  return (
      <Outro
        message="3개 단정 정리"
        summary={[
          "첫 단정: 기능을 정하기 전에 사람과 문제를 정한다",
          "두 번째 단정: AI는 기획을 대신하지 않는다. 기획의 속도만 바꾼다",
          "세 번째 단정: AI가 만든 답은 출처를 검증하지 않으면 사용 불가하다"
        ]}
      />
  );
}
