// Source: lectures/S3/lecture.md lines 66-86 (안티패턴 vs 명확한 PRD)
// Type: example (Warning bad/good 좌우 — #34 동일 디자인)

import Warning from '@/components/slides/patterns/Warning';

export default function S3TheoryC1Antipattern() {
  return (
    <div className="grid grid-cols-2 gap-8 h-full items-stretch">
      <Warning
        level="안티패턴"
        title={`"쉽고 편리한 카피 생성 도구를 만들어줘"`}
        description='"쉬움"·"편리함"의 기준이 없어 모든 이해관계자가 임의 해석한다.'
        reason="페르소나·입력·시간·출력 어느 것도 명시 X"
        avoidance={[
          '개발자: 본인이 쉽다고 느끼는 UI',
          '디자이너: 본인 취향의 편리함',
          'AI 에이전트: 임의 해석된 코드',
        ]}
      />

      <Warning
        level="명확한 PRD"
        tone="good"
        title={`"월 매출 100-500만원 1인 스마트스토어 셀러가 상품 사진과 키워드 5개를 입력하면 5초 이내에 차별화 카피 3개 후보를 받는 웹 도구"`}
        description="페르소나·입력·시간·출력이 모두 명시되어 같은 그림을 공유한다."
        reason="모든 이해관계자가 동일한 성공 기준을 측정 가능"
        avoidance="페르소나·입력·시간 기준·출력 개수 — 네 축이 모두 갖춰져야 한다"
      />
    </div>
  );
}
