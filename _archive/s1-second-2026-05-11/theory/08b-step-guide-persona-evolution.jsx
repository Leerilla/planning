// Source: lectures/S1/lecture.md line 109-126
// Strength: 3
// Profile: linear / comparison / strong

import StepGuide from '@/components/slides/patterns/StepGuide';

export default function S1TheorySlide08b() {
  return (
    <StepGuide
      title="페르소나의 진화"
      steps={[
        {
          title: "가설 페르소나",
          desc: "데이터 없이 직관과 1차 리서치로 만든 첫 윤곽. 본 자료의 활동에서 만드는 단계"
        },
        {
          title: "검증된 페르소나",
          desc: "인터뷰와 설문으로 가설 페르소나를 수정한 결과. 페르소나 카드로 알려진 단계"
        },
        {
          title: "살아있는 페르소나",
          desc: "서비스 출시 후 실제 사용자 데이터로 갱신되는 페르소나. 처음 가설과 다를 수 있음"
        }
      ]}
    />
  );
}
