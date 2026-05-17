// Source: lectures/S1/lecture.md § "AI 시대 기획의 변화 - 변하지 않은 것" (line 112)
// Curator decision: KeyMessage 패턴 강화 — 두 번째 단정 (AI는 속도만 바꾼다)
// Phase K: §2 — 핵심 메시지 강화

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S1Theory26KeyMessage() {
  return (
    <KeyMessage
      eyebrow="SECOND PRINCIPLE"
      message={[
        'AI는 기획을 대신하지 않는다.',
        '속도만 바꾼다.'
      ]}
      highlight="속도만"
      subtext="모으는 일은 AI로 가속하고, 판단하는 일은 깊게 한다."
      footer="기획의 품질을 결정하는 것은 여전히 당신의 판단"
    />
  );
}
