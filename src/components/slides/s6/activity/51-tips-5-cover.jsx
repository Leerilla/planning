// Source: S6 lecture.md T3.9 Tips 5
// Type: title (섹션 표지)
// Profile: hierarchical / comparison / medium-high / balanced

import Cover from '@/components/slides/patterns/Cover';

export default function S6ActivityTips5Cover() {
  return (
    <Cover
      eyebrow="Tips 5"
      title="빌드 효율"
      objectives={[
        '시간 절반 = 자동화 작동 — 화면 2가 화면 1의 절반 이하',
      ]}
    />
  );
}
