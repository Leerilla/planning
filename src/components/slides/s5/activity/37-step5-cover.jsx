// Source: lectures/S5/lecture.md lines 900-902 (### Step 5: 셀프 코드 리뷰)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S5ActivityStep5Cover() {
  return (
    <Cover
      eyebrow="Step 5"
      title="셀프 코드 리뷰"
      subtitle="병합 코드를 PRD/CLAUDE.md 기준으로 다시 점검"
      objectives={[
        '5-1. 셀프 리뷰 5개 점검',
        '5-2. 미통과 항목 메모',
      ]}
    />
  );
}
