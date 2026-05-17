// Source: lectures/S2/lecture.md line 95
// Type: quote (KeyMessage 두 번째 단정)

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S2TheoryC2SecondAssertion() {
  return (
    <KeyMessage
      eyebrow="두 번째 단정"
      message={[
        "두 축은",
        "함께 사용해야 한다",
      ]}
      highlight="함께 사용해야"
      examples={[
        {
          label: "동시 가동",
          text: "본 학습 활동에서는 능동 카피 1건 + 수동 데이터 50건 이상을 동시에 모은다",
        },
        {
          label: "안전망",
          tone: "good",
          text: "능동 응답 0건이어도 수동 데이터가 있으면 다음 단계 분석으로 진입 가능",
        },
      ]}
    />
  );
}
