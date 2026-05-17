// Source: lectures/S7/lecture.md lines 284-289 (Section 3 표지)
// Type: title (Cover)
// Profile: hierarchical / comparison / medium / balanced

import Cover from '@/components/slides/patterns/Cover';

export default function S7TheoryC3Cover() {
  return (
    <Cover
      eyebrow="Section 3"
      title="docs/prd.md 기반 시나리오 검증 루프"
      objectives={[
        '코드 단위 검증과 시나리오 단위 검증의 차이를 안다',
        'scenario-verifier sub-agent의 책임을 설명한다',
        '검증 루프의 반복 절차를 외운다',
      ]}
    />
  );
}
