// Source: lectures/S1/lecture.md lines 1-5
// Type: cover (# 세션 전체 표지)
// Profile: hierarchical / comparison / medium / balanced
// Curator decision: Cover 패턴 — 세션 제목 + 한 줄 요약 (subtitle)

import Cover from '@/components/slides/patterns/Cover';

export default function S1TheorySessionCover() {
  return (
    <Cover
      title="기획의 본질과 문제 발견"
      subtitle="누구의 어떤 문제를 어떻게 풀 것인가의 답을 정의하는 일"
    />
  );
}
