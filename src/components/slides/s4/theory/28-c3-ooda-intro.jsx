// Source: lectures/S4/lecture.md lines 290-294 (#### OODA 루프란)
// Type: concept (Definition)

import Definition from '@/components/slides/patterns/Definition';

export default function S4TheoryC3OodaIntro() {
  return (
    <Definition
      eyebrow="OODA 루프"
      term="의사결정의 사이클을 4단계로 정의하는 프레임워크"
      definition={[
        'Observe → Orient → Decide → Act.',
        '미군 전투 조종사 John Boyd가 개발.',
      ]}
      highlights={['Observe → Orient → Decide → Act']}
      notes={[
        '본 학습에서는 Claude Code 운영 사이클로 적용.',
        '에이전트의 자율과 작업자 개입의 경계를 분석하는 틀.',
      ]}
    />
  );
}
