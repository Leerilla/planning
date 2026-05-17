// Source: lectures/S1/lecture.md § "출처 검증의 실전 - 출처 검증 3단계" (line 146)
// Curator decision: KeyMessage 패턴 강화 — 세 번째 단정 (출처 검증 필수)
// Phase K: §3 — 핵심 메시지 강화

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S1Theory32KeyMessage() {
  return (
    <KeyMessage
      eyebrow="THIRD PRINCIPLE"
      message={[
        'AI가 만든 답은',
        '출처를 검증하지 않으면 사용 불가'
      ]}
      highlight="검증하지 않으면"
      subtext="3단계 중 한 단계라도 거르면 신뢰도 0으로 떨어진다."
      footer="검증 우선주의(Verification First)가 원칙"
    />
  );
}
