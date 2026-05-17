// Source: lectures/S3/lecture.md lines 327-337 (과거: PM이 모든 것을 직접)
// Type: concept (Definition + 작업 흐름 5단계)

import Definition from '@/components/slides/patterns/Definition';

export default function S3TheoryC3Past() {
  return (
    <Definition
      eyebrow="과거 (~2022)"
      term="PM이 모든 것을 직접"
      definition={[
        '분석부터 정제까지',
        '한 사람이 한 도구 없이 처리했다.',
      ]}
      notes={[
        '사용자 인터뷰 녹음 듣기 → 노트 받아 적기',
        '페인포인트 패턴 추출 → PRD 양식 정형화',
        '5요소 각각을 손으로 작성',
      ]}
    />
  );
}
