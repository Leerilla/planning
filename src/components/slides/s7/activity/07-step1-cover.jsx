// Source: lectures/S7/lecture.md L576-579 (### Step 1: 핵심 시나리오 선택과 E2E 테스트 작성)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S7ActivityStep1Cover() {
  return (
    <Cover
      eyebrow="Step 1"
      title="핵심 시나리오 + E2E 테스트 작성"
      subtitle="PRD 핵심 시나리오 1개를 자연어로 E2E 테스트로 변환"
      objectives={[
        'docs/prd.md에서 핵심 시나리오 1개 선택',
        '자연어 명령으로 E2E 테스트 작성 위임',
        'Playwright MCP로 테스트 코드 작성 + 실행',
        '통과 → Step 3, 실패 → Step 2 분기 진입',
      ]}
    />
  );
}
