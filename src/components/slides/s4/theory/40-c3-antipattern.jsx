// Source: lectures/S4/lecture.md lines 421-433 (#### 안티패턴 vs 권장 운영)
// Type: example (Warning bad/good)

import Warning from '@/components/slides/patterns/Warning';

export default function S4TheoryC3Antipattern() {
  return (
    <div className="grid grid-cols-2 gap-8 h-full items-stretch">
      <Warning
        level="안티패턴"
        title={`"Permissions를 너무 느슨하게 두면"`}
        description="모든 도구를 allow에 두는 운영."
        reason="에이전트가 시스템 파일까지 만지게 됨"
        avoidance={[
          'BashWithSudo도 자동 허용',
          '환경 변수 노출 위험',
          '시스템 단위 회복 어려운 결과',
        ]}
      />

      <Warning
        level="권장 운영"
        tone="good"
        title={`"권장 settings.json 템플릿을 그대로 적용"`}
        description="안전과 속도의 균형이 자동으로 갖춰진다."
        reason="allow / ask / deny가 도구 위험도에 맞게 분배됨"
        avoidance="자유 변형은 자가 학습 영역 — 본 학습은 템플릿 그대로"
      />
    </div>
  );
}
