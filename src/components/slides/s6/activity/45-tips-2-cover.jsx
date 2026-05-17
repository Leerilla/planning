// Source: S6 lecture.md T3.9 Tips 2
// Type: title (섹션 표지)
// Profile: hierarchical / comparison / medium-high / balanced

import Cover from '@/components/slides/patterns/Cover';

export default function S6ActivityTips2Cover() {
  return (
    <Cover
      eyebrow="Tips 2"
      title="Agent 설계"
      objectives={[
        '6원칙 모두 적용 — 한 원칙 무너지면 위험',
        'tools 최소 권한 — 코드 리뷰어가 코드 수정 못 하게',
      ]}
    />
  );
}
