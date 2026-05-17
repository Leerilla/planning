// Source: lectures/S3/lecture.md lines 645-660 (안티패턴 vs 올바른 운영)
// Type: example (Warning bad/good 좌우)

import Warning from '@/components/slides/patterns/Warning';

export default function S3TheoryC5Antipattern() {
  return (
    <div className="grid grid-cols-2 gap-8 h-full items-stretch">
      <Warning
        level="안티패턴"
        title={`"Manyfast가 만든 PRD를 그대로 사용한다"`}
        description="AI 자동 검토만 믿고 작업자 정독을 생략."
        reason="AI는 의도 구분 불가 + 깊은 모호함 놓침"
        avoidance={[
          '모호한 표현이 PRD에 남음',
          '검증 단계에서 측정 불가 지표 발견',
          '재작업 → 1주 손실',
        ]}
      />

      <Warning
        level="올바른 운영"
        tone="good"
        title={`"Manyfast PRD에서 모호한 표현 1개·검증 불가 지표 1개를 직접 찾아 수정한 뒤 사용"`}
        description="AI 자동 검토는 보조, 작업자 정독이 본 검증."
        reason="의도 구분과 맥락 반영은 작업자만 가능"
        avoidance="최소 1회 정독 + 1건 이상 수정 후 export"
      />
    </div>
  );
}
