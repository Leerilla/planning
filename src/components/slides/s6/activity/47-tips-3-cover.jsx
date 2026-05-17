// Source: S6 lecture.md T3.9 Tips 3
// Type: title (섹션 표지)
// Profile: hierarchical / comparison / medium-high / balanced

import Cover from '@/components/slides/patterns/Cover';

export default function S6ActivityTips3Cover() {
  return (
    <Cover
      eyebrow="Tips 3"
      title="hooks"
      objectives={[
        '두 핵심 패턴 — PostToolUse 검증 + Stop 커밋',
        'CLAUDE.md vs hook — 70% 권고 vs 100% 강제',
        'matcher 정규식 주의 — 공백 X',
      ]}
    />
  );
}
