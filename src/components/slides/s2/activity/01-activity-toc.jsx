// Source: lectures/S2/lecture.md L182-184 ## 🚀 [활동] 두 축 검증 시작
// Type: toc (실습 목차, D-032 자동 생성)
// D-035: emoji 🚀/🔍/📂/🤝 모두 텍스트화

import Objectives from '@/components/slides/patterns/Objectives';

export default function S2ActivityToc() {
  return (
    <Objectives
      eyebrow="실습의 흐름"
      items={[
        '활동 묶음 1 — 능동 검증 카피 (메타 프롬프팅)',
        '활동 묶음 2 — 수동 검증 첫 데이터 (Playwright MCP)',
        '활동 묶음 3 — 발송 채널 결정과 회고',
        '과제 안내',
        'Tips — 메타·후크·안전망',
      ]}
    />
  );
}
