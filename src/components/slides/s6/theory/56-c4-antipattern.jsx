// Source: lectures/S6/lecture.md lines 631-644
// Type: example (Warning bad/good) — Antipattern vs Verify-First
// Profile: hierarchical logic / example visual / balanced tone

import Warning from '@/components/slides/patterns/Warning';

export default function S6TheoryC4Antipattern() {
  return (
    <div className="grid grid-cols-2 gap-8 h-full items-stretch">
      <Warning
        level="안티패턴"
        title="sub-agent가 일치라고 했으니 그대로 신뢰"
        description="자동 보고를 무비판적으로 수용."
        reason="sub-agent도 AI 산출물이므로 검증 필요"
        avoidance={[
          'prd-reviewer의 일치 보고를 다시 확인하지 않음',
          '자동 커밋된 메시지를 검토하지 않음',
          '검증 누락으로 오류 누적',
        ]}
      />

      <Warning
        level="올바른 운영"
        tone="good"
        title="sub-agent 보고도 AI 산출물. 직접 확인하고 수정"
        description="자동 보고를 작업자가 검증 후 승인."
        reason="자동화는 편의를 주지만 최종 책임은 작업자"
        avoidance="prd-reviewer 보고 & docs/prd.md 확인 & git log 확인 & 승인"
      />
    </div>
  );
}
