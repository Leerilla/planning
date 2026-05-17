// Source: lectures/S1/lecture.md line 573-584
// Strength: 1
// Profile: linear / comparison / strong

import ThreeCards from '@/components/slides/patterns/ThreeCards';

export default function S1TheorySlide21b() {
  return (
    <ThreeCards
      title="Tips — 실전 지혜"
      cards={[
        {
          num: "01",
          title: "1차 가설은 틀려도 된다",
          desc: "첫 가설이 살아남는 비율은 평균 30% 미만이다. 30%만 맞아도 충분하다는 전제로 시작한다"
        },
        {
          num: "02",
          title: "출처 검증은 한 주에 한 번씩",
          desc: "한 주에 한 번씩 직접 클릭해 보는 습관을 들인다. 첫 한 달이면 거짓을 알아보는 직관이 생긴다"
        },
        {
          num: "03",
          title: "1차 가설을 한 줄로 적으면 절반 끝",
          desc: "한 줄로 줄일 수 있다는 것은 작업자가 명확히 이해했다는 신호이다. 다시 좁혀야 한다면 페르소나·문제·가설 중 하나가 모호한 것"
        }
      ]}
    />
  );
}
