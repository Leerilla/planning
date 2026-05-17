// Source: lectures/S2/lecture.md lines 168-169
// Type: example (Warning bad/good — 한 축 의존 vs 두 축 안전망)

import Warning from '@/components/slides/patterns/Warning';

export default function S2TheoryC3SafetyNet() {
  return (
    <div className="grid grid-cols-2 gap-8 h-full items-stretch">
      {/* 안티패턴 */}
      <Warning
        level="안티패턴"
        title='"응답이 0건이라 다음 단계로 못 갑니다"'
        description="능동 한 축에만 의존했다."
        reason="응답률 5-15% 현실에서 0건은 평균 변동 범위 안. 수동 데이터가 없으면 막힌다."
        avoidance={[
          "능동만 의존 → 응답 0건 = 다음 단계 막힘",
          "수동 데이터 없음 → 시장 폭 시야 0",
          "결과: 좌절 + 다음 단계 지연",
        ]}
      />

      {/* 안전망 */}
      <Warning
        level="두 축 안전망"
        tone="good"
        title='"능동 응답이 0건이어도 수동 데이터 200건이면 다음 단계 분석에 진입한다"'
        description="두 축 동시 가동 = 안전망."
        reason="수동 데이터가 시계를 채우는 동안 능동 응답을 기다린다"
        avoidance="능동 응답이 결국 0건이어도 분석을 멈추지 않는다"
      />
    </div>
  );
}
