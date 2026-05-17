// Source: lectures/S3/lecture.md lines 26-34
// Type: concept (Definition — PRD의 정의)

import Definition from '@/components/slides/patterns/Definition';

export default function S3TheoryC1Definition() {
  return (
    <Definition
      term="PRD (Product Requirements Document)"
      definition={[
        '제품을 만드는 모든 이해관계자가',
        '같은 그림을 보게 만드는 합의 문서.',
      ]}
      highlights={['합의']}
      notes={[
        '핵심 단어는 합의. 모든 이해관계자가 같은 해석을 갖도록 명시하는 일이 본질이다.',
        '이해관계자에는 PM·개발자·디자이너·경영진·미래의 본인·AI 에이전트가 모두 포함된다.',
      ]}
    />
  );
}
