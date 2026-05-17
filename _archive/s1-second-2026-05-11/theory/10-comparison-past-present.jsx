// Source: lectures/S1/lecture.md line 133-155
// Strength: 4
// Profile: linear / comparison / strong

import Comparison from '@/components/slides/patterns/Comparison';

export default function S1TheorySlide10() {
  return (
      <Comparison
        title="5개 영역의 과거와 현재"
        bad={{
          label: "과거",
          statement: "리서치는 며칠, 문서화는 한 주, 검증은 보름 이상",
          points: [
            "1차 시장 리서치",
            "PRD 초안 작성",
            "검증 사이클",
            "데이터 스크래핑"
          ]
        }}
        good={{
          label: "현재",
          statement: "리서치·문서화·검증이 모두 하루 단위",
          points: [
            "짧은 시간 단위로 1차 리서치",
            "짧은 시간 단위로 PRD 초안 작성",
            "하루 내 검증 사이클",
            "짧은 시간 단위로 데이터 스크래핑"
          ]
        }}
      />
  );
}
