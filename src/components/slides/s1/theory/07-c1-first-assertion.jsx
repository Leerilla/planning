// Source: lectures/S1/lecture.md lines 63-72
// Type: quote (KeyMessage)
// Profile: hierarchical / comparison / medium / balanced
// Curator decision (T2.1): KeyMessage 패턴 — message 배열 + examples 배열

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S1TheoryC1FirstAssertion() {
  return (
    <KeyMessage
      eyebrow="첫 단정"
      message={[
        "기능을 정하기 전에",
        "사람과 문제를 정한다"
      ]}
      highlight="사람과 문제"
      examples={[
        {
          text: "이 차이가 노출 단계에서 누구에게 무엇을 물을지를 결정한다"
        },
        {
          text: "페르소나 기반 작업자는 답변자에게 '이 페인포인트가 진짜였는가'를 명확하게 물을 수 있다"
        },
        {
          text: "기능 기반 작업자는 '이 도구가 마음에 드는가' 같은 모호한 질문밖에 던지지 못한다"
        }
      ]}
    />
  );
}
