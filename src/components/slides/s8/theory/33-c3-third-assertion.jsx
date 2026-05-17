// Source: lectures/S8/captures/lecture.md L443-445 (#### 세 번째 단정)
// Type: quote (KeyMessage)
// D-050: 원문 보존 / D-054: .gitignore, .env.local inline code accent

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S8TheoryC3ThirdAssertion() {
  return (
    <KeyMessage
      eyebrow="세 번째 단정"
      size="sm"
      message={[
        'API 키는 환경 변수에 두고',
        '.gitignore에 .env.local을 명시한다',
      ]}
      highlight=".gitignore에 .env.local을 명시"
      examples={[
        {
          label: '원칙',
          text: '코드는 GitHub에 공개해도 값은 비공개. 환경 변수를 통한 분리가 안전.',
        },
        {
          label: '귀결',
          text: '실수로 git add . 해도 .env.local이 추적되지 않으므로 안전. 키 노출 위험 없음.',
        },
      ]}
    />
  );
}
