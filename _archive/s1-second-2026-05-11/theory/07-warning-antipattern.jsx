// Source: lectures/S1/lecture.md line 38-40
// Strength: 4
// Profile: linear / comparison / strong

import Warning from '@/components/slides/patterns/Warning';

export default function S1TheorySlide07() {
  return (
      <Warning
        title="안티패턴"
        problem="쇼핑몰을 만들고 싶어요. 기능부터 정해봅시다"
        reason="누구·문제·방법 어느 것도 정하지 않음"
        description={[
          '욕망이지 기획이 아님',
          '페르소나 기반 작업이 아니므로 검증 불가능',
        ]}
        avoidance={[
          '5-30인 스타트업 PM이 줌 회의 후 액션아이템 정리 문제로 시작한다',
        ]}
      />
  );
}
