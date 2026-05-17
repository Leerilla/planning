// Source: lectures/S4/lecture.md lines 333-335 (#### 세 번째 단정)
// Type: quote (KeyMessage)

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S4TheoryC3ThirdAssertion() {
  return (
    <KeyMessage
      eyebrow="세 번째 단정"
      size="sm"
      message={[
        '에이전트의 OODA 루프 중',
        'Decide와 Act 사이에 작업자가 개입하는 지점이',
        'Permissions이다',
      ]}
      highlight="Decide ↔ Act"
      examples={[
        {
          label: '의미',
          text: 'Permissions = 자율 권한의 경계선',
        },
        {
          label: '운영',
          text: '도구 위험도에 따라 자율 / 확인 / 금지 분배',
        },
      ]}
    />
  );
}
