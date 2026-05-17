// Source: lectures/S5/lecture.md lines 121-123 (#### 두 번째 단정)
// Type: quote (KeyMessage)

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S5TheoryC2SecondAssertion() {
  return (
    <KeyMessage
      eyebrow="두 번째 단정"
      size="sm"
      message={[
        '위임 3원칙을',
        '모든 빌드 명령에 적용한다',
      ]}
      highlight="모든 빌드 명령"
      examples={[
        {
          label: '대상',
          text: '본 학습 빌드 명령 / 다음 단계 / sub-agent / hooks / E2E 테스트 / 배포 명령',
        },
        {
          label: '효과',
          text: '한 번 익히면 본 학습 후의 모든 AI 협업에 평생 사용',
        },
      ]}
    />
  );
}
