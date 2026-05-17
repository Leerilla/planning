// Source: lectures/S1/lecture.md § "기획이란 무엇인가" (line 34)
// Curator decision: KeyMessage 패턴 (신규) — 페르소나 필요성 강조
// Phase K Deductive: 페르소나 정의 후 그 가치를 강화

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S1Theory11KeyMessage() {
  return (
    <KeyMessage
      eyebrow="왜 페르소나 필요한가?"
      message="페르소나에서 출발하면, 검증 가능해진다"
      highlight="검증 가능해진다"
      subtext="페르소나에 부합하는 실제 사람에게 물어보면 가설의 진위가 데이터로 돌아온다."
    />
  );
}
