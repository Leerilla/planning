// Source: lectures/S3/lecture.md lines 43-55
// Type: concept (Definition — PRD의 본질은 명확성)
// 모호함 → 임의 해석 3행 표를 notes로 흡수

import Definition from '@/components/slides/patterns/Definition';

export default function S3TheoryC1EssenceClarity() {
  return (
    <Definition
      eyebrow="본질"
      term="PRD가 명확해야 하는 이유"
      definition={[
        '모호함이 임의 해석을 낳기 때문이다.',
      ]}
      highlights={['임의 해석']}
      notes={[
        '"쉽고 편리한 도구" → 개발자는 본인이 생각하는 쉬움을 채워 넣는다.',
        '"사용자 친화적 UI" → 디자이너는 본인 취향의 UI를 만든다.',
        '"빠른 응답" → AI 에이전트는 "빠름" 정의 없이 임의 코드를 출력한다.',
        'AI는 모호함의 결과를 더 빨리 드러낸다. 인간은 질문하지만, AI는 즉시 임의 해석한다.',
      ]}
    />
  );
}
