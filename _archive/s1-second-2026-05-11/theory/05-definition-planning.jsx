// Source: lectures/S1/lecture.md line 3-5, 24-29
// Strength: 4
// Profile: linear / comparison / strong

import Definition from '@/components/slides/patterns/Definition';

export default function S1TheorySlide05() {
  return (
      <Definition
        term="기획의 정의"
        definition={[
          '누구의 어떤 문제를 어떻게 풀 것인가의 답을 정의하는 일',
          '세 개의 핵심 질문: 누구(페르소나), 어떤 문제(페인포인트), 어떻게(솔루션)',
        ]}
        notes={[
          '세 질문 중 하나라도 모호하면 기획이 아니다',
          '욕망과 기획의 구분: 욕망은 만드는 사람의 바람, 기획은 사용자의 답을 정의',
        ]}
        highlights={['페르소나', '페인포인트', '솔루션']}
      />
  );
}
