// Source: lectures/S9/lecture.md L7-13 (자동 D-032, ## 이론 목차)
// Type: Objectives

import Objectives from '@/components/slides/patterns/Objectives';

export default function S9TheoryToc() {
  return (
    <Objectives
      eyebrow="이론 학습 목표"
      items={[
        '검증된 MVP와 시장이 원하는 것의 차이를 한 문장으로 설명한다',
        '세 축 데이터(응답·Clarity·Sentry·이벤트 추적)에서 신호와 잡음을 구분한다',
        '페르소나 3단계 진화(가설 → 검증된 → 살아있는)의 마지막 단계로 갱신한다',
        '다음 사이클 결정 3 갈래(Pivot · Persevere · Kill)를 본인 데이터로 적용한다',
        '16시간 + 5시간 학습 사이클을 한 바퀴 닫고 다음 단계 결정을 손에 쥔다',
      ]}
    />
  );
}
