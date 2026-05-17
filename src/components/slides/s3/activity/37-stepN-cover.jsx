// Source: lectures/S3/lecture.md lines 1301-1303 (### Step N: 정리와 비용 비교)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S3ActivityStepNCover() {
  return (
    <Cover
      eyebrow="Step N"
      title="정리와 비용 비교"
      subtitle="산출물 확인, 토큰 비교, 회고"
      objectives={[
        'N-1. 결과 정리 (산출물 4개 매핑)',
        'N-2. /cost 비교 (시작 → 종료 토큰 차이)',
        'N-3. 회고 3 질문 (좋은 답 vs 나쁜 답)',
      ]}
    />
  );
}
