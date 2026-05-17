// Source: lectures/S5/lecture.md lines 367-379 (#### 안티패턴 vs 동작 정의)
// Type: example (Warning bad/good 좌우)

import Warning from '@/components/slides/patterns/Warning';

export default function S5TheoryC3Antipattern() {
  return (
    <div className="grid grid-cols-2 gap-8 h-full items-stretch">
      <Warning
        level="안티패턴"
        title={`"디자인이 마음에 안 들어요. 더 예쁘게"`}
        description="본 단계 본질 놓침 — 디자인 정제로 빌드 시간 소진."
        reason="동작 3요소가 충족되기 전 디자인 정제에 시간"
        avoidance={[
          '빌드 시간 부족 → 핵심 기능 미완성',
          '정제 디자인이 페르소나 행동과 미스매치',
          '동작 합격선을 못 채움',
        ]}
      />

      <Warning
        level="올바른 운영"
        tone="good"
        title={`"본 단계 합격선은 동작하는 무언가. 디자인 정제는 그다음"`}
        description="동작 3요소 충족이 우선 — 디자인은 시안 수준."
        reason="단계별 합격선이 명확 — 다음 단계로 깔끔히 인계"
        avoidance="행동 데이터가 쌓인 다음 디자인 정제 — 효과 극대화"
      />
    </div>
  );
}
