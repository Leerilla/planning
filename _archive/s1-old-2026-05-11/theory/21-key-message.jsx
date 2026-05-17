// Source: lectures/S1/lecture.md § "AI 시대 기획의 변화 - 빨라진 것" (lines 82-95)
// Curator decision: KeyMessage 패턴 — AI 가져온 5가지 사이클 가속
// Phase K: §2 시작 — AI 시대 기획의 변화

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S1Theory21KeyMessage() {
  return (
    <KeyMessage
      eyebrow="가속의 5가지 영역"
      message={['AI가 가져온 변화:', '5가지 사이클이 급속도로 가속됐다']}
      highlight="5가지 사이클"
      subtext="기획의 품질은 바뀌지 않았지만, 한 바퀴 도는 속도는 극적으로 빨라졌다."
    />
  );
}
