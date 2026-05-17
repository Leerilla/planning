// Source: lectures/S1/lecture.md § "학습 목표" (lines 9-16)
// Curator decision: SessionMeta 패턴 사용 — 학습 목표 3개 + 산출물 카드

import SessionMeta from '@/components/slides/patterns/SessionMeta';

export default function S1Theory02SessionMeta() {
  return (
    <SessionMeta
      objectives={[
        '좋은 기획과 나쁜 기획을 한 문장으로 구분한다',
        '기획 5단계(문제, 페르소나, 가설, 검증, 정제)에서 작업자의 위치를 식별한다',
        'AI가 만든 리서치의 출처를 직접 클릭해 검증한다'
      ]}
      deliverables={[
        '1차 가설: 문제, 페르소나, 핵심 가설 3개 정리',
        '페르소나 프로필: 구체적 사용자상 5줄 작성',
        '출처 검증: AI 리서치의 신뢰도 판단'
      ]}
    />
  );
}
