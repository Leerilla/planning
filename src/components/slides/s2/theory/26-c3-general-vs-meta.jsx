// Source: lectures/S2/lecture.md lines 123-136
// Type: comparison (Comparison BAD/GOOD — 일반 vs 메타 프롬프팅)

import Comparison from '@/components/slides/patterns/Comparison';

export default function S2TheoryC3GeneralVsMeta() {
  return (
    <Comparison
      title="일반 프롬프팅 vs 메타 프롬프팅"
      bad={{
        label: '일반 프롬프팅',
        statement: '"취준생에게 보낼 인터뷰 요청 메일을 써줘"',
        points: [
          'AI가 답을 직접 만든다 (1단계)',
          'AI 학습 평균치 출력 → 평범한 카피',
          '응답률 5%대에서 멈춤',
        ],
      }}
      good={{
        label: '메타 프롬프팅',
        statement: '"카피 작성 가이드라인을 먼저 정리, 그 뒤 카피를 작성해줘"',
        points: [
          'AI가 가이드라인 → 카피 (2단계)',
          '가이드라인 위에서 작성 → 정제된 카피',
          '응답률 10-15%대까지',
        ],
      }}
    />
  );
}
