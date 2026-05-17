// Source: lectures/S8/captures/lecture.md (#### 다섯 번째 단정)
// Type: quote / KeyMessage
// Phase 6 (2026-05-17): request.md #52 — KeyMessage 패턴 일관 (t6/t23/t33/t43과 동일)

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S8TheoryC5FifthAssertion() {
  return (
    <KeyMessage
      eyebrow="단정 5"
      size="sm"
      message={[
        '사용자가 들어오기 전에 분석 도구를 셋업한다.',
        '들어온 후 셋업하면 그 사용자 데이터는 회수 불가능하다.',
      ]}
      highlight="회수 불가능"
    />
  );
}
