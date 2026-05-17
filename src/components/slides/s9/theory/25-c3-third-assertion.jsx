// Source: lectures/S9/lecture.md L265-268 (#### 세 번째 단정 → KeyMessage)
// Type: KeyMessage (pattern: key-message)

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S9TheoryC3ThirdAssertion() {
  return (
    <KeyMessage
      eyebrow="단정 3"
      size="sm"
      message={[
        "본 단계가",
        "두 번째에서 세 번째로 가는 다리다.",
      ]}
      highlight="세 번째로 가는 다리"
    />
  );
}
