// Source: lectures/S2/lecture.md lines 23-25
// Type: concept (Definition — 검증의 정의)
// D-037: Definition pattern eyebrow + term + definition + notes + highlights 활용

import Definition from '@/components/slides/patterns/Definition';

export default function S2TheoryC1Definition() {
  return (
    <Definition
      term="검증 (Validation)"
      definition={[
        '가설이 시장에서 진짜 통하는지를',
        '데이터로 시험하는 일.',
      ]}
      highlights={['데이터']}
      notes={[
        '핵심 단어 = 데이터. 작업자의 직감이 아니라 페르소나의 행동·발언으로 답이 돌아와야 한다.',
        '의견 수집과의 갈림길은 답이 데이터로 측정 가능한가에서 갈린다.',
      ]}
    />
  );
}
