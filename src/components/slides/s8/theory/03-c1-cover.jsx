// Source: lectures/S8/captures/lecture.md L17-23 (자동 D-033, ### 1️⃣ 섹션 표지)
// Type: Cover

import Cover from '@/components/slides/patterns/Cover';

export default function S8TheoryC1Cover() {
  return (
    <Cover
      eyebrow="이론 1"
      title="풀스택 구조와 FE/BE 분리"
      subtitle="사용자 화면과 서버가 분리된 구조 — 비밀은 어디에?"
      objectives={[
        'FE와 BE의 차이를 설명한다',
        '신뢰 경계의 의미를 안다',
        '비밀이 BE에 있어야 하는 이유를 풀이한다',
      ]}
    />
  );
}
