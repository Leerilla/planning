// Source: lectures/S3/lecture.md lines 493-510 (안티패턴 vs 올바른 활용)
// Type: example (Warning bad/good 좌우)

import Warning from '@/components/slides/patterns/Warning';

export default function S3TheoryC4Antipattern() {
  return (
    <div className="grid grid-cols-2 gap-8 h-full items-stretch">
      <Warning
        level="안티패턴"
        title={`"ChatGPT한테 다 시키면 되는데 NotebookLM이 왜 따로 필요해?"`}
        description="한 도구로 분석과 정제를 모두 처리하려는 시도."
        reason="환각 위험 + 출처 추적 불가 → PRD 신뢰도 흔들림"
        avoidance={[
          '학습 데이터와 본인 데이터가 섞임',
          '인용·정형화의 검증 절차가 사라짐',
          '결과: PRD가 메모로 전락',
        ]}
      />

      <Warning
        level="올바른 활용"
        tone="good"
        title={`"1차 자료 분석은 NotebookLM, 정제는 Manyfast"`}
        description="도구의 역할을 섞지 않는다."
        reason="각 도구의 검증 절차가 자연스럽게 작동"
        avoidance="분석 산출물(페인포인트 + 출처)을 Manyfast 입력으로 그대로 넘긴다"
      />
    </div>
  );
}
