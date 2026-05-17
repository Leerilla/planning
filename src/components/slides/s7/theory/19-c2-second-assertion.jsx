// Source: lectures/S7/lecture.md line 190-192
// Type: title (concept - key-message)
// Pattern: KeyMessage size="sm"
// Profile: systematic/simulation/medium-interactive

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S7TheoryC2SecondAssertion({ deckMeta }) {
  return (
    <KeyMessage
      eyebrow="두 번째 단정"
      size="sm"
      message={[
        '자율 디버깅 3원칙:',
        '에러 그대로 전달, 분석 먼저, 결과 검증',
      ]}
      highlight="3원칙"
    />
  );
}
