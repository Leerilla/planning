// Source: lectures/S1/lecture.md § "AI 시대 기획의 변화 - 변하지 않은 것" (line 108)
// Curator decision: KeyMessage 패턴 — 속도와 깊이의 분리
// Phase K: §2 — 변하지 않은 것의 시작

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S1Theory25KeyMessage() {
  return (
    <KeyMessage
      eyebrow="가속이 놓친 것"
      message={['빨라진 속도는', '깊이를 대신하지 않는다']}
      highlight="깊이를"
      subtext="판단은 사람이 하고, 가속은 속도만 바꾼다."
    />
  );
}
