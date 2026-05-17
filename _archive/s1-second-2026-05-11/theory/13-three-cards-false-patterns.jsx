// Source: lectures/S1/lecture.md line 190-206
// Strength: 3
// Profile: linear / comparison / strong

import ThreeCards from '@/components/slides/patterns/ThreeCards';

export default function S1TheorySlide13() {
  return (
      <ThreeCards
        title="AI가 만드는 거짓의 3가지 패턴"
        cards={[
          {
            num: "01",
            title: "그럴듯한 통계",
            desc: "정확해 보이지만 출처를 클릭하면 없거나 다른 모집단",
            emphasis: "danger",
            markerLabel: "최대 위험도"
          },
          {
            num: "02",
            title: "가짜 인용",
            desc: "유명한 사람이 한 말로 보이지만 검증 불가",
            emphasis: "warning",
            markerLabel: "중간 위험도"
          },
          {
            num: "03",
            title: "출처 조작",
            desc: "URL이 404 또는 무관한 페이지로 연결",
            emphasis: "warning",
            markerLabel: "경량"
          }
        ]}
      />
  );
}
