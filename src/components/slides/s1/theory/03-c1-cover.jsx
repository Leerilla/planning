// Source: lectures/S1/lecture.md lines 17-23
// Type: cover (### 섹션 표지)
// Profile: hierarchical / comparison / medium / balanced
// Curator decision: Cover 패턴 재사용 (number/emoji 제거 — 강사 요청)

import Cover from '@/components/slides/patterns/Cover';

export default function S1TheoryC1Cover() {
  return (
    <Cover
      title="기획이란 무엇인가"
      objectives={[
        '좋은 기획과 나쁜 기획을 한 문장으로 구분한다',
        '문제를 5 Whys로 한 단계 더 깊게 파고든다',
        '가설 페르소나의 의미와 위치를 이해한다',
      ]}
    />
  );
}
