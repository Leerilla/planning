// Source: lectures/S1/lecture.md line 202-206
// Strength: 4
// Profile: linear / comparison / strong

import Comparison from '@/components/slides/patterns/Comparison';

export default function S1TheorySlide18() {
  return (
      <Comparison
        title="거짓 패턴의 위험도와 검증"
        bad={{
          label: "그럴듯한 통계",
          statement: "위험도 최대",
          points: [
            "정확해 보이는 숫자가 위험하다",
            "통계 출처 URL을 직접 클릭해 원문 확인 필수",
            "같은 통계를 여러 곳에서 인용하는 사슬 효과 주의"
          ]
        }}
        good={{
          label: "출처 조작",
          statement: "가장 들키기 쉬움",
          points: [
            "URL을 클릭하면 즉시 404 또는 무관한 페이지 확인",
            "출처 검증의 1단계가 URL 클릭인 이유",
            "의심만 해도 들킨다"
          ]
        }}
      />
  );
}
