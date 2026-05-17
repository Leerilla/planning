// Source: lectures/S4/lecture.md lines 34-38 (#### 첫 단정)
// Type: quote (KeyMessage)

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S4TheoryC1FirstAssertion() {
  return (
    <KeyMessage
      eyebrow="첫 단정"
      message={[
        'CLAUDE.md는',
        '프로젝트의 헌법이다',
      ]}
      highlight="프로젝트의 헌법"
      examples={[
        {
          label: '의미',
          text: '매 세션 자동 로드 — 모든 명령이 그 위에서 작동',
        },
        {
          label: '출발점',
          text: '단정의 근거는 에이전트의 무상태성에 있다',
        },
      ]}
    />
  );
}
