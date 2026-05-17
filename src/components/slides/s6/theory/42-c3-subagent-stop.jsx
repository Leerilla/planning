// Source: lectures/S6/lecture.md lines 429-436
// Type: concept (default, 2-area: definition + use cases)
// Profile: tone=balanced

import Definition from '@/components/slides/patterns/Definition';

export default function S6TheoryC3SubagentStop() {
  return (
    <Definition
      term="SubagentStop"
      definition={[
        'sub-agent 작업 종료 시 트리거하는 hook.',
      ]}
      notes={[
        '사용 사례: sub-agent 결과 후처리 — 불일치 보고를 docs/에 자동 기록',
        '본 학습에서는 선택 사항 (자가 학습 영역에서 구현)',
      ]}
    />
  );
}
