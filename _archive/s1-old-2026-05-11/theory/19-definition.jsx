// Source: lectures/S1/lecture.md § "기획이란 무엇인가 - 기획 5단계 프레임" (line 65)
// Curator decision: Definition 패턴 — 1차 가설의 정의
// Phase K Deductive: 5단계 완성의 의미 — 출발점으로서의 1차 가설

import Definition from '@/components/slides/patterns/Definition';

export default function S1Theory19Definition() {
  return (
    <Definition
      term="1차 가설(First Hypothesis)"
      definition="검증 전 추측 단계의 가설. 완성이 아니라 출발"
      highlights={['출발', '완성이 아니라']}
      notes={[
        '1차 가설이 짧고 구체적일수록 검증이 쉬워진다',
        '1차 가설이 길고 모호하면 무엇을 검증할지부터 정해야 해서 시간이 두 배로 든다',
        '검증하면서 진입하는 것이 자연스러운 흐름이다'
      ]}
    />
  );
}
