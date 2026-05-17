// Source: lectures/S3/lecture.md lines 529-536 (4단계 정제 워크플로 표 — 도입)
// Type: concept (Definition)

import Definition from '@/components/slides/patterns/Definition';

export default function S3TheoryC5WorkflowIntro() {
  return (
    <Definition
      eyebrow="실전 워크플로"
      term="4단계 정제 워크플로"
      definition={[
        '데이터 → 페인포인트 → PRD 초안 → 검토.',
        '네 단계가 분리될 때 사고 자원이 절약된다.',
      ]}
      highlights={['4단계']}
      notes={[
        '1단계 데이터 업로드 — NotebookLM',
        '2단계 페인포인트 추출 — NotebookLM',
        '3단계 PRD 생성 — Manyfast',
        '4단계 검토와 수정 — 작업자 직접',
      ]}
    />
  );
}
