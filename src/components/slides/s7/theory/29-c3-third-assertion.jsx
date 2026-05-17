// Source: lectures/S7/lecture.md lines 302-304 (세 번째 단정, 인용 블록)
// Type: concept (KeyMessage, emphasis: key-message, size: sm)
// Profile: hierarchical / comparison / medium / balanced

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S7TheoryC3ThirdAssertion() {
  return (
    <KeyMessage
      eyebrow="세 번째 단정"
      size="sm"
      message={[
        'PRD 일치성 검증은',
        '코드 단위가 아닌 시나리오 단위로 한다.',
        '그리고 검증은 루프로 진행한다',
      ]}
      highlight="시나리오 단위"
    />
  );
}
