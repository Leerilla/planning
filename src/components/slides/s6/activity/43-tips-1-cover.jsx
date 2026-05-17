// Source: S6 lecture.md T3.9 Tips 1
// Type: title (섹션 표지)
// Profile: hierarchical / comparison / medium-high / balanced

import Cover from '@/components/slides/patterns/Cover';

export default function S6ActivityTips1Cover() {
  return (
    <Cover
      eyebrow="Tips 1"
      title="확장과 자동화"
      objectives={[
        '두 단어 분리 — 확장(패턴 복사) vs 자동화(도구 위임)',
        '필요성에서 출발 — 9개 미작업 Task의 반복 압박',
      ]}
    />
  );
}
