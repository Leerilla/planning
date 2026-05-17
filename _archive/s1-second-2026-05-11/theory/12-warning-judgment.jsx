// Source: lectures/S1/lecture.md line 159-184
// Strength: 4
// Profile: linear / comparison / strong

import Warning from '@/components/slides/patterns/Warning';

export default function S1TheorySlide12() {
  return (
      <Warning
        title="변하지 않은 것"
        problem={[
          '판단을 AI에 맡기면 페르소나를 모른 채로 끝난다',
          '가속은 가설의 품질을 높이지 않는다',
        ]}
        reason="가설의 깊이는 AI가 대신할 수 없다"
        avoidance={[
          'ChatGPT가 추론한 페인포인트를 출처와 함께 검증한 뒤',
          '작업자의 판단으로 채택하거나 기각한다',
        ]}
      />
  );
}
