// Source: lectures/S9/lecture.md L381-394 (#### 네 번째 단정 + 예시)
// Type: KeyMessage (pattern: key-message, 4/4 단정)
// Pattern: KeyMessage import with examples
// Profile: hierarchical + comparison visual + balanced tone

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S9TheoryC4FourthAssertion() {
  return (
    <KeyMessage
      eyebrow="단정 4"
      size="sm"
      message={[
        "학습 종착점은",
        "다음 결정을 손에 쥐는 것이다.",
      ]}
      highlight="다음 결정을 손에 쥐는 것"
      examples={[
        {
          label: "결정 없이 끝나는 경우",
          text: "다음 사이클에서 어디서부터 시작할지 모름 → 멈춤",
        },
        {
          label: "결정을 쥐고 끝나는 경우",
          text: "1주 안에 할 일 1개 + 1개월 안에 할 일 1개 → 다음 사이클의 첫 걸음",
        },
      ]}
    />
  );
}
