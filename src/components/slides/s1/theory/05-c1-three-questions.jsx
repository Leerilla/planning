// Source: lectures/S1/lecture.md lines 37-50
// Type: concept, emphasis: default
// Profile: hierarchical / comparison / medium / balanced
// Curator decision (T2.1): ThreeCards 패턴 + 3개 카드

import ThreeCards from '@/components/slides/patterns/ThreeCards';

export default function S1TheoryC1ThreeQuestions() {
  return (
    <ThreeCards
      title="세 개의 핵심 질문"
      cards={[
        {
          title: "누구 (페르소나)",
          desc: "서비스가 풀려는 문제를 가진 구체적 사용자"
        },
        {
          title: "어떤 문제 (페인포인트)",
          desc: "페르소나가 실제로 겪는 불편과 어려움"
        },
        {
          title: "어떻게 (솔루션)",
          desc: "핵심 기능과 작동 방식"
        }
      ]}
    />
  );
}
