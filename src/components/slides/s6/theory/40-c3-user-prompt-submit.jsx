// Source: lectures/S6/lecture.md lines 411-418
// Type: concept (default, 2-area: definition + use cases)
// Profile: tone=balanced

import Definition from '@/components/slides/patterns/Definition';

export default function S6TheoryC3UserPromptSubmit() {
  return (
    <Definition
      term="UserPromptSubmit"
      definition={[
        '프롬프트 입력 직후 트리거하는 hook.',
      ]}
      notes={[
        '사용 사례: 프롬프트 점검 — "위임 3원칙 확인했나요?" 안내 메시지 자동 표시',
        '본 학습에서는 선택 사항 (자가 학습 영역에서 구현)',
      ]}
    />
  );
}
