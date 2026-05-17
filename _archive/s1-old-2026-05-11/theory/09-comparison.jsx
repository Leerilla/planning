// Source: lectures/S1/lecture.md § "기획이란 무엇인가" (lines 34-36)
// Curator decision: Comparison 패턴 — 검증 가능 vs 불가능 대비
// Phase K Deductive: 정의 적용의 결과

import Comparison from '@/components/slides/patterns/Comparison';

export default function S1Theory09Comparison() {
  return (
    <Comparison
      title="검증 가능 vs 불가능"
      bad={{
        label: '검증 불가능',
        statement: '할 일 관리 앱을 만들자',
        points: [
          '누구를 위한 것인지 불명확',
          '기능에서 출발 (사람의 문제 X)',
          '만들기 전까지 답을 모름'
        ]
      }}
      good={{
        label: '검증 가능',
        statement: '바쁜 PM 김지수를 위해 회의 후 액션아이템을 자동 정리',
        points: [
          '페르소나 명확 (PM 김지수)',
          '페르소나에게 물어보면 데이터로 답이 옴',
          '가설의 진위를 판단 가능'
        ]
      }}
    />
  );
}
