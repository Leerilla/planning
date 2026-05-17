// Source: lectures/S8/captures/lecture.md line 316-318 (#### 두 번째 단정)
// Type: quote / KeyMessage
// Phase 6 (2026-05-17): request.md #23 — KeyMessage 패턴 일관 (t6/t33/t43과 동일)

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S8T2SecondAssertion() {
  return (
    <KeyMessage
      eyebrow="단정 2"
      size="sm"
      message={[
        'AI에게 명령을 정확히 내리려면',
        '개발 어휘가 필요하다.',
        '코딩이 아닌 어휘다.',
      ]}
      highlight="개발 어휘"
    />
  );
}
