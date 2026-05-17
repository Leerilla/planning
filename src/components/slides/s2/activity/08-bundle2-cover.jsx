// Source: lectures/S2/lecture.md L253
// Type: title (### 활동 묶음 2 섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S2ActivityBundle2Cover() {
  return (
    <Cover
      eyebrow="활동 묶음 2"
      title="수동 검증 첫 데이터"
      subtitle="Playwright MCP로 페르소나 커뮤니티의 글 30건 이상을 수집해 페인포인트 신호 1-2개를 손에 쥔다."
      objectives={[
        '2-1. 페르소나 커뮤니티 1개 결정',
        '2-2. Claude Code + Playwright MCP로 스크래핑',
        '2-3. 결과 확인 + 페인포인트 신호 1-2개 메모',
        '2-4. 시드 5 적용 예시 — 두 축 운영 패턴',
      ]}
    />
  );
}
