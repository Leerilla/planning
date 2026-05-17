// Source: lectures/S1/lecture.md § "출처 검증의 실전 - 거짓 정보 패턴" (lines 140, 142, 144)
// Curator decision: WarningBreakdown 패턴 — 거짓 정보 패턴 3가지 (위험도 분해)
// Phase K: §3 시작 — 거짓 패턴 인식

import WarningBreakdown from '@/components/slides/patterns/WarningBreakdown';

export default function S1Theory29WarningBreakdown() {
  return (
    <WarningBreakdown
      level="거짓 정보 위험"
      title="AI 답변의 거짓 정보 3가지 패턴"
      description="출처를 검증하지 않으면 거짓이 전체에 퍼진다. 워크시트에서 PRD까지 모두 영향을 받음"
      breakdownPoints={[
        '그럴듯한 통계: "한국 20-30대 PM의 78%가 회의록 정리에 30분 이상 쓴다" — 출처 없음 또는 조작 [위험도: 최대]',
        '가짜 인용: "Marc Andreessen: \'Product-Market Fit은...\'" — 맥락 왜곡 또는 창작 [위험도: 중]',
        '출처 조작: "https://fake-research.kr/2024-report" — 404 또는 무관한 페이지 [위험도: 낮음 but 들키면 신뢰도 0]'
      ]}
      avoidance="각 패턴별로 의심하고, 출처 URL을 반드시 클릭해 확인"
    />
  );
}
