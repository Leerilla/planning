// Source: lectures/S9/lecture.md L886-888 (자동 D-033, ### Step 5 표지)
// Type: Cover

import Cover from '@/components/slides/patterns/Cover';

export default function S9ActivityStep5Cover() {
  return (
    <Cover
      eyebrow="Step 5"
      title="페르소나·PRD 갱신"
      subtitle="분석 결과를 docs/persona.md, docs/prd.md에 반영 — 살아있는 페르소나 진화"
      objectives={[
        'persona.md 데이터 기반 갱신 (30% 기준)',
        '갱신 검토 (Pivot 신호 감지)',
        'prd.md 5요소 데이터 기반 갱신',
        '자동 커밋 + 근거 메시지 확인',
      ]}
    />
  );
}
