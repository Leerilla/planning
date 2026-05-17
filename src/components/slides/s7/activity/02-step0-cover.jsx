// Source: lectures/S7/lecture.md L515-517 (### Step 0: 환경 진단)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S7ActivityStep0Cover() {
  return (
    <Cover
      eyebrow="Step 0"
      title="환경 진단"
      subtitle="자료 6 산출물 점검과 Playwright MCP 연결 확인"
      objectives={[
        '자료 6 산출물 5개 점검 (화면 2개 + sub-agent 2개 + hook 2개)',
        'Playwright MCP 연결 확인',
        '/cost 토큰 베이스라인 메모',
        '다음 Step 진입 준비 완료',
      ]}
    />
  );
}
