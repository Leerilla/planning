// Source: lectures/S1/lecture.md § "사슬 메타포" (lines 51-67) + 활동 워크시트
// Curator decision: Comparison — 약한 고리 후 예시. 사슬이 끊어지는 흐름을 명확/모호로 대비
// Phase L2 신규 (강사 콘텐츠 추가 #3)

import Comparison from '@/components/slides/patterns/Comparison';

export default function S1Theory18bWeaknessExample() {
  return (
    <Comparison
      title="예시 — 단계 출력이 모호하면 어떻게 사슬이 끊어지는가"
      bad={{
        label: '모호한 사슬',
        statement: '문제 한 줄이 비어 있다 → 페르소나도 모호 → 가설도 모호 → 검증 대상 없음',
        points: [
          '문제: "사람들이 더 편해지면 좋겠다" — 누구의 어떤 페인인지 미상',
          '페르소나: "직장인" — 직군·환경·채널 모두 비어 있음',
          '가설: "쓸 만하다고 느낄 것이다" — 검증 불가능한 형식',
        ],
      }}
      good={{
        label: '명확한 사슬',
        statement: '문제 한 줄이 채워짐 → 페르소나 5축 명확 → 가설 검증 가능 → 데이터 수집 시작',
        points: [
          '문제: "5-30인 PM이 회의 후 정리에 30분 이상 쓴다"',
          '페르소나: 직군·환경·도구·빈도·검증채널 5축 모두 채움',
          '가설: "월 1만원 이상 지불 의향이 있을 것이다" — 데이터로 확인 가능',
        ],
      }}
    />
  );
}
