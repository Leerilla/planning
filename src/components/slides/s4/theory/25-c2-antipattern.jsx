// Source: lectures/S4/lecture.md lines 258-272 (#### 안티패턴 vs 올바른 검증)
// Type: example (Warning bad/good 좌우)

import Warning from '@/components/slides/patterns/Warning';

export default function S4TheoryC2Antipattern() {
  return (
    <div className="grid grid-cols-2 gap-8 h-full items-stretch">
      <Warning
        level="안티패턴"
        title={`"CLAUDE.md를 동료에게 보여줘서 30초 안에 이해되는지 물어본다"`}
        description="사람 검증에 의존. 즉시 가능 X, 객관성 흔들림."
        reason="동료 시간 확보 비용 + 사전 지식 영향"
        avoidance={[
          '비용·속도 비현실적',
          '동료의 도메인 이해도가 결과 좌우',
          '반복 비용 큼',
        ]}
      />

      <Warning
        level="올바른 검증"
        tone="good"
        title={`"AI에게 CLAUDE.md만 읽혀 요약 시킨다. 작업자 의도와 일치할 때까지 수정 반복"`}
        description="즉시·반복·객관적. AI 검증 루프 5단계."
        reason="컨텍스트만으로 판단 — 사전 지식 영향 X"
        avoidance="의도 일치까지 반복하면 모호한 부분이 자연스럽게 드러난다"
      />
    </div>
  );
}
