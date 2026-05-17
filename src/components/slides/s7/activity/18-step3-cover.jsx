// Source: lectures/S7/lecture.md L705-711 (### Step 3: scenario-verifier 작성과 시나리오 검증 루프)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S7ActivityStep3Cover() {
  return (
    <Cover
      eyebrow="Step 3"
      title="scenario-verifier 작성과 시나리오 검증 루프"
      subtitle="새 sub-agent 작성과 docs/prd.md 기반 시나리오 검증 루프 진행"
      objectives={[
        'scenario-verifier.md 작성 (6원칙 적용)',
        '첫 호출 + 보고서 3단 구조 확인',
        '검증 루프 진행 (검증 → 수정 → 재검증)',
        '통과 조건 + 작업자 본인 검증',
      ]}
    />
  );
}
