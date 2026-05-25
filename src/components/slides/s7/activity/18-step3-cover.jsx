// Source: lectures/S7/lecture.md L705-711 (### Step 3: scenario-verifier 작성과 시나리오 검증 루프)
// Type: title (섹션 표지)
// S7 T16a (2026-05-25): 강사 분석 — Step 1-2 E2E와 Step 3 verifier가 중복으로 보임
//                       lecture.md L896-898 "두 증거" 메시지를 cover subtitle/objectives에 반영

import Cover from '@/components/slides/patterns/Cover';

export default function S7ActivityStep3Cover() {
  return (
    <Cover
      eyebrow="Step 3"
      title="scenario-verifier 작성과 시나리오 검증 루프"
      subtitle="E2E는 동작 증거 — 본 Step은 PRD 일치 증거. 두 증거를 모두 확보해야 배포 단계 진입"
      objectives={[
        'scenario-verifier.md 작성 (6원칙 적용)',
        '첫 호출 + 보고서 3단 구조 확인',
        '검증 루프 진행 (검증 → 수정 → 재검증)',
        '통과 조건 + 두 증거 보유 확인',
      ]}
    />
  );
}
