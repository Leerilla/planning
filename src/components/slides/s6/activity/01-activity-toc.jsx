// Source: lectures/S6/lecture.md L654 (자동 D-032, ## 실습 목차)
// Type: toc (실습 목차, 실습 구성)

import Objectives from '@/components/slides/patterns/Objectives';

export default function S6ActivityToc() {
  return (
    <Objectives
      eyebrow="실습 구성"
      items={[
        'Step 0: 환경 진단',
        'Step 1: prd-reviewer sub-agent 작성',
        'Step 2: git-committer sub-agent 작성',
        'Step 3: hook 작성 (PostToolUse + Stop)',
        'Step 4: 화면 1 나머지 Task 빌드',
        'Step 5: 화면 2 빌드 (패턴 복사)',
        'Step N: 정리와 비용 비교',
        '과제 + Tips',
      ]}
    />
  );
}
