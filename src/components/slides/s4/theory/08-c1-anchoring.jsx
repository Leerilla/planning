// Source: lectures/S4/lecture.md lines 61-67 (#### 컨텍스트 앵커링)
// Type: quote (KeyMessage)

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S4TheoryC1Anchoring() {
  return (
    <KeyMessage
      eyebrow="컨텍스트 앵커링"
      message={[
        '정보를 한 곳에 고정하고,',
        '모든 명령이 그 고정점을 참조하게 만드는 구조',
      ]}
      highlight="고정점"
      examples={[
        {
          label: '효과',
          text: '고정점이 명확할수록 에이전트의 작업이 일관된다',
        },
        {
          label: '위험',
          text: '고정점이 흐릿하면 작업도 흐릿하다',
        },
      ]}
    />
  );
}
