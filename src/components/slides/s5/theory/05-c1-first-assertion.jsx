// Source: lectures/S5/lecture.md lines 40-42 (#### 첫 단정)
// Type: quote (KeyMessage)

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S5TheoryC1FirstAssertion() {
  return (
    <KeyMessage
      eyebrow="첫 단정"
      size="sm"
      message={[
        'UI부터 서버 단위로 작업한다.',
      ]}
      highlight="서버 단위"
      examples={[
        {
          label: '이유',
          text: '한 화면이 동작하면 패턴 복사 + 빌드 자신감 + 핵심 가설 검증 + 완성 가능성',
        },
        {
          label: '단위',
          text: 'PRD 핵심 기능 1개에 매핑되는 화면 1개',
        },
      ]}
    />
  );
}
