// Source: lectures/S1/lecture.md lines 93-101
// Type: cover (### 섹션 표지)
// Profile: hierarchical / comparison / medium / balanced
// Curator decision: Cover 패턴, eyebrow="Section", subtitle from first paragraph

import Cover from '@/components/slides/patterns/Cover';

export default function S1TheoryC2bCover() {
  return (
    <Cover
      eyebrow="Section 2"
      title="문제는 한 번에 정의되지 않는다"
      subtitle="첫 문제 진술은 대부분 증상에서 멈춘다"
    />
  );
}
