// Source: lectures/S2/lecture.md lines 38-40
// Type: comparison (Comparison BAD/GOOD — 검증 가능 vs 불가능)
// D-037: Comparison title + bad + good 활용

import Comparison from '@/components/slides/patterns/Comparison';

export default function S2TheoryC1VerifiableForm() {
  return (
    <Comparison
      title="가설을 적을 때 검증의 형식까지 결정된다"
      bad={{
        label: '검증 불가능',
        statement: '"~쓸 만하다"',
        points: [
          '핵심 동사가 추상 (좋아하다 / 원하다)',
          '측정 단위가 없음',
          '답이 데이터로 돌아오지 않음',
        ],
      }}
      good={{
        label: '검증 가능',
        statement: '"월 1만원 이상 지불할 의향이 있다"',
        points: [
          '핵심 동사가 행동 (지불하다 / 사용하다 / 선호하다)',
          '답이 3 카테고리로 분류 — 1만원 이상 / 그 이하 / 0원',
          '데이터로 가설 진위 측정 가능',
        ],
      }}
    />
  );
}
