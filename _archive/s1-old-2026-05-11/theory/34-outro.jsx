// Source: lectures/S1/curation-spec.md § 1.1.1 (Slide 34 - Outro)
// Curator decision: Outro 패턴 — 활동 1로 이어짐
// Phase K: 이론 마무리 + 활동 안내

import Outro from '@/components/slides/patterns/Outro';

export default function S1Theory34Outro() {
  return (
    <Outro
      message="수고하셨습니다"
      summary={[
        '기획의 정의와 5단계 프레임 이해',
        'AI 시대의 속도와 판단의 분리',
        '출처 검증의 실전 기초'
      ]}
      next="이제 직접 1차 가설을 손에 쥐어 봅시다. 활동 1을 시작합니다."
    />
  );
}
