// Source: lectures/S1/lecture.md § "기획이란 무엇인가 - 기획 5단계 프레임" (lines 51-61)
// Curator decision: KeyMessage 패턴 — 5단계 프레임 도입
// Phase K Deductive: 3정의(기획·페르소나·가설) 후 사슬로 연결

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S1Theory16KeyMessage() {
  return (
    <KeyMessage
      eyebrow="정의들을 사슬로"
      message={['기획은 5단계 프레임으로', '체계적으로 진행된다']}
      highlight="5단계 프레임"
      subtext="한 단계의 출력이 다음 단계의 입력이 된다 — 정의들이 사슬로 연결되는 구조."
    />
  );
}
