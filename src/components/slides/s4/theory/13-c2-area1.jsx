// Source: lectures/S4/lecture.md lines 113-119 (#### 1영역: 프로젝트 개요)
// Type: concept (Definition)

import Definition from '@/components/slides/patterns/Definition';

export default function S4TheoryC2Area1() {
  return (
    <Definition
      eyebrow="4영역 · 1 — 프로젝트 개요"
      term="PRD의 요약 — 한 단락"
      definition={[
        '페르소나, 핵심 기능 3개, 성공 지표.',
        '자세한 PRD는 docs/prd.md 참조 한 줄.',
      ]}
      highlights={['요약']}
      notes={[
        'PRD 전체를 복사하지 않는다 — 매 명령 자동 로드 비용 증가.',
        '요약 + 참조 한 줄이 균형.',
      ]}
    />
  );
}
