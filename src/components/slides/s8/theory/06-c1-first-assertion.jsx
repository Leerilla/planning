// Source: lectures/S8/captures/lecture.md L55-57 (자동 매핑, KeyMessage/단정)
// Type: ConceptSlide with emphasis=key-message
// S8 T18a (2026-05-25): 강사 요구 — 폰트 크기 조금 낮춤 → size="sm" 적용

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S8TheoryC1FirstAssertion() {
  return (
    <KeyMessage
      eyebrow="단정 1"
      message={['비밀은 BE에 둔다.', 'FE는 BE에게 물어본다.']}
      size="sm"
    />
  );
}
