// Source: lectures/S2/lecture.md lines 29-30
// Type: comparison (Comparison BAD/GOOD — 친구 사례)
// D-037: Comparison title + bad + good 활용

import Comparison from '@/components/slides/patterns/Comparison';

export default function S2TheoryC1ValidationVsOpinion() {
  return (
    <Comparison
      title="의견 수집과 검증의 갈림길"
      bad={{
        label: '의견 수집',
        statement: '"이 서비스 어때?" → "괜찮네"',
        points: [
          '친구는 작업자와의 관계를 의식해 답한다',
          '"괜찮네"는 가설을 확정하지도 부정하지도 않는다',
          '의견은 모이지만 가설의 진위는 그대로 남는다',
        ],
      }}
      good={{
        label: '검증',
        statement: '페르소나 부합 + 측정 가능 답을 모은다',
        points: [
          '페르소나에 부합하는 모르는 사람에게 묻는다',
          '가설 키워드(지불 의향·선호·빈도)를 데이터로 식별',
          '검증된 가설은 PRD 정제로 자신 있게 들어간다',
        ],
      }}
    />
  );
}
