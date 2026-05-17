// Source: lectures/S1/lecture.md § "기획이란 무엇인가 - 기획 5단계 프레임" (line 71)
// Curator decision: Definition 패턴 — 가설의 정의 (§1-C 시작)
// Phase K Deductive: 3번째 정의 → 5단계 사슬 연결

import Definition from '@/components/slides/patterns/Definition';

export default function S1Theory15Definition() {
  return (
    <Definition
      term="가설(Hypothesis)"
      definition="검증 가능한 형태로 표현된 추측"
      highlights={['검증 가능', '추측']}
      notes={[
        '"이 사람들은 ~할 것이다" 형태로 표현 가능해야 함',
        '틀렸을 때 데이터가 명확히 말해줌',
        '한 칸이라도 모호하면 검증 불가능'
      ]}
    />
  );
}
