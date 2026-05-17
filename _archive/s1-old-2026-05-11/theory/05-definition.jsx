// Source: lectures/S1/lecture.md § "기획이란 무엇인가" (lines 24, 45)
// Curator decision: Definition 패턴 — 기획의 정의 (Deductive 흐름 시작)
// Phase K: 정의 → 개념 → 예시 흐름으로 재구성

import Definition from '@/components/slides/patterns/Definition';

export default function S1Theory05Definition() {
  return (
    <Definition
      term="기획(Planning)"
      definition="누구의 어떤 문제를 어떻게 풀 것인가의 답을 정의하는 일"
      highlights={['누구', '어떤 문제', '어떻게']}
      notes={[
        '누구 = 페르소나: 구체적 한 사람 (예: 5-30인 스타트업의 PM)',
        '어떤 문제 = 페인포인트: 사람이 실제로 겪는 불편과 어려움',
        '어떻게 = 솔루션: 검증 가능한 구체적 방법'
      ]}
    />
  );
}
