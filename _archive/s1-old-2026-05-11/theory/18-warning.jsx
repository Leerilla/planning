// Source: lectures/S1/lecture.md § "기획이란 무엇인가 - 기획 5단계 프레임" (line 63)
// Curator decision: Warning 패턴 — 약한 고리 메타포
// Phase K Deductive: 5단계 후 경고 — 한 단계라도 흐릿하면 전체 결정

import Warning from '@/components/slides/patterns/Warning';

export default function S1Theory18Warning() {
  return (
    <Warning
      level="약한 고리"
      title="각 단계의 출력이 모호하면 다음 단계가 깨진다"
      description="문제가 모호하면 페르소나도 모호하고, 페르소나가 모호하면 가설도 모호하다. 사슬은 가장 약한 고리에서 끊어진다."
      avoidance="한 단계라도 흐릿하게 두면 그 약한 고리가 전체 결과를 결정한다"
    />
  );
}
