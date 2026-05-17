// Source: lectures/S1/lecture.md line 210-233
// Strength: 2
// Profile: linear / comparison / strong

import StepGuide from '@/components/slides/patterns/StepGuide';

export default function S1TheorySlide17() {
  return (
      <StepGuide
        title="출처 검증 3단계"
        steps={[
          {
            title: "출처 클릭",
            desc: "AI가 인용한 URL을 직접 클릭해 원문을 확인하는 행위"
          },
          {
            title: "원문 확인",
            desc: "페이지가 진짜 AI 답변의 내용을 담고 있는지 점검"
          },
          {
            title: "신뢰성 판단",
            desc: "1차 자료인가, 검증 가능한가, 다른 출처와 일치하는가"
          }
        ]}
      />
  );
}
