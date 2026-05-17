// Source: lectures/S1/lecture.md line 246-261
// Strength: 1
// Profile: linear / comparison / strong

import ThreeCards from '@/components/slides/patterns/ThreeCards';

export default function S1TheorySlide20() {
  return (
      <ThreeCards
        title="시드 아이디어 6개 (계속)"
        cards={[
          {
            num: "4",
            title: "한 끼 식단 사진 → 영양 분석기",
            desc: "다이어터가 사진 한 장으로 칼로리 추정",
            markerLabel: "복잡도 높음"
          },
          {
            num: "5",
            title: "동호회·소모임 정기일정 알림 자동화",
            desc: "총무가 반복 공지 카피 자동 생성",
            markerLabel: "복잡도 낮음"
          },
          {
            num: "6",
            title: "1인 셀러 상품 카피 생성기",
            desc: "셀러가 상품 사진으로 상세페이지 자동 작성",
            markerLabel: "복잡도 높음"
          }
        ]}
      />
  );
}
