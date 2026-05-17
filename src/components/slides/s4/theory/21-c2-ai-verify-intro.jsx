// Source: lectures/S4/lecture.md lines 204-208 (#### AI 검증 루프란)
// Type: quote (KeyMessage)

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S4TheoryC2AiVerifyIntro() {
  return (
    <KeyMessage
      eyebrow="AI 검증 루프"
      size="sm"
      message={[
        'AI가 CLAUDE.md만 읽고',
        '프로젝트를 한 문장으로 요약할 수 있다면',
        '헌법으로서 충분히 작동한다',
      ]}
      highlight="한 문장으로 요약"
      examples={[
        {
          label: '본질',
          text: 'CLAUDE.md를 만든 뒤 즉시 검증하는 방법',
        },
        {
          label: '판단',
          text: '요약이 의도와 일치 → 통과 / 불일치 → 모호한 부분 존재',
        },
      ]}
    />
  );
}
