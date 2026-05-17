// Source: lectures/S1/lecture.md § "기획의 정의와 좋은/나쁜 기획의 갈림길" (line 32)
// Curator decision: KeyMessage 패턴 사용 — 첫 단정 강조 (기능은 답, 사람과 문제는 질문)

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S1Theory03KeyMessage() {
  return (
    <KeyMessage
      eyebrow="FIRST PRINCIPLE"
      message={[
        '기능은 답이고,',
        '사람과 문제는 질문이다'
      ]}
      highlight="질문이다"
      footer="질문부터 시작하는 기획"
    />
  );
}
