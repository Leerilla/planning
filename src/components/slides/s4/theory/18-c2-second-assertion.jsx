// Source: lectures/S4/lecture.md lines 182-184 (#### 두 번째 단정)
// Type: quote (KeyMessage)

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S4TheoryC2SecondAssertion() {
  return (
    <KeyMessage
      eyebrow="두 번째 단정"
      size="sm"
      message={[
        'PRD는 무엇을 만들 것인가,',
        'CLAUDE.md는 어떻게 만들 것인가이다',
      ]}
      highlight="어떻게"
      examples={[
        {
          label: '분리',
          text: '두 문서가 답하는 질문이 다르다',
        },
        {
          label: '경계',
          text: 'PRD는 합의 문서, CLAUDE.md는 작업 절차',
        },
      ]}
    />
  );
}
