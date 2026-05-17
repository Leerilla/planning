// Source: lectures/S6/lecture.md line 339 (### 3️⃣ hooks와 5개 lifecycle 이벤트)
// Type: title (챕터 표지, D-033)
// D-035: "3️⃣" → "Section 3"

import Cover from '@/components/slides/patterns/Cover';

export default function S6TheoryC3Cover() {
  return (
    <Cover
      eyebrow="Section 3"
      title="hooks와 5개 lifecycle 이벤트"
      objectives={[
        'hooks의 결정적 동작을 설명한다',
        '5개 lifecycle 이벤트를 구분한다',
        'matcher 정규식과 timeout을 설정한다',
      ]}
    />
  );
}
