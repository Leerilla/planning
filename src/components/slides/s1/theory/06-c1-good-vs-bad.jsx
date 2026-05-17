// Source: lectures/S1/lecture.md lines 52-61
// Type: comparison
// Profile: hierarchical / comparison / medium / balanced
// Curator decision (T2.1): Comparison 패턴 — 2열 (좋은/나쁜) 4행

import Comparison from '@/components/slides/patterns/Comparison';

export default function S1TheoryC1GoodVsBad() {
  return (
    <Comparison
      title="좋은 기획 vs 나쁜 기획"
      good={{
        label: "좋은 기획",
        statement: "페르소나에서 출발하고 검증 가능하다",
        points: [
          "출발점: 페르소나",
          "검증 가능성: 가능",
          "묻는 질문: 이 페인포인트가 진짜인가?",
          "실패 시점: 만들기 전"
        ]
      }}
      bad={{
        label: "나쁜 기획",
        statement: "기능에서 출발하고 검증 불가능하다",
        points: [
          "출발점: 기능",
          "검증 가능성: 불가능",
          "묻는 질문: 이 도구가 마음에 드는가?",
          "실패 시점: 만든 후"
        ]
      }}
    />
  );
}
