// Source: lectures/S6/lecture.md lines 1150-1152 (### Step N)
// Type: title (섹션 표지)
// Profile: hierarchical / comparison / medium-high / balanced

import Cover from '@/components/slides/patterns/Cover';

export default function S6ActivityStepNCover() {
  return (
    <Cover
      eyebrow="Step N"
      title="정리와 비용 비교"
      subtitle="본 단계 목표는 산출물 확인과 토큰 비교, 회고."
      objectives={[
        '산출물 7개 정리 및 다음 단계 활용',
        '자동화 토큰 비용 비교 분석',
        '회고 3개 질문으로 자동화 본질 인식',
      ]}
    />
  );
}
