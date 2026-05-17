// Source: lectures/S1/lecture.md line 80-90
// Strength: 2
// Profile: linear / comparison / strong

import StepGuide from '@/components/slides/patterns/StepGuide';

export default function S1TheorySlide08() {
  return (
      <StepGuide
        title="기획 5단계 프레임"
        steps={[
          {
            num: '1',
            title: '문제',
            desc: '5 Whys로 깊이 파기',
          },
          {
            num: '2',
            title: '페르소나',
            desc: '5줄짜리 가설 페르소나',
          },
          {
            num: '3',
            title: '가설',
            desc: '검증 가능한 가설 3개',
          },
          {
            num: '4',
            title: '검증',
            desc: '능동·수동 두 축의 데이터',
          },
          {
            num: '5',
            title: '정제',
            desc: 'PRD + 기능명세 + 와이어프레임',
          },
        ]}
      />
  );
}
