// Source: lectures/S2/lecture.md line 27
// Type: quote (KeyMessage 첫 단정)
// D-037: highlight + examples 활용

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S2TheoryC1FirstAssertion() {
  return (
    <KeyMessage
      eyebrow="첫 단정"
      message={[
        "검증은 가설이 틀렸을 때",
        "명확히 틀렸다고 말해주는 것이다",
      ]}
      highlight="명확히 틀렸다고"
      examples={[
        {
          label: "기준",
          text: "이 단정이 의견 수집과 검증을 가르는 기준이다",
        },
        {
          label: "행동",
          tone: "good",
          text: "검증된 가설은 PRD 정제로 자신 있게 들어간다",
        },
      ]}
    />
  );
}
