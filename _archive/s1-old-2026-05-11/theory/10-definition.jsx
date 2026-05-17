// Source: lectures/S1/lecture.md § "기획이란 무엇인가" (lines 26, 46)
// Curator decision: Definition 패턴 — 페르소나 정의 (§1-B 시작)
// Phase K Deductive: 페르소나 정의 후 5축으로 분해

import Definition from '@/components/slides/patterns/Definition';

export default function S1Theory10Definition() {
  return (
    <Definition
      term="페르소나(Persona)"
      definition="서비스가 풀려는 문제를 가진 구체적 사용자"
      highlights={['구체적', '사용자']}
      notes={[
        '도출의 결과로 도출된 구체적 인물상',
        '단순 통계(30대 직장인)가 아니라 특정한 한 명 (5-30인 스타트업의 PM)',
        '검증 가능한 대상으로 존재'
      ]}
    />
  );
}
