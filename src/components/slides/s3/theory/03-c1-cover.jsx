// Source: lectures/S3/lecture.md lines 18-24 (### 1️⃣ PRD란 무엇인가)
// Type: title (챕터 표지, D-033 자동 생성)
// D-035: emoji "1️⃣" 제거 → "Section 1" 텍스트

import Cover from '@/components/slides/patterns/Cover';

export default function S3TheoryC1Cover() {
  return (
    <Cover
      eyebrow="Section 1"
      title="PRD란 무엇인가"
      objectives={[
        'PRD의 본질을 한 문장으로 설명한다',
        '모호함이 만드는 임의 해석을 인식한다',
        '명확한 PRD와 안티패턴을 구분한다',
      ]}
    />
  );
}
