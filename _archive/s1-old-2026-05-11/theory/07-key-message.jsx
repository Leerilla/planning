// Source: lectures/S1/lecture.md § "기획이란 무엇인가" (line 30)
// Curator decision: KeyMessage 패턴 — 신규 슬라이드 (Deductive 강화)
// Phase K: 정의-개념 후 부정 사례로 강화

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S1Theory07KeyMessage() {
  return (
    <KeyMessage
      eyebrow="개념 강화"
      message={['기능부터 정하면', '욕망에서 시작한다']}
      highlight="기능부터"
      footer="세 질문(누구·문제·어떻게) 중 하나라도 비면 기획이 아니라 욕망에 가까워진다."
    />
  );
}
