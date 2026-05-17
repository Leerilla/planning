// Source: lectures/S1/lecture.md line 227-233
// Strength: 3
// Profile: linear / comparison / strong

import ThreeCards from '@/components/slides/patterns/ThreeCards';

export default function S1TheorySlide17b() {
  return (
    <ThreeCards
      title="출처 검증 체크리스트"
      cards={[
        {
          num: "01",
          title: "클릭",
          desc: "AI 답변의 출처 링크를 직접 클릭한다"
        },
        {
          num: "02",
          title: "원문 확인",
          desc: "링크된 원문이 실재하고 답변 주장과 일치하는지 확인한다"
        },
        {
          num: "03",
          title: "신뢰성 판단",
          desc: "출처의 신뢰도(1차 vs 2차 자료, 권위, 최신성)를 평가한다"
        }
      ]}
    />
  );
}
