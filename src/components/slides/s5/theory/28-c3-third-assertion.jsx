// Source: lectures/S5/lecture.md lines 276-278 (#### 세 번째 단정)
// Type: quote (KeyMessage)

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S5TheoryC3ThirdAssertion() {
  return (
    <KeyMessage
      eyebrow="세 번째 단정"
      size="sm"
      message={[
        '동작은 예쁨이 아니다.',
        '본 단계의 합격선은 동작하는 무언가이다',
      ]}
      highlight="동작하는 무언가"
      examples={[
        {
          label: '동작',
          text: '페이지가 뜨고 + 인터랙션이 작동하고 + 입력 반응이 나옴',
        },
        {
          label: '예쁨',
          text: '디자인 정제는 사용자 행동 데이터 위에서 — 다음 단계',
        },
      ]}
    />
  );
}
